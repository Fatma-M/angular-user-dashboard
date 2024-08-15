import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MainPath } from './enums/MainPath.enum';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `${MainPath.HOME}`,
  },
  {
    path: `${MainPath.HOME}`,
    component: UsersListComponent,
  },
  {
    path: `${MainPath.USERS_DETAILS}/:id`,
    component: UserDetailsComponent,
  },
];
