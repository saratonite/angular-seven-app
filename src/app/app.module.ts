import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AboutComponent } from './pages/about/about.component';
import { InterpolationComponent } from './demos/interpolation/interpolation.component';
import { DemosComponent } from './pages/demos/demos.component';
import { ExampleComponent } from './example/example.component';
import { DatabindingComponent } from './demos/databinding/databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    NavigationComponent,
    AboutComponent,
    InterpolationComponent,
    DemosComponent,
    ExampleComponent,
    DatabindingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
