import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalCellComponent } from './utils/cal-cell/cal-cell.component';
import { CalRowComponent } from './utils/cal-row/cal-row.component';
import { WatchComponent } from './utils/watch/watch.component';
import { CalenderComponent } from './components/calender/calender.component';
import { ClockComponent } from './utils/clock/clock.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CalCellComponent,
    CalRowComponent,
    WatchComponent,
    CalenderComponent,
    ClockComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
