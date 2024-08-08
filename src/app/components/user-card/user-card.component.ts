import { Component, Input } from '@angular/core';
import { IUserData } from '../../interfaces/IUserData.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input({ required: true }) user!: IUserData;
}
