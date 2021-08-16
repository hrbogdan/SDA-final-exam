import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService, Event } from '../service/event/event.service';
import { Member, TeamService } from '../service/team/team.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    public eventsService: EventService,
    public teamService: TeamService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe((allEvents: Event[]) => {
      this.eventsService.events = allEvents;
    });

    this.teamService.getMember().subscribe((allTeam: Member[]) => {
      this.teamService.member = allTeam;
    });
  }

  public deleteEvent(event: Event) {
    this.eventsService
      .deleteEvent(event)
      .subscribe(
        () =>
          (this.eventsService.events = this.eventsService.events.filter(
            (e: Event) => e.id !== event.id
          ))
      );
  }

  public deleteMember(member: Member) {
    this.teamService
      .deleteMember(member)
      .subscribe(
        () =>
          (this.teamService.member = this.teamService.member.filter(
            (f: Member) => f.id !== member.id
          ))
      );
  }
}
