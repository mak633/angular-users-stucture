import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { PageEvent, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UserInterface } from '~app/core/types';
import { ApiService } from '~app/core/services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['first_name', 'last_name', 'email'];
  public usersData$: Observable<MatTableDataSource<UserInterface>>;

  private destroy$: Subject<void> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router) {}

  public ngOnInit(): void {
    this.route.queryParams.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params) => {
      this.usersData$ = this.apiService.fetchUsers(params.page);
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public pageChanged(event: PageEvent): void {
    const page: number = event.pageIndex + 1;
    this.router.navigate(['./'], { queryParams: { page } });
  }
}
