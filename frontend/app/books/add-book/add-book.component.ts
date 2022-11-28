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



  @Input () book!:Book;
  bookID!: number;
  bookName!: string;
  bookAuthor!: string;
  bookPrice!: number;
  bookYearPublished!: number;

  ngOnInit(): void {
    this.bookID = this.book.ID;
    this.bookName = this.book.Name;
    this.bookAuthor = this.book.Author;
    this.bookPrice = this.book.Price;
    this.bookYearPublished = this.book.YearPublished;
  }


  addBook(){
    var book = new Book(0,this.bookName, this.bookAuthor, this.bookPrice, this.bookYearPublished)
  this.service.addBook(book).subscribe(res=>{
  alert(res.toString());
  });
  }

  editBook(){
    var book = new Book(this.bookID,this.bookName, this.bookAuthor, this.bookPrice, this.bookYearPublished)
  this.service.editBook(book).subscribe(res=>{
  alert(res.toString());
  });
  }
}
