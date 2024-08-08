import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MainPath } from './enums/MainPath.enum';

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
];
