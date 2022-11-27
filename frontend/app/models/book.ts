export class Book{
     ID!: number;
     Name!: string;
     Author!: string;
     Price!: number;
     YearPublished!: number;

     constructor(id:number, name: string, author: string, price: number, yearPublished: number){
          this.ID = id;
          this.Name = name;
          this.Author = author;
          this.Price = price;
          this.YearPublished = yearPublished;
     }

     
}