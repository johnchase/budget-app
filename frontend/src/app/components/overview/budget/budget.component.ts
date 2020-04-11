import { Component, OnInit, Input } from '@angular/core';
import { Budget } from 'src/app/interfaces/budget.model';
import { BudgetSummary } from 'src/app/interfaces/summary.model';
import { BudgetService } from 'src/app/services/budget.service';
import { SummaryService } from 'src/app/services/summary.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {
  public budget: Budget;
  public budgetSummary: BudgetSummary;
  public perDiem: number;
  public saved: number;
  public today = new Date();
  public month: number;
  public year: number;

  constructor(
    private budgetService: BudgetService,
    private summaryService: SummaryService
  ) {}

  ngOnInit() {
    this.month = this.today.getMonth() + 1;
    this.year = this.today.getFullYear();
    this._getBudget();
  }

  private _getBudget() {
    this.budgetService.getBudgets().subscribe(budget => (this.budget = budget));
    this.budgetService.getSaved().subscribe(saved => (this.saved = saved));
    this.summaryService.getPerDiem(this.month, this.year).subscribe(perDiem => {
      this.perDiem = perDiem;
    });
    this.summaryService
      .getBudgetSummary()
      .subscribe(budgetSummary => (this.budgetSummary = budgetSummary));
  }
}
