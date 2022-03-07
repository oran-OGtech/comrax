import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'woo-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent {
  filled: number[] = [];
  stroked: number[] = [];

  @Input() set rating(value: number) {
    this.filled = [];
    this.stroked = [];
    for (let i = 0; i < value; i++) {
      this.filled.push(i);
    }
    for (let i = value; i < 5; i++) {
      this.stroked.push(i);
    }
  }
}
