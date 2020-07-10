import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseDataService extends DefaultDataService<Expense> {

  constructor(http:HttpClient,httpUrlGenerator:HttpUrlGenerator) {
    super('Expense',http,httpUrlGenerator);
   }

   getAll():Observable<Expense[]>
   {
      return this.http.get<Expense[]>("/expenses");
   }
   
}
