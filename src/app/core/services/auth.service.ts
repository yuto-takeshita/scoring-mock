import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public async login(userName: string, password: string): Promise<boolean> {
    // ログイン処理を記載する
    return true;
  }
}
