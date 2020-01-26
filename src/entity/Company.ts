import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from "typeorm";
import {Employee} from "./Employee";

@Entity()
export class Company extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Employee, employee => employee.workplace,)
    staff: Employee[];
}
