import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../models/user';
const API_URL = 'http://localhost:3333/api';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('auth'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: { username: string; password: string }) {
    return this.http
      .post<any>(`${API_URL}/auth/login`, {
        user
      })
      .pipe(
        map(access_token => {
          if (access_token) {
            localStorage.setItem('auth', JSON.stringify(access_token));
            this.currentUserSubject.next(access_token);
          }
          return user;
        })
      );
  }
  logout() {
    localStorage.removeItem('auth');
    this.currentUserSubject.next(null);
  }
}
