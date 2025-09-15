import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClientsService } from '../../services/clients.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-client',
  imports: [
    MatDialogContent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './createClient.component.html',
  styleUrl: './createClient.component.css',
})
export class CreateClientComponent {
  private diaglogRef = inject(MatDialogRef<CreateClientComponent>);
  private readonly clientService = inject(ClientsService);
  private readonly fb = inject(FormBuilder);
  private readonly toastr = inject(ToastrService);

  onNoCLick(): void {
    this.diaglogRef.close();
  }

  public createClientForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    company_name: ['', [Validators.required]],
  });

  private validationMessages: Record<string, string> = {
    name: 'El nombre es obligatorio',
    last_name: 'El apellido paterno es obligatorio',
    email: 'El correo no es válido',
    phone: 'El teléfono es obligatorio',
    company_name: 'El nombre de la compañía es obligatorio',
  };

  private get controls() {
    return this.createClientForm.controls;
  }

  public submitCreateClient(): void {
    if (this.createClientForm.invalid) {
      Object.keys(this.controls).forEach((key) => {
        if (this.controls[key].invalid) {
          this.toastr.error(this.validationMessages[key]);
        }
      });
      return;
    }

    this.clientService.createClient(this.createClientForm.value).subscribe({
      next: (res) => {
        this.toastr.success('Cliente creado con exito');
        this.diaglogRef.close(true); // Pasa true para indicar éxito
      },
      error: () => {
        this.toastr.error('Error al crear el cliente');
        this.diaglogRef.close(false); // Pasa false para indicar error
      },
    });
  }
}
