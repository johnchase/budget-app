import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Expense } from 'src/app/interfaces/expense.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private baseUrl = `${environment.API_URL}/expenses/`;

  constructor(private http: HttpClient) {}

  getExpenses(url: string = null): Observable<any> {
    if (!url) {
      url = this.baseUrl;
    }
    return this.http.get<any>(url);
  }

  postExpense(expense: Expense): Observable<any> {
    return this.http.post(this.baseUrl, expense);
  }

  public deleteExpense(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}${id}`);
  }
}
