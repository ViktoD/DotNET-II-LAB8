import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "https://localhost:7162/api";


  constructor(private http:HttpClient) {}
  
  getReaderList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/reader');
  }

  getReader(value: any): Observable<any>{
    return this.http.get<any>(this.APIUrl+`/reader/${value}`);
  }

  getBookList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/book');
  }

  getBook(value: any): Observable<any>{
    return this.http.get<any>(this.APIUrl+`/book/${value}`);
  }

  getTicketList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/ticket');
  }

  getTicket(value: any): Observable<any>{
    return this.http.get<any>(this.APIUrl+`/ticket/${value}`);
  }

  getInfoBookList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/infobook');
  }

  addReader(value: any){
    return this.http.post(this.APIUrl+'/reader',value);
  }

  addBook(value: any){
    return this.http.post(this.APIUrl+'/book',value);
  }

  addTicket(value: any){
    return this.http.post(this.APIUrl+'/ticket',value);
  }

  addInfoBook(value: any){
    return this.http.post(this.APIUrl+'/infobook', value);
  }

  editReader(value: any){
    return this.http.put(this.APIUrl+'/reader',value);
  }

  editBook(value: any){
    return this.http.put(this.APIUrl+'/book',value);
  }

  deleteReader(value: any){
    return this.http.delete(this.APIUrl+`/reader/${value}`);
  }

  deleteBook(value: any){
    return this.http.delete(this.APIUrl+`/book/${value}`);
  }

  deleteTicket(value: any){
    return this.http.delete(this.APIUrl+`/ticket/${value}`);
  }

  deleteInfoBook(value: any){
    return this.http.delete(this.APIUrl+`/infobook/${value}`);
  }
}
