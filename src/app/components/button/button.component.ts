import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input({ required: true, alias: 'text' }) btnText: string = '';
  @Input({ required: true, alias: 'style' }) btnStyle: 'white' | 'purple' =
    'white';
  @Input({ alias: 'disabled' }) isDisabled: boolean = false;

  btnWhite: boolean = false;
  btnPurple: boolean = false;

  @Output('clicado') btnClickEmit = new EventEmitter<void>();

  ngOnInit(): void {
    this.alteraEstiloBotão();
  }

  public alteraEstiloBotão() {
    return this.btnStyle == 'white'
      ? (this.btnWhite = true)
      : (this.btnPurple = true);
  }
  public btnClicado() {
    return this.btnClickEmit.emit();
  }
}
