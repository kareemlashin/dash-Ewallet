import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoutPopupComponent } from './components/popups/logout-popup/logout-popup.component';
import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { NoSearchResultComponent } from './components/no-search-result/no-search-result.component';
import { CurrentBalanceComponent } from './admin-components/current-balance/current-balance.component';
import { PayPopUpComponent } from './components/popups/pay-pop-up/pay-pop-up.component';

@NgModule({
  declarations: [
    LogoutPopupComponent,
    NoDataFoundComponent,
    NoSearchResultComponent,
    CurrentBalanceComponent,
    PayPopUpComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    CurrentBalanceComponent
  ]
})
export class SharedModule { }
