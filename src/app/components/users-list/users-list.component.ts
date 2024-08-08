import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  IUserData,
  IUserDataResponse,
} from '../../interfaces/IUserData.interface';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [MatPaginatorModule, FormsModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  users!: IUserData[];
  filteredUsers: IUserData[] = [];
  filterByTitle: string = '';
  filterByLocation: string = '';
  isNoUser: boolean = false;
  usersLength: number = 0;
  pageSize: number = 0;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData(): void {
    this._dataService.fetchData().subscribe({
      next: (response: IUserDataResponse) => {
        if (!response) return;
        console.log('object', response);

        this.users = response?.data;
        this.filteredUsers = this.users;
        this.usersLength = response?.total;
        this.pageSize = response?.per_page;
      },
    });
  }

  filterUsers() {}
}
