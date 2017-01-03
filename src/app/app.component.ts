import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public APP_NAME: string = 'Sweet Dream Box';

  public getTitle(title: string){
    return title + ' - ' + this.APP_NAME;
  }

}
