import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services';

@Injectable({ providedIn: 'root' })
export class PaginationResolver {

  constructor(private apiService: ApiService) {}

  resolve() {
    return this.apiService.fetchPaginationInfo();
  }

}
