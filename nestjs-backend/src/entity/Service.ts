import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Service{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tradesmanFirstName: string;

    @Column()
    tradesmanLastName: string;

    @Column()
    tradesmanId: number;

    @Column()
    contactPhone: string;

    @Column()
    contactEmail: string;

    @Column()
    serviceTitle: string;
    
    @Column()
    serviceCategory: string;
    
    @Column()
    serviceCity: string;
    
    @Column()
    serviceCountry: string;
    
    @Column()
    availableDaysEnd: string;
    
    @Column()
    availableDaysStart: string;

    @Column()
    serviceTimeEnd: string;
    
    @Column()
    serviceTimeStart: string;
}