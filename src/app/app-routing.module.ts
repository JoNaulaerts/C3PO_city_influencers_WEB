import { UserPersonalFormComponentComponent } from './user-personal/user-personal-form/user-personal-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CampagneListComponent } from './campaing/campagne-list/campagne-list.component';
import { UserListComponent } from './admin/user/user-list/user-list.component';
import { InfluencerListComponent } from './influencer/influencer-list/influencer-list.component';
import { InfluencerDetailComponent } from './influencer/influencer-detail/influencer-detail.component';

import { SecurityComponent } from './security/security/security.component';

import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './security/auth.guard';

import { UserPersonalComponent } from './user-personal/user-personal.component';


const routes: Routes = [
  { path: '', component: SecurityComponent },
  { path: 'home', component: HomeComponent },
  { path: 'campagnes', component: CampagneListComponent },

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard], canActivateChild: [AuthGuard]},

  { path: 'influencers', component: InfluencerListComponent },
  { path: 'influencers/:id', component: InfluencerDetailComponent },
  { path: 'login', component: SecurityComponent},
  { path: 'logout', component: SecurityComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'PersonalUser', component: UserPersonalComponent },
  { path: 'newpersonaluser', component: UserPersonalFormComponentComponent },
  { path: 'editpersonaluser/:id', component: UserPersonalFormComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
