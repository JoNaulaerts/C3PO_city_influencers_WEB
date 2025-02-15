import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../admin/user/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  getUser(): User | null {
    if (this.isLoggedIn()){
      return {
        userId : parseInt(localStorage.getItem('gebruikerId') ?? '0'),
        location : {},
        email: localStorage.getItem('email') ?? '',
        password: localStorage.getItem('password') ?? '',
        firstname: '',
        lastname: '',
        birthdate: '',
        username: localStorage.getItem('userName') ?? ''
        // token: this.getToken()  };
      }
    } else {
      return null;
    }
  }

  deleteToken(): void {
    localStorage.removeItem('password');
    localStorage.removeItem('userName');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('password');
  }

  authenticate(username: string, password: string): Observable<Object> {
    // const result = this.httpClient.post('c3poapi.azurewebsites.net/users/login/?user_name='+ username + '&password=' + password, username + password );
    const result = this.httpClient.get('http://c3poapi.azurewebsites.net/users/login/'+ username + '/' + password);
    return result;
  }

  // register(user: User): Observable<UserResponse> {
  //   return this.httpClient.post<UserResponse>('http://localhost:3000/register', user);
  // }
}
