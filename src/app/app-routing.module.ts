import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registration', component: RegisterComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employees/:id', component: HomeComponent},
  {path: 'lists', component: ListsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
