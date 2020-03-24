import { Component, OnInit } from "@angular/core";
import { ExpenseService } from "src/app/services/expense.service";
import { categories } from "src/app/data/category_data";

@Component({
  selector: "app-itemized",
  templateUrl: "./itemized.component.html",
  styleUrls: ["./itemized.component.css"]
})
export class ItemizedComponent implements OnInit {
  expenses: any;
  icons: Object;
  nextPage: String;
  previousPage: String;
  modal: boolean = false;
  currentExpense: any;

  constructor(private expenseService: ExpenseService) {
    this.icons = categories;
  }

  ngOnInit() {
    this._getExpenses();
  }

  private _getExpenses(url: string = null) {
    this.expenseService
      .getExpenses(url)
      .subscribe(expenses => (this.expenses = expenses));
  }

  public emitDeleteModal(expense: number) {
    this.currentExpense = expense;
    this.modal = true;
  }

  public emitDelete() {
    this.modal = false;
    this.expenseService
      .deleteExpense(this.currentExpense.id)
      .subscribe(() => this._getExpenses());
  }

  public emitCancel() {
    this.modal = false;
  }
}
