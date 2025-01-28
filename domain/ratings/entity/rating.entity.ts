import { UserEntity } from 'domain/user/entity/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'rating' })
export class RatingEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'rating', type: 'number' })
  rating: number;

  @Column({ name: 'comment', type: 'text' })
  comment: string;

  @Column({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.rideInvites)
  ratedUser: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.rideRequests)
  user: UserEntity;
}
