import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/interfaces/expense.model';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {

  originalNewExpense: Expense = {
    date: null,
    amount: null,
    category: null
  };

  newExpense: Expense = { ...this.originalNewExpense };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }

  onBlur(field: NgModel) {

    console.log("in onBlur: ", field.valid);
  }

}
