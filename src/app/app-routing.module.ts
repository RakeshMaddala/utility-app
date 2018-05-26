import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { UtilDashboardComponent } from './util-dashboard/util-dashboard.component'
import { ContactUsComponent } from './contact-us/contact-us.component'

const routes: Routes = [
  { path: 'home', component: UtilDashboardComponent },
  { path: 'contact', component: ContactUsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
