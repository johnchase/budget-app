import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/interfaces/budget.model';
import { BudgetService } from 'src/app/services/budget.service';
@Component({
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  modal = false;
  public budget: Budget;

  constructor(private budgetService: BudgetService) {
    this._getBudget();
  }

  ngOnInit() {}

  onExpenseSubmitted(message: string): void {
    this._getBudget();
  }

  private _getBudget() {
    this.budgetService.getBudgets().subscribe(budget => (this.budget = budget));
  }
  public emitExpenseModal() {
    this.modal = !this.modal;
    console.log(this.modal);
  }
}
