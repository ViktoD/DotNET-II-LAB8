import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-tickets',
  templateUrl: './show-tickets.component.html',
  styleUrls: ['./show-tickets.component.css']
})

export class ShowTicketsComponent implements OnInit {

  constructor(private service:SharedService) { }

  ticketList!: Ticket[];
  modalTitle!: string;
  activateAddTicketComponent!: boolean;
  ticket!: Ticket;

  ngOnInit(): void {
    this.getTickets();
  }

  addClick(){
    
    this.modalTitle="Add ticket";
    this.activateAddTicketComponent=true; 
  }

  closeClick(){
    this.activateAddTicketComponent=false;
    this.getTickets(); 
  }


  deleteClick(ticket: Ticket)
  {
    if(confirm("Do you want delete this ticket?"))
    {
      this.service.deleteTicket(ticket.ID).subscribe(res=>{
        alert(res.toString());
        this.getTickets();
      });
      
    }
   
  }

  getTickets(){
    this.service.getTicketList().subscribe(data=>{
      this.ticketList = data;
    })
  }
}
