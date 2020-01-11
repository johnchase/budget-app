import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Budget } from 'src/app/interfaces/budget.model'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  url = `${environment.API_URL}/budget`;

  constructor(private http: HttpClient) { }

  getBudgets(): Observable<Budget> {
    return this.http.get<Budget>(this.url);

  }
}
