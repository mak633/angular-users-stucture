import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevkitModule } from './devkit/devkit.module';

@NgModule({
  exports: [
    CommonModule,
    DevkitModule
  ]
})
export class SharedModule {}
