import { Ibooks } from "../interface/booksInterface"

export const booksDatabase: Ibooks[] = [];

let id = 1;

export const generateId = () => {
    id++
    return id;
}