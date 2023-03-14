import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-arrows',
  templateUrl: './sort-arrows.component.html',
  styleUrls: ['./sort-arrows.component.scss'],
})
export class SortArrowsComponent implements OnInit {
  @Input('direction') dir: string = '';

  public hideArrows: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
