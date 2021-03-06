import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//Angular Materials
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';

// NG search, sort, pagination modules
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

// Components
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { BodyComponent } from './dashboard/body/body.component';
import { TeamComponent } from './team/team.component';
import { TeamEditComponent } from './dashboard/team-edit/team-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent,
    EventsComponent,
    ContactComponent,
    AboutUsComponent,
    DashboardComponent,
    EventDetailComponent,
    BodyComponent,
    TeamComponent,
    TeamEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    TextFieldModule,
    FlexLayoutModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
