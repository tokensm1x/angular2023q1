import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterItemsPipe } from './pipes/filter-items.pipe';
import { BorderColorDirective } from './directives/border-color.directive';

@NgModule({
  declarations: [MainComponent, CardComponent, FilterItemsPipe, BorderColorDirective],
  imports: [CommonModule, SharedModule],
  exports: [MainComponent],
})
export class YoutubeModule {}
