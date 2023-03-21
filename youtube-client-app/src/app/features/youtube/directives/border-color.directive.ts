import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import * as moment from 'moment';
import { MONTH, SIX_MONTH, WEEK } from '../consts/days';
import { Colors } from '../enums/colors.enum';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements OnInit {
  @Input('date') date: string = '';

  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.changeBorderColor();
  }

  changeBorderColor() {
    const diffDays = moment().diff(this.date, 'days');
    let color: string = Colors.BLUE;
    if (diffDays < 7) {
      color = Colors.BLUE;
    } else if (diffDays >= WEEK && diffDays < MONTH) {
      color = Colors.GREEN;
    } else if (diffDays >= MONTH && diffDays < SIX_MONTH) {
      color = Colors.YELLOW;
    } else {
      color = Colors.RED;
    }
    this.render.setStyle(
      this.elementRef.nativeElement,
      'borderBottomColor',
      color,
    );
    this.render.setStyle(
      this.elementRef.nativeElement,
      'borderBottomStyle',
      'solid',
    );
  }
}
