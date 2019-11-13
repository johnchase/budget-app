import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { ItemizedComponent } from './components/itemized/itemized.component';


const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'itemized', component: ItemizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
