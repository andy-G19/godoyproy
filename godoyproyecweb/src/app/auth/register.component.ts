import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  template: `
    <form (ngSubmit)="register()">
      <input type="email" [(ngModel)]="email" name="email" placeholder="Correo Institucional" required />
      <input type="password" [(ngModel)]="password" name="password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
    </form>
  `,
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.email, this.password).then(() => {
      alert('Registro exitoso');
    });
  }
}