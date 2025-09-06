import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './loginPage.component.html',
  styleUrl: './loginPage.component.css',
})
export class LoginPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly toastr = inject(ToastrService);

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  public loginSubmit = () => {
    if (this.loginForm.invalid) {
      const controls = this.loginForm.controls;

      if (controls['email'].invalid) {
        this.toastr.error('El correo es obligatorio');
      }

      if (controls['password'].invalid) {
        this.toastr.error('La contraseña es obligatoria');
      }

      return;
    }

    return this.authService.login(this.loginForm.value).subscribe({
      next: console.log,
      error: (e) => console.log(e.error.message),
    });
  };
}
