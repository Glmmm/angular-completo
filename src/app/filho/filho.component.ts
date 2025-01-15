import { Component } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent {
  message: string = 'Compenente Filho'
  
  chamarAlert() {
    alert("Me chamaram")
  }
}