import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  public title: string = 'Usuários';
  public subTitle: string = 'Faça buscas, filtre resultados e gerencie de acordo com as opções';
  

  constructor(private titleService: Title) { 
    titleService.setTitle(this.title);
  }

  ngOnInit() {}  

}
