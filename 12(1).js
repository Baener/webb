var age = 3;
var ageGroup;

if (age <= 1) {
  ageGroup = 'щенки';
  console.log(ageGroup); 
}

if (age > 1 && age <= 3) {
  ageGroup = 'Молодые собаки';
  console.log(ageGroup); 
}

if (age > 3 && age <= 7) {
  ageGroup = 'Собаки средних лет';
  console.log(ageGroup); 
}

if (age > 7) {
  ageGroup = 'Почтенные таксоны';
  console.log(ageGroup); 
}