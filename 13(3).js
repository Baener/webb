var calculateSalary = function (blackSalary) {
var percent = 0.35
if (blackSalary >= 100000) {
percent = 0.45;
}
var tax = percent * blackSalary;
var whiteSalary = blackSalary - tax;
return whiteSalary;
};