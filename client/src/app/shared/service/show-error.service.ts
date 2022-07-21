import { Injectable } from '@angular/core';

declare var M: any;
@Injectable({
  providedIn: 'root',
})
export class ShowErrorService {
  toasts(message: string) {
    M.toast({ html: message });
  }
}
