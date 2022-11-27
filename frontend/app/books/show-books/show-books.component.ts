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

  BookList!: Book[];
  ModalTitle!:string;
  ActivateAddBookComponent!:boolean;
  Book!: Book;

  ngOnInit(): void {
    this.getBooks();
  }

  addClick(){
    this.Book= new Book(0,'','',0,0);
    this.ModalTitle = "Add book";
    this.ActivateAddBookComponent = true;

  }

  closeClick(){
    this.ActivateAddBookComponent = false;
    this.getBooks();
  }

  editClick(book: Book)
  {
    this.Book=book;
    this.ModalTitle="Edit book";
    this.ActivateAddBookComponent=true;
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
      this.BookList = data;
    })
  }
}
