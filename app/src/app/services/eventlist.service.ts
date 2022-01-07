import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { Eventlist } from '../interfaces/eventlist';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventlistService {

  constructor(private httpClient: HttpClient) { }

  getEventlists(): Observable<Eventlist[]>{
    return timer(1, 3000).pipe(switchMap(() => this.httpClient.get<Eventlist[]>("https://eventlist-edge-service-server-woutersthijs.cloud.okteto.net/eventlists")));
  }

  getEventlistsByEventName(eventName: string): Observable<Eventlist>{
    return timer(1, 3000).pipe(switchMap(() => this.httpClient.get<Eventlist>("https://eventlist-edge-service-server-woutersthijs.cloud.okteto.net/eventlists/event/" + eventName)));
  }
}
