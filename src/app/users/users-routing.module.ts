import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSingleComponent } from './user-single/user-single.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UsersListComponent
  },
  {
    path: ':username',
    component: UserSingleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
