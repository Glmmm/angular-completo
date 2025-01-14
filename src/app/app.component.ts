import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private cdRef: ChangeDetectorRef) {}
  teste = 'Rogerin';
  
  public changeDetection() {
    this.cdRef.detectChanges();
  }
}
