import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ApiService } from '~app/core/services';
import { UserInterface } from '~app/core/types';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  public user$: Observable<UserInterface>;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    const userId: number = this.activatedRoute.snapshot.params['id'];
    this.user$ = this.apiService.fetchUserById(userId);
  }
}
