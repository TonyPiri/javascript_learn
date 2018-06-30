/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects
*/

/*
Объекты - коллекция свойств и методов.
Свойство - переменная, закрепленная за объектом.
-Доступ к свойствам через точечную запись.
*/

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

//можно скобочной записью
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;

/*
Свойство - ключ(имя) - значение.
Ключ - String.
*/

//Можно использовать переменную для доступа к свойству.
var propertyName = "make";
myCar[propertyName] = "Opel";

function showProps(obj, objName) {
    var result = "";
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName + "." + i + " = " + obj[i] + "\n";
        }
    }
    return
}
showProps(myCar, "myCar")