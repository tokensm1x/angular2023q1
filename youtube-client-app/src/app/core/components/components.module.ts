import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SortArrowsComponent } from './sort-arrows/sort-arrows.component';

@NgModule({
  declarations: [HeaderComponent, SortArrowsComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
