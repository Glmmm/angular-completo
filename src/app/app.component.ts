import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TesteService } from './services/teste.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly elRef: ElementRef, private readonly testeService: TesteService) {}
  criarElementoDiv() {
    this.testeService.create(this.elRef);
  }
}
