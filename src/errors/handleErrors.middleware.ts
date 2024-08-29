import { NextFunction, Request, Response } from "express";
import { appError } from "./errors";
import { ZodError } from "zod";

export class HandleErrors {
    static execute(err: Error, req: Request, res: Response, next: NextFunction) {
        if (err instanceof ZodError) {
            return res.status(409).json(err);
        }
        if (err instanceof appError) {
            return res.status(err.statusCode).json({ error: err.message });
        } 
            console.log(err);
            return res.status(500).json({ error: "Internal server error." });
    }
}