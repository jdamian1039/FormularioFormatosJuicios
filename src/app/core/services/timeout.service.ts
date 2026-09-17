import { Injectable, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { Subject, Subscription, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeoutService {
  private readonly TIMEOUT_MS = 15 * 60 * 1000; 
  private userActivitySubject = new Subject<void>();
  private timerSubscription?: Subscription;
  private isBrowser: boolean;

  constructor(
    private router: Router, 
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) platformId: Object // 👈 Inyectamos el ID de plataforma
  ) {
    this.isBrowser = isPlatformBrowser(platformId); // 👈 Evaluamos si es el navegador
    this.setupActivityListeners();
  }

  startMonitoring() {
    if (!this.isBrowser) return; // 👈 Si está en el servidor, no hace nada
    
    this.resetTimer();
    this.userActivitySubject.subscribe(() => this.resetTimer());
  }

  private setupActivityListeners() {
    if (!this.isBrowser) return; // 👈 Evita que rompa en SSR / Prerendering

    this.ngZone.runOutsideAngular(() => {
      const activityEvents = ['mousemove', 'click', 'keypress', 'scroll', 'touchstart'];
      
      activityEvents.forEach(event => {
        window.addEventListener(event, () => {
          this.ngZone.run(() => this.userActivitySubject.next());
        });
      });
    });
  }

  private resetTimer() {
    if (!this.isBrowser) return;

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    this.timerSubscription = timer(this.TIMEOUT_MS).subscribe(() => {
      this.logoutUser();
    });
  }

  private logoutUser() {
    if (!this.isBrowser) return;
    
    if (this.timerSubscription) this.timerSubscription.unsubscribe();
    
    console.warn("Sesión expirada por inactividad.");
    window.location.href = '/.auth/logout?post_logout_redirect_uri=/';
  }
}