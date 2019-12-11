import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Budget } from 'src/app/interfaces/budget.model'
@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private baseUrl = 'http://localhost:8000/budget/';

  constructor(private http: HttpClient) { }

  getBudgets(): Observable<Budget> {
    const url = this.baseUrl;
    return this.http.get<Budget>(url);

  }
}