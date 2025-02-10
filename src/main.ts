import 'reflect-metadata';
import { NestFactory } from '@nestjs/core/nest-factory';
import { AppModule } from 'src/modules/app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}

main();
