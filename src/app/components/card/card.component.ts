import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input({ required: true, alias: 'style' })
  cardStyle: 'orange' | 'purple' = 'orange';
  @Input({ required: true, alias: 'plan' })
  cardPlan: 'Simples' | 'Completo' = 'Simples';
  @Input({ required: true, alias: 'price' })
  cardPrice: number = 0;

  @Output() btnClicadoEmit = new EventEmitter<void>();

  cardStyleOrange: boolean = false;
  cardStylePurple: boolean = false;

  ngOnInit(): void {
    this.alteraCardStyle();
  }

  public alteraCardStyle() {
    return this.cardStyle == 'orange'
      ? (this.cardStyleOrange = true)
      : (this.cardStylePurple = true);
  }

  public alteraBtnStyle() {
    return this.cardStyle == 'orange' ? 'white' : 'purple';
  }

  public btnClicado() {
    return this.btnClicadoEmit.emit();
  }
}
