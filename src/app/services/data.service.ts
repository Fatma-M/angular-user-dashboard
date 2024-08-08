import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserData } from '../interfaces/IUserData.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  fetchData(): Observable<IUserData[]> {
    return this._http.get<IUserData[]>(
      'https://reqres.in/api/users?page={page}'
    );
  }
}
