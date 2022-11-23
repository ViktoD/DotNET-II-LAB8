import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-infobook',
  templateUrl: './add-infobook.component.html',
  styleUrls: ['./add-infobook.component.css']
})
export class AddInfobookComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input ()
  BookInfoID: any;
  TicketInfoID: any;
  DateTake!: Date;
  DateReturn!: Date;
  TicketList: any = [];
  BookList: any = [];


  ngOnInit(): void {
    this.service.getBookList().subscribe(data=>{
      this.BookList = data;
    })
    this.service.getTicketList().subscribe(data=>{
      this.TicketList = data;
    })
  }

  addInfoBook(){
    this.service.getBook(this.BookInfoID).subscribe(data=>{

        this.service.getTicket(this.TicketInfoID).subscribe(ticket=>{
          this.service.getReader(ticket.ReaderID).subscribe(reader=>{
            var tick = {
              ID: ticket.ID,
              ReaderID: ticket.ReaderID,
              DateStart: ticket.DateStart,
              DateEnd: ticket.DateEnd,
              Reader: reader
            }
            
            var infobook={
              BookID: this.BookInfoID,
              TicketID: this.TicketInfoID,
              DateTakeBook: this.DateTake,
              DateReturnBook: this.DateReturn,
              Book: data,
              Ticket: tick
            };
            this.service.addInfoBook(infobook).subscribe(res=>{
              alert(res.toString());
            })

          })
          
        });

    });
  }
}
