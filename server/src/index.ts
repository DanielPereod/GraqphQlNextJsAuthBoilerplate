import "reflect-metadata";
import { apolloServer } from "./config/apolloserver-config";
import { expressApp } from "./config/express-config";
import { createConnection } from "typeorm";
import User from "./graphql/entities/User";

const main = async () => {
  await createConnection({
    type: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    migrationsTableName: "luxsite_migration_table",
    entities: [User],
    logging: true,
    synchronize: true,
  });
  const app = expressApp();
  await apolloServer(app);
};

main();
