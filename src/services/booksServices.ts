import { booksDatabase } from "../database/database";
import { Ibooks } from "../interface/booksInterface";

export class booksServices {
    createBook(data: Omit<Ibooks, "id" | "createdAt" | "updatedAt">) {
        const newBook = { id: booksDatabase.length + 1, ...data , createdAt: new Date(), updatedAt: new Date()}

        booksDatabase.push(newBook)

        return newBook;
    }

    getBooks(name?: string) {
        if(name){
            const findBook = booksDatabase.filter(book => book.name.toLowerCase().includes(name.toLowerCase()))
            
            return findBook;
        }

        return booksDatabase;
    }

    getOneBook(id: string) {
        const findBook = booksDatabase.find(book => book.id === Number(id))

        return findBook;
    }

    editBook(id: string, data: Partial<Omit<Ibooks, "id">>) {

        const book = booksDatabase.find(book => book.id === Number(id)) as Ibooks;

        const newBook = { ...book, ...data };

        const index = booksDatabase.findIndex(book => book.id === Number(id));

        booksDatabase.splice(index, 1, newBook);

        return newBook;
    }

    deleteBook(id: string) {
        const index = booksDatabase.findIndex(book => book.id === Number(id))

        booksDatabase.splice(index, 1)
    }  
}