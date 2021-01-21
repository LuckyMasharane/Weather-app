import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL;
const API_KEY = environment.API_Key;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  picture= [{
    name: "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  
  }]

  getWeather(city){
    // http://api.openweathermap.org/data/2.5/weather?q={city name}&APPID={API key}
    return this.http.get(`${API_URL}/weather?q=${city}&APPID=${API_KEY}`)
  }
}
