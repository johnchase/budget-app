import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ItemizedComponent } from './components/itemized/itemized.component';
import { ExpenseComponent } from './components/overview/expense/expense.component';
import { ChartComponent } from './components/overview/chart/chart.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BudgetComponent } from './components/overview/budget/budget.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewComponent,
    ItemizedComponent,
    BudgetComponent,
    ChartComponent,
    ExpenseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
