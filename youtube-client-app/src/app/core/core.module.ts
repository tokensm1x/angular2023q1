import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { SearchService } from './services/search.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule, FormsModule],
  providers: [SearchService],
  exports: [ComponentsModule, FormsModule],
})
export class CoreModule {}
