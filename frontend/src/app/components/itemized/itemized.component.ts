import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service'

@Component({
  selector: 'app-itemized',
  templateUrl: './itemized.component.html',
  styleUrls: ['./itemized.component.css']
})
export class ItemizedComponent implements OnInit {
  expenses: any;
  icons: any;
  nextPage: String;
  previousPage: String;
  modal: boolean = false;
  currentExpense: any;

  constructor(private expenseService: ExpenseService) {
    this.icons = {
      'Restaurants': 'fa-utensils', "Health": "fa-medkit", "Entertainment": "fa-ticket-alt",
      "Gas": "fa-gas-pump", "Groceries": "fa-shopping-cart", "Items": "fa-store"
    }
  }

  ngOnInit() {
    this._getExpenses()
  }

  private _getExpenses(url: string = null) {
    this.expenseService.getExpenses(url).subscribe(expenses => this.expenses = expenses)
  }

  public emitDeleteModal(expense: number) {
    this.currentExpense = expense;
    this.modal = true;
  }

  public emitDelete() {
    this.modal = false;
    this.expenseService.deleteExpense(this.currentExpense.id).subscribe(() => this._getExpenses())

  }

  public emitCancel() {
    this.modal = false
  }

}