import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tradesman {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  contactPhone: string;

  @Column()
  contactEmail: string;

  @Column()
  accountEmail: string;

  @Column()
  profession: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  accStatus: string;

  @Column({ type: 'longblob', nullable: true })
  profileImage: Buffer;

  @Column()
  password: string;
}