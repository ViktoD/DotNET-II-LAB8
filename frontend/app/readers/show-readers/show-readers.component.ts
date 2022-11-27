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

  ReaderList!: Reader[];
  ModalTitle!: string;
  ActivateAddReaderComponent!: boolean;
  Reader!: Reader; 

  ngOnInit(): void { 
    this.getList();
  }

  addClick(){
    this.Reader=new Reader(0,'','','','',0,new Date(1,1,1));
    this.ModalTitle="Add reader";
    this.ActivateAddReaderComponent=true; 
  }

  closeClick(){
    this.ActivateAddReaderComponent=false;
    this.getList(); 
  }


  editClick(reader: Reader)
  {
    this.Reader=reader;
    this.ModalTitle="Edit reader";
    this.ActivateAddReaderComponent=true;
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
      this.ReaderList = data;
    })
  }

}
