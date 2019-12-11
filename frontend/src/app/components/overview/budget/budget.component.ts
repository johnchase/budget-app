import { Component, OnInit, Input } from '@angular/core';
import { Budget } from 'src/app/interfaces/budget.model'
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  @Input() public budget: Budget;

  constructor() {
  }

  ngOnInit() {
  }
}
