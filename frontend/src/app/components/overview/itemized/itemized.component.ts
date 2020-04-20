import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { categories } from 'src/app/data/category_data';

@Component({
  selector: 'app-itemized',
  templateUrl: './itemized.component.html',
  styleUrls: ['./itemized.component.css'],
})
export class ItemizedComponent implements OnInit {
  @Output() expenseDeleted: EventEmitter<string> = new EventEmitter<string>();
  expenses: any;
  icons: object;
  nextPage: string;
  previousPage: string;
  modal = false;
  currentExpense: any;
  expandedExpenses: Array<any>;

  constructor(private expenseService: ExpenseService) {
    this.icons = categories;
    this.expandedExpenses = [];
  }

  ngOnInit() {
    this._getExpenses();

    console.log(this.icons);
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

  /**
   * Expand the expense window
   *
   * @returns {undefined}
   */
  public expandExpense(expenseId: number) {
    if (this.expandedExpenses.includes(expenseId)) {
      const index = this.expandedExpenses.indexOf(expenseId);
      if (index > -1) {
        this.expandedExpenses.splice(index, 1);
      }
    } else {
      this.expandedExpenses.push(expenseId);
    }
    console.log(this.expandedExpenses);
  }

  public emitDelete() {
    this.modal = false;
    this.expenseService.deleteExpense(this.currentExpense.id).subscribe(() => {
      this._getExpenses();
      this.expenseDeleted.emit();
    });
  }

  public emitCancel() {
    this.modal = false;
  }
}
