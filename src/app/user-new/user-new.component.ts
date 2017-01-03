import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html'
})
export class UserNewComponent implements OnInit {

  public title: string = 'Novo Usuário';
  public subTitle: string = 'Essa ação pode criar um novo usuário que com acesso ao M.A.R.V.I.N.';
  

  constructor(private titleService: Title) { 
    titleService.setTitle(new AppComponent().getTitle(this.title));
  }

  ngOnInit() {
  }

}
