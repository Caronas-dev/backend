import { UserEntity } from 'src/domain/user/entity/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'rating' })
export class RatingEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'rating', type: 'integer' })
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
