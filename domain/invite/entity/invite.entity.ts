import { RideEntity } from 'domain/ride/entity/ride.entity';
import { UserEntity } from 'domain/user/entity/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'invite' })
export class InviteEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'ride_id', type: 'number' })
  rideId: number;

  @Column({ name: 'user_id', type: 'number' })
  userId: number;

  @Column({ name: 'status', type: 'varchar' })
  status: string;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.invites)
  user: UserEntity;

  @ManyToOne(() => RideEntity, (ride) => ride.invites)
  ride: RideEntity;
}
