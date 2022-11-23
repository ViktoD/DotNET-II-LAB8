import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-readers',
  templateUrl: './show-readers.component.html',
  styleUrls: ['./show-readers.component.css']
})
export class ShowReadersComponent implements OnInit {

  constructor(private service:SharedService) { }

  ReaderList: any=[];
  ModalTitle!: string;
  ActivateAddReaderComponent!: boolean;
  Reader: any; 

  ngOnInit(): void { 
    this.getList();
  }

  addClick(){
    this.Reader={
      ReaderID: 0,
      ReaderSurname:"",
      ReaderName: "",
      ReaderPatronymicName:"",
      ReaderAddress:"",
      ReaderPhone: 0,
      ReaderDateBirth: ""
    };
    this.ModalTitle="Add reader";
    this.ActivateAddReaderComponent=true; 
  }

  closeClick(){
    this.ActivateAddReaderComponent=false;
    this.getList(); 
  }


  editClick(reader: any)
  {
    this.Reader=reader;
    this.ModalTitle="Edit reader";
    this.ActivateAddReaderComponent=true;
  }

  deleteClick(reader: any)
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
