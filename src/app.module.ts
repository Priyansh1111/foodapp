import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './app/components/pages/home/home.component';

// import { StarRatingModule } from 'angular-star-rating';

import { FoodPageComponent } from './app/components/pages/food-page/food-page.component';
import { SearchComponent } from './app/components/pages/search/search.component';
import { CartPageComponent } from './app/components/pages/cart-page/cart-page.component';
import { TagComponent } from './app/components/pages/tag/tag.component';
import { PageNotFoundComponent } from './app/components/pages/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FoodPageComponent,
    SearchComponent,
    CartPageComponent,
    TagComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
StarRatingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }