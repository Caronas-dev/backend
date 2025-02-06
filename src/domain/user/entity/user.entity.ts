import { InviteEntity } from 'src/domain/invite/entity/invite.entity';
import { RideEntity } from 'src/domain/ride/entity/ride.entity';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'auto_description', type: 'varchar' })
  autoDescription: string;

  @Column({ name: 'email', type: 'varchar' })
  email: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @Column({ name: 'phone_number', type: 'varchar' })
  phoneNumber: string;

  @Column({ name: 'document', type: 'varchar' })
  document: string;

  @Column({ name: 'birth_date', type: 'date' })
  birthDate: Date;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'is_deleted', type: 'boolean' })
  isDeleted: boolean;

  @Column({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;

  @OneToMany(() => RideEntity, (ride) => ride.driverId)
  drivingRides: RideEntity[];

  @ManyToMany(() => RideEntity, (ride) => ride.passengers)
  ridingRides: RideEntity[];

  @OneToMany(() => InviteEntity, (invite) => invite.userId)
  invites: InviteEntity[];

  @OneToMany(() => InviteEntity, (invite) => invite.rideId)
  rideInvites: InviteEntity[];

  @OneToMany(() => InviteEntity, (invite) => invite.userId)
  rideRequests: InviteEntity[];
}
