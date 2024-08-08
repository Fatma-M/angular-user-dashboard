import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  IUserData,
  IUserDataResponse,
} from '../../interfaces/IUserData.interface';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [MatPaginatorModule, FormsModule, UserCardComponent],
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
  pageIndex: number = 1;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.getUsersData();
  }

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

  onPageChange(event: any): void {
    this.pageIndex = event.pageIndex + 1;
    this.getUsersData();
  }

  filterUsers() {}
}
