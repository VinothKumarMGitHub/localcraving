import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  
  public login(username: string, password: string) {
    if (username == 'admin@local.com' && password == 'admin') {
      localStorage.setItem('currentUser', 'loggedin');
      return true;
    }
    return false;
  }

  public logout() {
    localStorage.removeItem('currentUser');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
}
