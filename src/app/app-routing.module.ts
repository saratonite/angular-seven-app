import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DemosComponent } from './pages/demos/demos.component';
import { InterpolationComponent } from './demos/interpolation/interpolation.component';
import { DatabindingComponent } from './demos/databinding/databinding.component';
import { DirectivesComponent } from './demos/directives/directives.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'demos/inerpolation', component: InterpolationComponent },
  { path: 'demos/databinding', component: DatabindingComponent },
  { path: 'demos/directives', component: DirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
