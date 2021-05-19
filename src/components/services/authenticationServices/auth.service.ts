import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  checkAuthenticated(): boolean {
    return true;
  }

  async login(username: string, password: string): Promise<void> {}

  async logout(redirect: string): Promise<void> {}
}
