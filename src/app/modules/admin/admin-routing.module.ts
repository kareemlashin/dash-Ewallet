import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialTransactionsComponent } from './views/financial-transactions/financial-transactions.component';
import { IndexDashboardComponent } from './views/index-dashboard/index-dashboard.component';
import { ProfileComponent } from './views/profile/profile.component';
import { WalletComponent } from './views/wallet/wallet.component';


const routes: Routes = [
  {
    path: "",
    component: IndexDashboardComponent,
    children: [
      {
        path: "",
        redirectTo: "profile",
        pathMatch: "full",
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "financial-transactions",
        component: FinancialTransactionsComponent
      },
      {
        path: "wallet",
        component: WalletComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
