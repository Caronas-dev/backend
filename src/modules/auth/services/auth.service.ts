import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/modules/user/services/user.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    this.logger.log(`Validating user with email: ${email}`);
    const user = await this.userService.findOneByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      this.logger.log(`User ${email} validated successfully`);
      const { password, ...result } = user;
      return result;
    }

    this.logger.warn(`Invalid credentials for user: ${email}`);
    return null;
  }

  async login(user: { email: string; password: string }) {
    this.logger.log(`Attempting to log in user with email: ${user.email}`);
    const validUser = await this.validateUser(user.email, user.password);

    if (!validUser) {
      this.logger.warn(`Failed login attempt for user: ${user.email}`);
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      email: validUser.email,
      sub: validUser.id,
    };
    const token = this.jwtService.sign(payload);

    this.logger.log(`Token generated for user: ${user.email}`);
    return { access_token: token };
  }
}