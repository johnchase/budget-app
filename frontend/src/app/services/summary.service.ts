import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BudgetSummary } from '../interfaces/summary.model';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  private baseUrl = `${environment.API_URL}/summary/`;

  constructor(private http: HttpClient) {}

  getBudgetSummary(url: string = null): Observable<BudgetSummary> {
    if (!url) {
      url = this.baseUrl;
    }
    return this.http.get<BudgetSummary>(url);
  }

  getPerDiem(
    month: number,
    year: number,
    url: string = null
  ): Observable<number> {
    if (!url) {
      url = this.baseUrl;
    }
    const perDiemUrl = `${
      environment.API_URL
    }/perDiem/?month=${month}&year=${year}`;
    console.log(perDiemUrl)
    return this.http.get<number>(perDiemUrl);
  }
}
