import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import {Company} from "./Company";

@Entity()
export class Employee extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;


    @ManyToOne(type => Company, workplace => workplace.staff,{
        nullable: true
    })
    workplace: Company;

}
