import { Photo } from "../models/Photo";
import "reflect-metadata";
import { DataSource } from "typeorm";
require("dotenv").config();

// interface Ienv {
//     DB_CONNECTION: string;
//     DB_HOST: string;
//     DB_PORT: number;
//     DB_DATABASE: string;
//     DB_USERNAME: string;
//     DB_PASSWORD: string;
// };

// const { 
//     DB_CONNECTION,
//     DB_HOST,
//     DB_PORT,
//     DB_DATABASE,
//     DB_USERNAME,
//     DB_PASSWORD
// }: Ienv = process.env;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "ahmadkybora",
    password: "09392141724abc",
    database: "nodets_1",
    synchronize: true,
    logging: false,
    entities: [Photo],
    migrations: [],
    subscribers: [],
});
