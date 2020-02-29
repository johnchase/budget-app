import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder, AbstractControl } from "@angular/forms";
import { categories } from "src/app/data/category_data";

import { ExpenseService } from "src/app/services/expense.service";
import { Expense } from "src/app/interfaces/expense.model";

function amountValidator(
  c: AbstractControl
): { [key: string]: boolean } | null {
  if (c.value !== null && (isNaN(c.value) || c.value <= 0)) {
    return { range: true };
  }
  return null;
}

@Component({
  selector: "app-expense",
  templateUrl: "./expense.component.html",
  styleUrls: ["./expense.component.css"]
})
export class ExpenseComponent implements OnInit {
  expenseForm: FormGroup;
  public categoryTypes: Array<string>;
  @Output() expenseSubmitted: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService
  ) {}

  ngOnInit() {
    this.categoryTypes = Object.keys(categories);
    this.expenseForm = this.fb.group({
      date: new Date(),
      amount: [null, amountValidator],
      category: "Restaurants"
    });
  }

  save() {
    var e = new Expense();
    e = { ...this.expenseForm.value };
    this.expenseService.postExpense(e).subscribe({
      next: (expense: Expense) => this.expenseSubmitted.emit(),
      error: err => console.log("nope")
    });
  }
}
