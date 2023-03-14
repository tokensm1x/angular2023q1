import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, materialModules],
  exports: [materialModules],
})
export class SharedModule {}
