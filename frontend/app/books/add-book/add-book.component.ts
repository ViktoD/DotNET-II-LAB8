import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private service:SharedService) { }



  @Input () Book!:Book;
  BookID!: number;
  BookName!: string;
  BookAuthor!: string;
  BookPrice!: number;
  BookYearPublished!: number;

  ngOnInit(): void {
    this.BookID = this.Book.ID;
    this.BookName = this.Book.Name;
    this.BookAuthor = this.Book.Author;
    this.BookPrice = this.Book.Price;
    this.BookYearPublished = this.Book.YearPublished;
  }


  addBook(){
    var book = new Book(0,this.BookName, this.BookAuthor, this.BookPrice, this.BookYearPublished)
  this.service.addBook(book).subscribe(res=>{
  alert(res.toString());
  });
  }

  editBook(){
    var book = new Book(this.BookID,this.BookName, this.BookAuthor, this.BookPrice, this.BookYearPublished)
  this.service.editBook(book).subscribe(res=>{
  alert(res.toString());
  });
  }
}
