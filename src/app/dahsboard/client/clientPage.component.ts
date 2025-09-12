import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

import { ClientsService } from './services/clients.service';
import type { IClient, IGetClientAll } from './interfaces';
import { TitleComponent } from '../../shared/ui/title/title.component';
import { CreateClientComponent } from './components/createClient/createClient.component';

@Component({
  selector: 'app-client-page',
  imports: [MatTableModule, MatButtonModule, TitleComponent, MatIconModule],
  templateUrl: './clientPage.component.html',
  styleUrl: './clientPage.component.css',
})
export default class ClientPageComponent {
  private readonly clientsService = inject(ClientsService);
  private readonly dialog = inject(MatDialog);

  // Columns table
  private page = signal<string>('1');
  public displayedColumns = signal<string[]>([
    'id',
    'name',
    'father_last_name',
    'mother_last_name',
    'email',
    'phone',
    'state',
  ]);

  // Peticiones
  public clients = rxResource<IGetClientAll, { page: string }>({
    params: () => ({ page: this.page() }),
    stream: ({ params }) => this.clientsService.getAllClients(params.page, '10'),
  });
  // Getters
  public get clientsData(): IClient[] {
    return this.clients.value()?.data ?? [];
  }

  // Dialogs
  openCreateClient(): void {
    const dialogRef = this.dialog.open(CreateClientComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) { // Solo recarga si la operación fue exitosa
        this.clients.reload();
      }
    });
  }
}
