import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(private _snackBar: MatSnackBar) {}

  success(message: string) {
    return this._snackBar.open(message, undefined, {
      panelClass: ["snackbar-success"],
      duration: 3000,
    });
  }

  error(message: string) {
    return this._snackBar.open(message, undefined, {
      panelClass: ["snackbar-error"],
      duration: 3000,
    });
  }

  info(message: string) {
    return this._snackBar.open(message, undefined, {
      panelClass: ["snackbar-info"],
      duration: 3000,
    });
  }
}
