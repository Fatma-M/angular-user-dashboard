import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  IUserData,
  IUserDataResponse,
} from '../../interfaces/IUserData.interface';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from '../user-card/user-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [RouterLink, MatPaginatorModule, FormsModule, UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  users!: IUserData[];
  filteredUsers: IUserData[] = [];
  filterByName: string = '';
  filterByEmail: string = '';
  isNoUser: boolean = false;
  usersLength: number = 0;
  pageSize: number = 0;
  pageIndex: number = 1;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.getUsersData();
  }

  /**
   * @description Get users data from the API
   * @returns {void}
   */
  getUsersData(): void {
    this._dataService.fetchData(this.pageIndex).subscribe({
      next: (response: IUserDataResponse) => {
        if (!response) return;

        this.users = response?.data;
        this.filteredUsers = this.users;
        this.usersLength = response?.total;
        this.pageSize = response?.per_page;
      },
    });
  }

  /**
   * @description Handle page change event
   * @param event
   * @returns {void}
   */
  onPageChange(event: any): void {
    this.pageIndex = event.pageIndex + 1;
    this.getUsersData();
  }

  /**
   * @description Filter users by name and email
   * @returns {void}
   */
  filterUsers() {
    const filteredByTitleAndEmail = this.users.filter((user: IUserData) => {
      return (
        (user.first_name.toLowerCase().includes(this.filterByName) ||
          user.last_name.toLowerCase().includes(this.filterByName)) &&
        user.email.toLowerCase().includes(this.filterByEmail)
      );
    });
    this.filteredUsers = filteredByTitleAndEmail;
    if (this.filteredUsers.length < 1) {
      this.isNoUser = true;
    } else {
      this.isNoUser = false;
    }
  }
}
