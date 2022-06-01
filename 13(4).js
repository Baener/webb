var getPrice = function(time, urgent){
  var pay = 1500 ;
  if (urgent){
    pay = pay*2.5
  time = time / 2
  }
  if (time > 150){
    pay -= 250;
    }
  return getPrice = pay * time ;
  }
  
var getProfitableProject = function (timet, profit){
 var ch = getPrice(timet,true); 
 var che = getPrice(timet,false);
 if (ch > che) {
   return console.log('Выгодней срочный проект. Потратишь на него ' + ch)
   }
  else {return console.log('Выгодней обычный проект. Потратишь на него ' + che)
    }
  }