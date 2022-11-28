import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})

export class ShowBooksComponent implements OnInit {

  constructor(private service: SharedService) { }

  bookList!: Book[];
  modalTitle!:string;
  activateAddBookComponent!:boolean;
  book!: Book;

  ngOnInit(): void {
    this.getBooks();
  }

  addClick(){
    this.book= new Book(0,'','',0,0);
    this.modalTitle = "Add book";
    this.activateAddBookComponent = true;

  }

  closeClick(){
    this.activateAddBookComponent = false;
    this.getBooks();
  }

  editClick(book: Book)
  {
    this.book=book;
    this.modalTitle="Edit book";
    this.activateAddBookComponent=true;
  }

  deleteClick(book: Book)
  {
    if(confirm("Do you want delete this book?"))
    {
      this.service.deleteBook(book.ID).subscribe(res=>{
        alert(res.toString());
        this.getBooks();
      });
      
    }
   
  }

  getBooks(){
    this.service.getBookList().subscribe(data=>{
      this.bookList = data;
    })
  }
}
