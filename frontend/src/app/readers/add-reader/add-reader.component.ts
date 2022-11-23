import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-reader',
  templateUrl: './add-reader.component.html',
  styleUrls: ['./add-reader.component.css']
})
export class AddReaderComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() Reader:any;
  ReaderID: any;
  ReaderSurname:any;
  ReaderName: any;
  ReaderPatronymicName: any;
  ReaderAddress: any;
  ReaderPhone: any;
  ReaderDateBirth: any;


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
    var reader = {
                  Surname: this.ReaderSurname,
                  Name: this.ReaderName,
                  PatronymicName: this.ReaderPatronymicName,
                  Address: this.ReaderAddress,
                  Phone: this.ReaderPhone,
                  DateBirth: this.ReaderDateBirth
                  };
      this.service.addReader(reader).subscribe(res=>{
          alert(res.toString());
      });
  }


  editReader(){
    var reader = {ID: this.ReaderID,
                  Surname: this.ReaderSurname,
                  Name: this.ReaderName,
                  PatronymicName: this.ReaderPatronymicName,
                  Address: this.ReaderAddress,
                  Phone: this.ReaderPhone,
                  DateBirth: this.ReaderDateBirth
                  };
    this.service.editReader(reader).subscribe(res=>{
      alert(res.toString());
    });
  }
}
