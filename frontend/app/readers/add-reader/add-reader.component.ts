import { Component, Input, OnInit } from '@angular/core';
import { Reader } from 'src/app/models/reader';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-reader',
  templateUrl: './add-reader.component.html',
  styleUrls: ['./add-reader.component.css']
})
export class AddReaderComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() reader!:Reader;
  readerID!: number;
  readerSurname!:string;
  readerName!: string;
  readerPatronymicName!: string;
  readerAddress!: string;
  readerPhone!: number;
  readerDateBirth!: Date;


  ngOnInit(): void {
    this.readerID = this.reader.ID;
    this.readerSurname = this.reader.Surname;
    this.readerName = this.reader.Name;
    this.readerPatronymicName = this.reader.PatronymicName;
    this.readerAddress = this.reader.Address;
    this.readerPhone = this.reader.Phone;
    this.readerDateBirth = this.reader.DateBirth
    
  }

  addReader(){
    var reader = new Reader(0, this.readerSurname, this.readerName, this.readerPatronymicName, 
      this.readerAddress, this.readerPhone, this.readerDateBirth)
      this.service.addReader(reader).subscribe(res=>{
          alert(res.toString());
      });
  }


  editReader(){
    var reader = new Reader(this.readerID, this.readerSurname, this.readerName, this.readerPatronymicName, 
    this.readerAddress, this.readerPhone, this.readerDateBirth)
    this.service.editReader(reader).subscribe(res=>{
      alert(res.toString());
    });
  }
}
