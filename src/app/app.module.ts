import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'


//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/top-nav/header.component';
import { SecondNavComponent } from './components/header/second-nav/second-nav.component';
import { SliderComponent } from './components/slider/slider.component';
import { IntroComponent } from './components/intro/intro.component';
import { FooterComponent } from './components/footer/top-footer/footer.component';
import { BottomFooterComponent } from './components/footer/bottom-footer/bottom-footer.component';
import { HomeComponent } from './components/home/home.component';
import { BestOffersComponent } from './components/best-offers/best-offers.component';



//Routes Configuration
const appRoutes: Routes = [

  { path: '', component: HomeComponent },

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecondNavComponent,
    SliderComponent,
    IntroComponent,
    FooterComponent,
    BottomFooterComponent,
    HomeComponent,
    BestOffersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
