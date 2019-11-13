import { Injectable } from '@angular/core';
import { Expense } from '../interfaces/expense.model';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {


  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Groceries', 'Health', 'Bars']);
  }
  postExpenseForm(expense: Expense): Observable<any> {
    return this.http.post('https://putsreq.com/w74IQR804sxdtPOYlkjC', expense);
  }
}
