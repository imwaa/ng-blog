import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, MaterialModule, NavbarComponent, AppRoutingModule],
})
export class SharedModule {}
