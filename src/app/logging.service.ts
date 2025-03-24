import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor() {}

  onStatusChange(status: string) {
    console.log(`A status change occurred, the new status is ${status}`);
  }
}
