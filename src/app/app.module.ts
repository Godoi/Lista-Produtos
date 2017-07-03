import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { WindowRef } from './shared/WindowRef';
import { SessionStorageRef } from './shared/SessionStorageRef';

import { AuthModule } from './auth.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

/** App root imports */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** General app imports */
import { PageNotFoundComponent } from './page-not-found';

/** Feature Areas imports */
import { HomeModule } from './home/home.module';
//import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2PageScrollModule.forRoot(),
    //NavbarModule,
    FooterModule,
    HomeModule
  ],
  providers: [
    SessionStorageRef,
    WindowRef,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
