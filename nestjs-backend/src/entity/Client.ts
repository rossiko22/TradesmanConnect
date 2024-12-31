import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {

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
    city: string;

    @Column()
    country: string;

    @Column({type: 'longblob', nullable: true})
    profileImage: Buffer; // Ovoj treba buffer

    @Column()
    accStatus: string;
    
    @Column()
    password: string;
}