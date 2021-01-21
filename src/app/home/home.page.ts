import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl  } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  forecast: any;
  validations_form: FormGroup;

  constructor( private formBuilder: FormBuilder,private weatherService: WeatherService) {
    this.validations_form = this.formBuilder.group({
      city: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
    
    this.loadWeather(this.validations_form.value.city);
  }

  ngOnInit(){
    
  }

  loadWeather(city){
    this.weatherService.getWeather(this.validations_form.value.city).subscribe( weather => {
      this.forecast = weather;
      console.log(this.forecast);
      
    })
  }

}
