import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserverService } from '../services/breakpoint-observer.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public size$: Observable<string>;

  constructor(private _breakpointObserverService: BreakpointObserverService) {
    this.size$ = this._breakpointObserverService.size$;
  }
}
