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

  @Input() Reader!:Reader;
  ReaderID!: number;
  ReaderSurname!:string;
  ReaderName!: string;
  ReaderPatronymicName!: string;
  ReaderAddress!: string;
  ReaderPhone!: number;
  ReaderDateBirth!: Date;


  ngOnInit(): void {
    this.ReaderID = this.Reader.ID;
    this.ReaderSurname = this.Reader.Surname;
    this.ReaderName = this.Reader.Name;
    this.ReaderPatronymicName = this.Reader.PatronymicName;
    this.ReaderAddress = this.Reader.Address;
    this.ReaderPhone = this.Reader.Phone;
    this.ReaderDateBirth = this.Reader.DateBirth
    
  }

  addReader(){
    var reader = new Reader(0, this.ReaderSurname, this.ReaderName, this.ReaderPatronymicName, 
      this.ReaderAddress, this.ReaderPhone, this.ReaderDateBirth)
      this.service.addReader(reader).subscribe(res=>{
          alert(res.toString());
      });
  }


  editReader(){
    var reader = new Reader(this.ReaderID, this.ReaderSurname, this.ReaderName, this.ReaderPatronymicName, 
    this.ReaderAddress, this.ReaderPhone, this.ReaderDateBirth)
    this.service.editReader(reader).subscribe(res=>{
      alert(res.toString());
    });
  }
}
