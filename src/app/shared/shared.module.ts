import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";
import { AppRoutingModule } from "../app-routing.module";
import { NotificationService } from "./notification.service";

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, FormsModule, MaterialModule, AppRoutingModule],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NavbarComponent,
    AppRoutingModule,
  ],
  providers: [NotificationService],
})
export class SharedModule {}
