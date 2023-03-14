import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeModule } from './youtube/youtube.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, YoutubeModule, CoreModule],
  exports: [YoutubeModule],
})
export class FeaturesModule {}
