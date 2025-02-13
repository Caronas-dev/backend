import { InviteEntity } from 'src/domain/invite/entity/invite.entity';
import { UserEntity } from 'src/domain/user/entity/user.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ride' })
export class RideEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'driver_id', type: 'integer' })
  driverId: number;

  @Column({ name: 'origin', type: 'varchar' })
  origin: string;

  @Column({ name: 'destination', type: 'varchar' })
  destination: string;

  @Column({ name: 'date', type: 'date' })
  date: Date;

  @Column({ name: 'estimated_time', type: 'varchar' })
  estimatedTime: string;

  @Column({ name: 'seats', type: 'integer' })
  seats: number;

  @Column({ name: 'free_seats', type: 'integer' })
  freeSeats: number;

  @Column({ name: 'status', type: 'varchar' })
  status: string;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({ name: 'is_deleted', type: 'boolean' })
  isDeleted: boolean;

  @Column({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;

  @Column({ name: 'is_finished', type: 'boolean' })
  isFinished: boolean;

  @ManyToOne(() => UserEntity, (user) => user.drivingRides)
  driver: UserEntity;

  @ManyToMany(() => UserEntity, (user) => user.ridingRides)
  passengers: UserEntity[];

  @OneToMany(() => InviteEntity, (invite) => invite.rideId)
  invites: InviteEntity[];
}
