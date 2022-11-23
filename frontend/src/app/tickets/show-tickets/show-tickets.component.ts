import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-tickets',
  templateUrl: './show-tickets.component.html',
  styleUrls: ['./show-tickets.component.css']
})

export class ShowTicketsComponent implements OnInit {

  constructor(private service:SharedService) { }

  TicketList: any=[];
  ModalTitle!: string;
  ActivateAddTicketComponent!: boolean;
  Ticket: any;

  ngOnInit(): void {
    this.getTickets();
  }

  addClick(){
    
    this.ModalTitle="Add ticket";
    this.ActivateAddTicketComponent=true; 
  }

  closeClick(){
    this.ActivateAddTicketComponent=false;
    this.getTickets(); 
  }


  deleteClick(ticket: any)
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
      this.TicketList = data;
    })
  }
}
