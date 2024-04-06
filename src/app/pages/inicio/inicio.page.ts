import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public router: Router) {
  }

  public nivel: number = 0;
  public jugador: string = "";
  public opciones: any[] = [
    {id:1, name:'Facil', color:'primary'},
    {id:2, name:'Normal', color:'warning'},
    {id:3, name:'Dificil', color:'danger'}
  ];

  ngOnInit() {
    return 0;
  }
  onSelectNivel(id:number){
    this.router.navigate(["/jugar", id]);
  }

}
