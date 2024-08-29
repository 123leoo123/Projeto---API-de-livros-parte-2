import express, { json } from "express";
import { booksRoutes } from "./routes/booksRoutes";
import { HandleErrors } from "./errors/handleErrors.middleware";
import "express-async-errors";
import helmet from "helmet";

export const app = express();

app.use(json());

app.use(helmet());

app.use("/books", booksRoutes);

app.use(HandleErrors.execute);


