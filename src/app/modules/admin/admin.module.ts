import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexDashboardComponent } from './views/index-dashboard/index-dashboard.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { FinancialTransactionsComponent } from './views/financial-transactions/financial-transactions.component';
import { ProfileComponent } from './views/profile/profile.component';
import { WalletComponent } from './views/wallet/wallet.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    IndexDashboardComponent,
    SideMenuComponent,
    DashboardNavComponent,
    ProfileComponent,
    FinancialTransactionsComponent,
    WalletComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
    TranslateModule,
    NgbModule,
    SharedModule

  ]
})
export class AdminModule { }
