import { Reader } from "./reader";

export class Ticket{
    ID!: number;
    ReaderID!: number;
    DateStart!: Date;
    DateEnd!: Date;
    Reader!: Reader;

    constructor(id: number, readerID: number, dateStart: Date, dateEnd: Date, reader: Reader){
        this.ID = id;
        this.ReaderID = readerID;
        this.DateStart = dateStart;
        this.DateEnd = dateEnd;
        this.Reader = reader;
    }
}