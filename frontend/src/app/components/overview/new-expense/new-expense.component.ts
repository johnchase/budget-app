import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/interfaces/expense.model';
import { NgForm, NgModel } from '@angular/forms';
import { ExpenseService } from 'src/app/services/expense.service';
import { Observable } from 'rxjs';


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
  postError = false;
  postErrorMessage = '';
  categoryTypes: Observable<string[]>;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.categoryTypes = this.expenseService.getSubscriptionTypes();
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);

    if (form.valid) {
      this.expenseService.postExpenseForm(this.newExpense).subscribe(
        result => console.log('success: ', result),
        error => this.onHttpError(error)
      );
    }
    else {
      this.postError = true;
      this.postErrorMessage = "Please fix the errors"
    }
  }

  onBlur(field: NgModel) {

    console.log("in onBlur: ", field.valid);
  }

}
