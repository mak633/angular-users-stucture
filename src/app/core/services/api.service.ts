import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from '../types/interfaces';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public fetchUsers(page): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users?page=' + page).pipe(map(r => r.data));
  }

  public fetchPaginationInfo(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=1').pipe(map((response: any) => {
      return {
        total_pages: response.total_pages,
        per_page: response.per_page,
        total: response.total,
        page: response.page
      };
    }));
  }

  public fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`https://reqres.in/api/users/${id}`);
  }

}
