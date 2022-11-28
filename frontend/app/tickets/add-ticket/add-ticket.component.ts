import { Component, Input, OnInit } from '@angular/core';
import { Reader } from 'src/app/models/reader';
import { Ticket } from 'src/app/models/ticket';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  @Input() 
  ticketReaderID!: number;
  ticketDateStart!: Date;
  ticketDateEnd!: Date;
  readerList!: Reader[];

  ngOnInit(): void {
    this.service.getReaderList().subscribe(data=>{
      this.readerList = data;
    });

  }

  addTicket(){
    this.service.getReader(this.ticketReaderID).subscribe(reader=>{
      var ticket = new Ticket(0, this.ticketReaderID, this.ticketDateStart,
        this.ticketDateEnd,reader)

      this.service.addTicket(ticket).subscribe(res=>{
          alert(res.toString());
      });
    });
    
  }

}
