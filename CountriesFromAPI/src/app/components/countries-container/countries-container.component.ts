import { Component, OnInit, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RestcountriesService  } from '../../services/restcountries.service';
import {Country} from '../../types/api';


@Component({
  selector: 'app-countries-container',
  templateUrl: './countries-container.component.html',
  styleUrls: ['./countries-container.component.scss']
})
export class CountriesContainerComponent implements OnInit {

  countries!: Observable<Country[]>;

  constructor(private api: RestcountriesService ) {  }

  ngOnInit(): void {
    this.countries = this.api.getAllCountries();
    
    this.countries.pipe(
      map(array => array.map(array => { console.log(array.name.common);})
      )
    )
    this.api.getAllCountries()
    .pipe(
      map(array => array.map(array => { console.log(array.name.sort());})
      )
    )
    .subscribe(
      (res) => console.log()
    );
  }

}
