import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InformacijeListComponent} from './informacije/informacije-list/informacije-list.component';
import  { LoginComponent } from './user/login/login.component';
import { RasporedListComponent } from './raspored/raspored-list/raspored-list.component';
import {CreateRasporedComponent} from './raspored/create-raspored/create-raspored.component';
import { RasporedDetailsComponent } from './raspored/raspored-details/raspored-details.component';
import { AuthGuard } from './guards/auth.guard';
import { InformacijeDetailsComponent } from './informacije/informacije-details/informacije-details.component';
const appRoutes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'gost', component: InformacijeListComponent },
  { path: 'rasporeds/list', component: RasporedListComponent, canActivate: [AuthGuard]   },
  { path: 'rasporeds/create', component: CreateRasporedComponent,  canActivate: [AuthGuard]  },
  { path: 'raspored/:code', component: RasporedDetailsComponent,   canActivate: [AuthGuard] },
  { path: 'informacija/:naslov', component: InformacijeDetailsComponent, },
  ];
  @NgModule({
  imports: [
  RouterModule.forRoot(appRoutes),
  ],
  exports: [
  RouterModule
  ],
  })
  export class AppRoutesModule { }