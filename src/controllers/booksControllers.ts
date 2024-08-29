import { Request, Response } from "express";
import { booksServices } from "../services/booksServices";

export class booksControllers {
    
    createBook(req: Request, res: Response): Response {

        const BooksServices = new booksServices();

        const response = BooksServices.createBook(req.body);

        return res.status(201).json(response);
    }
    
    getBooks(req: Request, res: Response): Response {

        const BooksServices = new booksServices();

        const bookName = req.query.search as string;
        
        if (bookName) {
            const response = BooksServices.getBooks(bookName);

            return res.status(200).json(response);
        }

        const response = BooksServices.getBooks();

        return res.status(200).json(response)
    }

    getOneBook(req: Request, res: Response): Response {

        const BooksServices = new booksServices();

        const response = BooksServices.getOneBook(req.params.id);

        return res.status(200).json(response)
    }

    editBook(req: Request, res: Response): Response {
        const BooksService = new booksServices();

        const response = BooksService.editBook(req.params.id, req.body);

        return res.status(200).json(response);
    }

    deleteBook(req: Request, res: Response) {
        const BooksServices = new booksServices();

        BooksServices.deleteBook(req.params.id);

        return res.status(204).json();
    }
}