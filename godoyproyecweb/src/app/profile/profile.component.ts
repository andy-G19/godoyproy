import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  template: `
    <div *ngIf="profile">
      <h1>{{ profile.name }}</h1>
      <p>{{ profile.career }}</p>
      <button (click)="edit()">Editar Perfil</button>
    </div>
  `,
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.authService.getUser().subscribe((user) => {
      if (user) {
        this.profileService.getProfile(user.uid).subscribe((profile) => {
          this.profile = profile;
        });
      }
    });
  }

  edit() {
    // Lógica para abrir formulario de edición
  }
}