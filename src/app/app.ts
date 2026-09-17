import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { TimeoutService } from './core/services/timeout.service';
import { AuthService } from './core/services/auth.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FormularioFormatosJuicios');

  constructor(private router: Router, private timeOutService: TimeoutService, public authService: AuthService){
    
  }

  ngOnInit(){
    this.timeOutService.startMonitoring()
    this.authService.cargarPerfil().subscribe({
      next: (user) => console.log('Usuario detectado:', user),
      error: (err) => console.error('Usuario no autenticado en Azure', err)
    });
  }

  goRoute(){
    this.router.navigate(['/']);
  }
}
