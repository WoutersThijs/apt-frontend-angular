import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Eventlist } from '../interfaces/eventlist';
import { EventlistService } from '../services/eventlist.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnDestroy {

  events: Eventlist[] = [];
  events$: Subscription = new Subscription

  constructor(private eventlistService: EventlistService) { }

  ngOnInit(): void {
    this.getEventlists();
  }

  ngOnDestroy(): void {
    this.events$.unsubscribe();
  }

  getEventlists() {
    this.events$ = this.eventlistService.getEventlists().subscribe(result => this.events = result);
  }
}
