import { RideEntity } from 'src/domain/ride/entity/ride.entity';
import { UserEntity } from 'src/domain/user/entity/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'invite' })
export class InviteEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'ride_id', type: 'integer' })
  rideId: number;

  @Column({ name: 'user_id', type: 'integer' })
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
