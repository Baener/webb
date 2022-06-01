var time = 15;

var goToDairy = false;
var goToStore = false;
var goToMarket = false;

if (time >= 8 && time < 19 && time != 13) {
  goToDairy = true;
} else if (time >=9 && time < 17 && time != 14) {
    goToStore = true;     
  } else if (time >= 7 && time < 20) {
      goToMarket = true;
    }