import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Budget } from 'src/app/interfaces/budget.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor(private http: HttpClient) {}

  getBudgets(): Observable<Budget> {
    const url = `${environment.API_URL}/budget`;
    return this.http.get<Budget>(url);
  }

  getSaved(): Observable<number> {
    const url = `${environment.API_URL}/saved`;
    return this.http.get<number>(url);
  }
}
