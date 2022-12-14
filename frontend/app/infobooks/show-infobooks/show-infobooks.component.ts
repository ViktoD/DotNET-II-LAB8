import { Component, OnInit } from '@angular/core';
import { InfoBook } from 'src/app/models/infobook';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-infobooks',
  templateUrl: './show-infobooks.component.html',
  styleUrls: ['./show-infobooks.component.css']
})
export class ShowInfobooksComponent implements OnInit {

  constructor(private service:SharedService) { }

  infoBookList!: InfoBook[];
  modalTitle!: string;
  activateAddInfoBookComponent!: boolean;
  infoBook!: InfoBook;

  ngOnInit(): void {
    this.getInfoBookList();
  }

  addClick(){
    this.modalTitle="Add information about";
    this.activateAddInfoBookComponent=true;
  }

  closeClick(){
    this.activateAddInfoBookComponent = false;
    this.getInfoBookList();
  }

  deleteClick(infobook: InfoBook)
  {
    if(confirm("Do you want delete this information about book?"))
    {
      this.service.deleteInfoBook(infobook.ID).subscribe(res=>{
        alert(res.toString());
        this.getInfoBookList();
      });
      
    }
   
  }

  getInfoBookList(){
    this.service.getInfoBookList().subscribe(data=>{
      this.infoBookList = data;
    })
  }



}
