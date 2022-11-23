import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  @Input() 
  TicketReaderID: any;
  TicketDateStart!: Date;
  TicketDateEnd!: Date;
  ReaderList: any=[];

  ngOnInit(): void {
    this.service.getReaderList().subscribe(data=>{
      this.ReaderList = data;
    });

  }

  addTicket(){
    this.service.getReader(this.TicketReaderID).subscribe(data=>{
      var ticket = {
        ReaderID: this.TicketReaderID,
        DateStart: this.TicketDateStart,
        DateEnd: this.TicketDateEnd,
        Reader: data
      }

      this.service.addTicket(ticket).subscribe(res=>{
          alert(res.toString());
      });
    });
    
  }

}
