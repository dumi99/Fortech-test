import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../types/api';

@Injectable({
  providedIn: 'root'
})
export class RestcountriesService {

  private api = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {  }

  getAllCountries() {
    return this.http.get<Country[]>(`${this.api}/all/?fields=name,capital,region,population,flags`);
  }
}
