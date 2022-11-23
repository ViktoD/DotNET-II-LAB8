import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-infobooks',
  templateUrl: './show-infobooks.component.html',
  styleUrls: ['./show-infobooks.component.css']
})
export class ShowInfobooksComponent implements OnInit {

  constructor(private service:SharedService) { }

  InfoBookList: any = [];
  ModalTitle!: string;
  ActivateAddInfoBookComponent!: boolean;
  InfoBook: any;

  ngOnInit(): void {
    this.getInfoBookList();
  }

  addClick(){
    this.ModalTitle="Add information about";
    this.ActivateAddInfoBookComponent=true;
  }

  closeClick(){
    this.ActivateAddInfoBookComponent = false;
    this.getInfoBookList();
  }

  deleteClick(infobook: any)
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
      this.InfoBookList = data;
    })
  }



}
