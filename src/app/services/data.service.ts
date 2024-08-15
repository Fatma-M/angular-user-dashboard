import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ISingleUserResponse,
  IUserDataResponse,
} from '../interfaces/IUserData.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  fetchData(pageNumber: number): Observable<IUserDataResponse> {
    return this._http.get<IUserDataResponse>(
      `https://reqres.in/api/users?page=${pageNumber}`
    );
  }

  getUserDetails(id: number | string): Observable<ISingleUserResponse> {
    return this._http.get<ISingleUserResponse>(
      `https://reqres.in/api/users/${id}`
    );
  }
}
