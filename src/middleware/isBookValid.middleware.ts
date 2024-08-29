import { Request, Response, NextFunction } from "express";
import { booksDatabase } from "../database/database";
import { appError } from "../errors/errors";

export class isBookIdValid{
    static execute(req: Request, res: Response, next: NextFunction){
        if(!booksDatabase.some(book => book.id === Number(req.params.id))){
            throw new appError("Book not found.", 404)
        }
        next();
    }
}

export class isBookIdEqual {
    static execute(req: Request, res: Response, next: NextFunction) {
        if (booksDatabase.some(book => book.name === req.body.name)){
            throw new appError("Book already registered.", 409)
        }
        next();
}
}
