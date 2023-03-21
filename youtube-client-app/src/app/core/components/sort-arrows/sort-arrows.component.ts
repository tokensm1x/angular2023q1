import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sort-arrows',
  templateUrl: './sort-arrows.component.html',
  styleUrls: ['./sort-arrows.component.scss'],
})
export class SortArrowsComponent {
  @Input('direction') dir: string = '';

  public hideArrows: boolean = true;
}
