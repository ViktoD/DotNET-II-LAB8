import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { InfoBook } from 'src/app/models/infobook';
import { Ticket } from 'src/app/models/ticket';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-infobook',
  templateUrl: './add-infobook.component.html',
  styleUrls: ['./add-infobook.component.css']
})
export class AddInfobookComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input ()
  BookInfoID!: number;
  TicketInfoID!: number;
  DateTake!: Date;
  DateReturn!: Date;
  TicketList!: Ticket[];
  BookList!: Book[];


  ngOnInit(): void {
    this.service.getBookList().subscribe(data=>{
      this.BookList = data;
    })
    this.service.getTicketList().subscribe(data=>{
      this.TicketList = data;
    })
  }

  addInfoBook(){
    this.service.getBook(this.BookInfoID).subscribe(book=>{

        this.service.getTicket(this.TicketInfoID).subscribe(ticket=>{
          this.service.getReader(ticket.ReaderID).subscribe(reader=>{

            ticket.Reader = reader;

            var infobook= new InfoBook(0,this.BookInfoID, this.TicketInfoID, this.DateTake, this.DateReturn,
              book,ticket)
            this.service.addInfoBook(infobook).subscribe(res=>{
              alert(res.toString());
            })

          })
          
        });

    });
  }
}
