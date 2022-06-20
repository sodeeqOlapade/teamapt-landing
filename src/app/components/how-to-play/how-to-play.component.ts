import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HowToPlayComponent{
  public readonly message: string = "Think well before you guess. You have only 2 attempts per day and even after you wi, you can come back the next day to try for another jackpot!";
  constructor() { }
}
