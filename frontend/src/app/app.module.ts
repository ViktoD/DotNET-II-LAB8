import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadersComponent } from './readers/readers.component';
import { ShowReadersComponent } from './readers/show-readers/show-readers.component';
import { AddReaderComponent } from './readers/add-reader/add-reader.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { ShowBooksComponent } from './books/show-books/show-books.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ShowTicketsComponent } from './tickets/show-tickets/show-tickets.component';
import { AddTicketComponent } from './tickets/add-ticket/add-ticket.component';
import { InfobooksComponent } from './infobooks/infobooks.component';
import { ShowInfobooksComponent } from './infobooks/show-infobooks/show-infobooks.component';
import { AddInfobookComponent } from './infobooks/add-infobook/add-infobook.component';
import { BookComponent } from './models/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadersComponent,
    ShowReadersComponent,
    AddReaderComponent,
    BooksComponent,
    AddBookComponent,
    ShowBooksComponent,
    TicketsComponent,
    ShowTicketsComponent,
    AddTicketComponent,
    InfobooksComponent,
    ShowInfobooksComponent,
    AddInfobookComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
