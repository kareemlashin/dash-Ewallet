import { CarouselModule } from "ngx-owl-carousel-o";
import { CommonModule } from "@angular/common";
import { CurrentBalanceComponent } from "./admin-components/current-balance/current-balance.component";
import { LogoutPopupComponent } from "./components/popups/logout-popup/logout-popup.component";
import { NgModule } from "@angular/core";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { NoDataFoundComponent } from "./components/no-data-found/no-data-found.component";
import { NoSearchResultComponent } from "./components/no-search-result/no-search-result.component";
import { PayPopUpComponent } from "./components/popups/pay-pop-up/pay-pop-up.component";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    LogoutPopupComponent,
    NoDataFoundComponent,
    NoSearchResultComponent,
    CurrentBalanceComponent,
    PayPopUpComponent,
  ],
  imports: [CommonModule, RouterModule, TranslateModule, CarouselModule],
  exports: [CurrentBalanceComponent, CarouselModule],
})
export class SharedModule {}
