import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventService, Event } from '../service/event/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  public id: number = 0;
  public selectedEvent!: Event;
  public editedEvent: Event[] = [];

  constructor(
    public eventsService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.eventsService.getEvent(this.id).subscribe((event: Event) => {
      this.selectedEvent = event;
      console.log(this.selectedEvent);
      return this.selectedEvent;
    });
    console.log(this.selectedEvent);
  }

  public onSubmit(form: NgForm) {
    this.eventsService
      .getEvent(this.selectedEvent.id)
      .subscribe((event: Event) => {
        event = form.value;
        console.log(event);
        this.selectedEvent = event;
        console.log(this.selectedEvent);
        this.eventsService.editEvent(this.selectedEvent).subscribe();
      });
  }
}
