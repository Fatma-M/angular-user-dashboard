import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import {
  ISingleUserResponse,
  IUserData,
  IUsersResponseSupport,
} from '../../interfaces/IUserData.interface';

@Component({
  selector: 'app-users-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  id!: number;
  user!: IUserData;
  support!: IUsersResponseSupport;

  constructor(
    private router: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  /**
   * @description Get user details
   * @returns void
   */
  getUserDetails(): void {
    this.id = this.router.snapshot.params['id'];
    this.dataService
      .getUserDetails(this.id)
      .subscribe((response: ISingleUserResponse) => {
        this.user = response?.data;
        this.support = response?.support;
      });
  }
}
