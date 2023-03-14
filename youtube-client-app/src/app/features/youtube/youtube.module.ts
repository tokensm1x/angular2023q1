import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [MainComponent, CardComponent],
  imports: [CommonModule],
  exports: [MainComponent],
})
export class YoutubeModule {}
