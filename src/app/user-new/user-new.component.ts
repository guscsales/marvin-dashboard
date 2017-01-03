import { MarvinDashboardPage } from './../../../e2e/app.po';
import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html'
})
export class UserNewComponent implements OnInit {

  public title: string = 'Novo Usuário';
  public subTitle: string = 'Essa ação pode criar um novo usuário que com acesso ao M.A.R.V.I.N.';
  

  constructor(private titleService: Title) { 
    titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
