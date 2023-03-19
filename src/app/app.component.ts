import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WeatherApp';
  cityName?: string;
  cityNameSelected:string = 'Verona';
  weatherData: any;
  cityTemp: any;
  cityTempMin: any;
  cityTempMax : any;
  cityHumidity : any;
  cityWindSpeed : any;

  ngOnInit(){
    this.getWeatherData();
  }

  onCitySubmit(){
    this.cityNameSelected = this.cityName!;
    this.cityName = '';
    this.getWeatherData();
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.cityNameSelected+'&appid=3e433545ac247449217bf65154d3b305')
    .then(response => response.json())
    .then(data => {this.setWeatherData(data)});
  }

  setWeatherData(data: any){
    this.cityTemp = (data.main.temp -273);
    this.cityTempMin = (data.main.temp_min -273);
    this.cityTempMax = (data.main.temp_max -273);
    this.cityHumidity = (data.main.humidity);
    this.cityWindSpeed = (data.wind.speed * 3.6);
  }
}
