import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Book } from './models/book';
import { Reader } from './models/reader';
import { Ticket } from './models/ticket';
import { InfoBook } from './models/infobook';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "https://localhost:7162/api";


  constructor(private http:HttpClient) {}
  
  getReaderList(): Observable<Reader[]> {
    return this.http.get<Reader[]>(this.APIUrl+'/reader');
  }

  getReader(value: number): Observable<Reader>{
    return this.http.get<Reader>(this.APIUrl+`/reader/${value}`);
  }

  getBookList(): Observable<Book[]>{
    return this.http.get<Book[]>(this.APIUrl+'/book');
  }

  getBook(value: number): Observable<Book>{
    return this.http.get<Book>(this.APIUrl+`/book/${value}`);
  }

  getTicketList(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.APIUrl+'/ticket');
  }

  getTicket(value: number): Observable<Ticket>{
    return this.http.get<Ticket>(this.APIUrl+`/ticket/${value}`);
  }

  getInfoBookList(): Observable<InfoBook[]>{
    return this.http.get<InfoBook[]>(this.APIUrl+'/infobook');
  }

  addReader(value: Reader){
    return this.http.post(this.APIUrl+'/reader',value);
  }

  addBook(value: Book){
    return this.http.post(this.APIUrl+'/book',value);
  }

  addTicket(value: Ticket){
    return this.http.post(this.APIUrl+'/ticket',value);
  }

  addInfoBook(value: InfoBook){
    return this.http.post(this.APIUrl+'/infobook', value);
  }

  editReader(value: Reader){
    return this.http.put(this.APIUrl+'/reader',value);
  }

  editBook(value: Book){
    return this.http.put(this.APIUrl+'/book',value);
  }

  deleteReader(value: number){
    return this.http.delete(this.APIUrl+`/reader/${value}`);
  }

  deleteBook(value: number){
    return this.http.delete(this.APIUrl+`/book/${value}`);
  }

  deleteTicket(value: number){
    return this.http.delete(this.APIUrl+`/ticket/${value}`);
  }

  deleteInfoBook(value: number){
    return this.http.delete(this.APIUrl+`/infobook/${value}`);
  }
}
