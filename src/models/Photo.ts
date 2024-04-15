import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column("text")
    description!: string;

    @Column()
    filename!: string;

    @Column()
    views!: string;

    @Column()
    isPublished!: boolean;
};
