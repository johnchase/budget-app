import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { ExpenseService } from '../../../services/expense.service';
import { categories, budgetCategories } from 'src/app/data/category_data';
import { Expense } from '../../../interfaces/expense.model';

function amountValidator(
  c: AbstractControl
): { [key: string]: boolean } | null {
  if (c.value !== null && (isNaN(c.value) || c.value <= 0)) {
    return { range: true };
  }
  return null;
}

@Component({
  selector: 'app-expense-modal',
  templateUrl: './expense-modal.component.html',
  styleUrls: ['./expense-modal.component.css'],
})
export class ExpenseModalComponent implements OnInit {
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  expenseForm: FormGroup;
  public categoryTypes: Array<string>;
  public budgetCategories = budgetCategories;
  public categories: Array<string>;

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService,
    private _cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.categoryTypes = Object.keys(this.budgetCategories);
    this.categories = this.budgetCategories['Purchase'];
    this.expenseForm = this.fb.group({
      date: new Date(),
      amount: [null, amountValidator],
      category: 'Restaurants',
      budget_category: 'Purchase',
      business: ['', []],
      description: ['', []],
      expense_calculation: ['true', []],
      budget_calculation: ['', []],
    });
    this.expenseForm.get('budget_category').valueChanges.subscribe(value => {
      this.categories = this.budgetCategories[value];
      this.expenseForm.patchValue({ category: this.categories[0] });
    });
    this._cdRef.detectChanges();
  }

  public emitCloseModal(): void {
    this.closeModal.emit(null);
  }

  save() {
    let e = new Expense();
    e = { ...this.expenseForm.value };
    this.expenseService.postExpense(e).subscribe(data => {
      this.emitCloseModal();
    });
  }
}
