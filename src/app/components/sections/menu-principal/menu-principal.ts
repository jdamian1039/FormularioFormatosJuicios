import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  imports: [],
  templateUrl: './menu-principal.html',
  styleUrl: './menu-principal.css',
})
export class MenuPrincipal {
  constructor(private router: Router){
    
  }
  goRoute(ruta: string){
    this.router.navigate([ruta]);
  }
}
