import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';
import { HomeComponent } from './home.component';
import { HomeResolverService } from './home-resolver.service';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      fetchData: HomeResolverService
    },
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(homeRoutes) ],
  exports: [ RouterModule ],
  providers: [ HomeResolverService ]
})
export class HomeRoutingModule {
}
