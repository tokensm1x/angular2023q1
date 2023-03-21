import { Component, Input } from '@angular/core';
import { SearchItemModel } from 'src/app/core/models/search-item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('item') item: SearchItemModel = {} as SearchItemModel;
}
