import { Component } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 15,
    rtl: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 4,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
}
