import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api'; 
import { AppComponent } from './app.component';
import { RasporedItemComponent } from './raspored/raspored-item/raspored-item.component';
import { CreateRasporedComponent } from './raspored/create-raspored/create-raspored.component';
import { RasporedListComponent } from './raspored/raspored-list/raspored-list.component';
import { RasporedService } from 'src/app/services/raspored.service';
import { LoginComponent } from './user/login/login.component';

import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';
import { RasporedAppInterceptor } from './services/raspored-app.interceptor';
import { RasporedDetailsComponent } from './raspored/raspored-details/raspored-details.component';
import { AppRoutesModule } from './app-routes.module';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './user/register/register.component';
import { TrenerUcenikService } from 'src/app/services/trener-ucenik.service';
import { InformacijeListComponent } from './informacije/informacije-list/informacije-list.component';
import { InformacijeItemComponent } from './informacije/informacije-item/informacije-item.component';
import { InformacijeDetailsComponent } from './informacije/informacije-details/informacije-details.component';
import { CaroseulComponent } from './informacije/caroseul/caroseul.component';

@NgModule({
  declarations: [
    AppComponent,
    RasporedItemComponent,
    CreateRasporedComponent,
    RasporedListComponent,
    RasporedDetailsComponent,
    LoginComponent,
    RegisterComponent,
    InformacijeListComponent,
    InformacijeItemComponent,
    InformacijeDetailsComponent,
    CaroseulComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [
    RasporedService,
    UserService,
    UserStoreService,
    AuthGuard,
    TrenerUcenikService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RasporedAppInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }