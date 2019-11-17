import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/interfaces/expense.model';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenseForm: FormGroup;
  categoryTypes: Array<string>;
  bsValue: Date;
  expense = new Expense();

  constructor() { }

  ngOnInit() {
    this.bsValue = new Date();
    this.categoryTypes = new Array('Restaurants', 'Health', 'Groceries', 'Items', 'Entertainment');
    this.expenseForm = new FormGroup({
      date: new FormControl(),
      amount: new FormControl(),
      category: new FormControl()
    })
  }
  save() {
    console.log(this.expenseForm);
  }
}





  // originalNewExpense: Expense = {
    // date: null,
    // amount: null,
    // category: null
  // };
// 
  // singleModel = "On"
// 
  // startDate: Date;
  // newExpense: Expense = { ...this.originalNewExpense };
  // postError = false;
  // postErrorMessage = '';
// 
  // constructor(private expenseService: ExpenseService) { }
// 
  // ngOnInit() {
    // this.categoryTypes = this.expenseService.getSubscriptionTypes();
    // this.startDate = new Date();
  // }
// 
  // onHttpError(errorResponse: any) {
    // console.log('error: ', errorResponse);
    // this.postError = true;
    // this.postErrorMessage = errorResponse.error.errorMessage;
  // }
// 
  // onSubmit(form: NgForm) {
    // console.log('in onSubmit: ', form.valid);
// 
    // if (form.valid) {
      // this.expenseService.postExpenseForm(this.newExpense).subscribe(
        // result => console.log('success: ', result),
        // error => this.onHttpError(error)
      // );
    // }
    // else {
      // this.postError = true;
      // this.postErrorMessage = "Please fix the errors"
    // }
  // }
// 
  // onBlur(field: NgModel) {
// 
    // console.log("in onBlur: ", field.valid);
  // }
// 
// }
// 