import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/interfaces/budget.model'
import { BudgetService } from 'src/app/services/budget.service'
import { Observable } from 'rxjs';
@Component({
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  public budget: Budget = {
    "week": { "total": null, "perDay": null, "leftPerDay": null, "saved": null },
    "month": { "total": null, "perDay": null, "leftPerDay": null, "saved": null },
  };


  constructor(private budgetService: BudgetService) {
    this._getBudget();
  }

  ngOnInit() {

  }

  onExpenseSubmitted(message: String): void {
    this._getBudget();

  }

  private _getBudget() {
    this.budgetService.getBudgets().subscribe(budget => this.budget = budget)
  }
}