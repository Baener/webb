var temperature = 20;
var itsRaining = false;
var minutes;
var idealTemperature = 20;

if(itsRaining || temperature <= 0 || temperature >= 35) {
  minutes = 0;
  }
else if(temperature ==  idealTemperature) {
  minutes = 20;
  }
else if(temperature < 20 && temperature > 0) {
  minutes = temperature;
  }
else if(temperature > 20 && temperature < 35) {
  minutes = temperature - ((temperature - idealTemperature)*2);
  }