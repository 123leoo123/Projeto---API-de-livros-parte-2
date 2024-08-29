import { Router } from "express";
import { isBookIdEqual, isBookIdValid } from "../middleware/isBookValid.middleware";
import { validateRequest } from "../middleware/validateRequest.middleware";
import { createBookBodySchema, editBookBodySchema } from "../schema/createBody.schemas";
import { booksControllers } from "../controllers/booksControllers";
import { booksServices } from "../services/booksServices";

export const booksRoutes = Router();

const BooksControllers = new booksControllers();

booksRoutes.get("/", BooksControllers.getBooks);

booksRoutes.get("/:id", isBookIdValid.execute, BooksControllers.getOneBook);

booksRoutes.post("/", validateRequest.execute({ body: createBookBodySchema }), isBookIdEqual.execute, BooksControllers.createBook);

booksRoutes.delete("/:id", isBookIdValid.execute, BooksControllers.deleteBook);

booksRoutes.patch("/:id", isBookIdValid.execute, validateRequest.execute({body: editBookBodySchema}), isBookIdEqual.execute, BooksControllers.editBook);