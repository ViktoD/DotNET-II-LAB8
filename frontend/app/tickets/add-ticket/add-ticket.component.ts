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
  TicketReaderID!: number;
  TicketDateStart!: Date;
  TicketDateEnd!: Date;
  ReaderList!: Reader[];

  ngOnInit(): void {
    this.service.getReaderList().subscribe(data=>{
      this.ReaderList = data;
    });

  }

  addTicket(){
    this.service.getReader(this.TicketReaderID).subscribe(reader=>{
      var ticket = new Ticket(0, this.TicketReaderID, this.TicketDateStart,
        this.TicketDateEnd,reader)

      this.service.addTicket(ticket).subscribe(res=>{
          alert(res.toString());
      });
    });
    
  }

}
