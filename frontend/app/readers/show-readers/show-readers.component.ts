import { Component, OnInit } from '@angular/core';
import { Reader } from 'src/app/models/reader';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-readers',
  templateUrl: './show-readers.component.html',
  styleUrls: ['./show-readers.component.css']
})
export class ShowReadersComponent implements OnInit {

  constructor(private service:SharedService) { }

  readerList: Reader[]|null=null;
  modalTitle!: string;
  activateAddReaderComponent!: boolean;
  reader!: Reader; 

  ngOnInit(): void { 
    this.getList();
  }

  addClick(){
    this.reader=new Reader(0,'','','','',0,new Date(1,1,1));
    this.modalTitle="Add reader";
    this.activateAddReaderComponent=true; 
  }

  closeClick(){
    this.activateAddReaderComponent=false;
    this.getList(); 
  }


  editClick(reader: Reader)
  {
    this.reader=reader;
    this.modalTitle="Edit reader";
    this.activateAddReaderComponent=true;
  }

  deleteClick(reader: Reader)
  {
    if(confirm("Do you want delete this reader?"))
    {
      this.service.deleteReader(reader.ID).subscribe(res=>{
        alert(res.toString());
        this.getList();
      });
      
    }
   
  }

  getList(){
    this.service.getReaderList().subscribe(data=>{
      this.readerList = data;
    })
  }

}
