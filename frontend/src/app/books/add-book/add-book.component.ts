import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private service:SharedService) { }



  @Input () Book:any;
  BookID: any;
  BookName: any;
  BookAuthor: any;
  BookPrice: any;
  BookYearPublished: any;

  ngOnInit(): void {
    this.BookID = this.Book.ID;
    this.BookName = this.Book.Name;
    this.BookAuthor = this.Book.Author;
    this.BookPrice = this.Book.Price;
    this.BookYearPublished = this.Book.YearPublished;
  }


  addBook(){
    var book = {
      Name: this.BookName,
      Author: this.BookAuthor,
      Price: this.BookPrice,
      YearPublished: this.BookYearPublished
      };
  this.service.addBook(book).subscribe(res=>{
  alert(res.toString());
  });
  }

  editBook(){
    var book = {
      ID: this.BookID,
      Name: this.BookName,
      Author: this.BookAuthor,
      Price: this.BookPrice,
      YearPublished: this.BookYearPublished
      };
  this.service.editBook(book).subscribe(res=>{
  alert(res.toString());
  });
  }
}
