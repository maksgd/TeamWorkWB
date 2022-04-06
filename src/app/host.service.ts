import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HostService {

  hostName = window.location.hostname

}
