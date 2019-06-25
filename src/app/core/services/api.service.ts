import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../types/interfaces';
import { MatTableDataSource } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public fetchUsers(page: number = 1): Observable<MatTableDataSource<UserInterface>> {
    return this.http.get<MatTableDataSource<UserInterface>>('https://reqres.in/api/users?page=' + page);
  }

  public fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`https://reqres.in/api/users/${id}`);
  }

}
