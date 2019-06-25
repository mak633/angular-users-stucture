import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MATERIAL_MODULES } from './devkit.di';

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES,
  ],
  exports: [MATERIAL_MODULES]
})
export class DevkitModule {}
