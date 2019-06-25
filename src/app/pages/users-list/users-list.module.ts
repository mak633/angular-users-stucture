import { NgModule } from '@angular/core';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './users-list.page';
import { SharedModule } from '~app/shared';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    UsersListRoutingModule,
    SharedModule
  ]
})
export class UsersListModule { }
