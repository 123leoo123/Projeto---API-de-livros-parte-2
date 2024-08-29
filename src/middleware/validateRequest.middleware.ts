import { AnyZodObject } from "zod";
import { NextFunction, Request, Response } from "express";

export interface IRequestSchemas {
    params?: AnyZodObject;
    body?: AnyZodObject;
    query?: AnyZodObject;
}

export class validateRequest {
    static execute(schema: IRequestSchemas){
        return  (req: Request, res: Response, next: NextFunction) => {
        
            if(schema.params){
                req.params =  schema.params?.parse(req.params);
            }
            
            if(schema.body){
                req.body =   schema.body.parse(req.body);
            }
            
            if(schema.query){
                req.query = schema.query.parse(req.query);
            }
                       
            next();
        
            }
        }
    }