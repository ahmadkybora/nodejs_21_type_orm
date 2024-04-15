import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
require("dotenv").config();

interface Ienv {
    DB_CONNECTION: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_DATABASE: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
};

const { 
    DB_CONNECTION,
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD
}: Ienv = process.env;

export const AppDataSource = new DataSource({
    type: DB_CONNECTION,
    host: DB_HOST,
    port: 3306,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
