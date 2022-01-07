import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Eventlist } from '../interfaces/eventlist';
import { EventlistService } from '../services/eventlist.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event: Eventlist = {
    eventName: '',
    organizer: '',
    artists: []
  }
  event$: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private eventlistService: EventlistService) { }

  ngOnInit(): void {
    const eventName = this.route.snapshot.paramMap.get('eventName');
    if(eventName != null){
      this.event$ = this.eventlistService.getEventlistsByEventName(eventName).subscribe(result => {
        this.event = result;
      });
    }
  }
}
