import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { DialogService } from 'src/app/core/services/dialog.service';

/**
 * ログイン画面
 */
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  title = 'ログイン';
  public loginInputItems: FormGroup;
  public userId: FormControl;
  public password: FormControl;
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.userId = this.formBuilder.control(null, [Validators.required]);
    this.password = this.formBuilder.control(null, [Validators.required]);
    this.loginInputItems = this.formBuilder.group({
      userId: this.userId,
      password: this.password,
    });
  }

  public async login() {
    const userId = this.userId.value;
    const password = this.password.value;
    const loginResult = await this.authService.login(userId, password);
    if (loginResult) {
      this.router.navigate(['/scoring/list']);
    } else {
      this.dialogService.error('ログイン失敗', 'パスワードが違います');
    }
  }
}
