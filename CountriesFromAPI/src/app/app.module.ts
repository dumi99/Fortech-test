import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FilterCountriesComponent } from './components/filter-countries/filter-countries.component';
import { FooterComponent } from './components/footer/footer.component';
import { CountriesContainerComponent } from './components/countries-container/countries-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    CountryDetailsComponent,
    SearchbarComponent,
    FilterCountriesComponent,
    FooterComponent,
    CountriesContainerComponent,
    CardDetailComponent,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
