import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_service/authentication.service';
import { CartService } from '../_service/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private cartService: CartService
  ) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/feedlocal';

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {
    if (await this.authService.loggedIn) {
      await this.router.navigate([this.returnUrl]);
    }
  }

  async onSubmit(): Promise<void> {

   
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username')?.value;
        const password = this.form.get('password')?.value;
        await this.authService.login(username, password);

        this.cartService.clearAll();
        this.router.navigateByUrl( '/feedlocal' );

      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
