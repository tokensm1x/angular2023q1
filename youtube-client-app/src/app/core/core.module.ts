import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule],
  providers: [SearchService],
  exports: [ComponentsModule],
})
export class CoreModule {}
