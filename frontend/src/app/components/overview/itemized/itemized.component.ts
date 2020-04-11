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

  constructor(private expenseService: ExpenseService) {
    this.icons = categories;
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
