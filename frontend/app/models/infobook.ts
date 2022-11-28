import { bindCallback } from "rxjs";
import { Book } from "./book";
import { Ticket } from "./ticket";

export class InfoBook{
    ID!: number;
    BookID!: number;
    TicketID!: number;
    DateTakeBook!: Date;
    DateReturnBook!: Date;
    Book!: Book;
    Ticket!: Ticket;

    constructor(id: number, bookID: number, ticketID: number, dateTakeBook: Date, 
        dateReturnBook: Date, book:Book, ticket:Ticket ){

            this.ID = id;
            this.BookID = bookID;
            this.TicketID = ticketID;
            this.DateTakeBook = dateTakeBook;
            this.DateReturnBook = dateReturnBook;
            this.Book = book;
            this.Ticket = ticket;
        }
}