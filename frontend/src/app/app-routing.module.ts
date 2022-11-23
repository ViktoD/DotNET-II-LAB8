import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { InfobooksComponent } from './infobooks/infobooks.component';

import { ReadersComponent } from './readers/readers.component'; 
import { TicketsComponent } from './tickets/tickets.component';
const routes: Routes = [
  {path: 'readers', component:ReadersComponent},
  {path: 'books', component:BooksComponent},
  {path: 'tickets', component:TicketsComponent},
  {path: 'infobooks', component:InfobooksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
