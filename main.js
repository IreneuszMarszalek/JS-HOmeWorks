class Person {
    constructor (name, age, hobby){
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }
}

let input_z2 = document.querySelector("#input_z2");
let btn_z2 = document.querySelector("#button_z2");

let checkbox_z3 = document.querySelector("#zad_3_cb");

let checkbox_z4 = document.querySelector("#zad_4_cb");
let btn_z4 = document.querySelector("#button_z4");


function sprawdz_z2(number_of_the_day){
    switch(number_of_the_day){
        case "1":
            alert("Monday");
            break;
        case "2":
            alert("Tuesday");
            break;
        case "3":
            alert("Wednesday");
            break;
        case "4":
            alert("Thursday");
            break;
        case "5":
            alert("Friday");
            break;
        case "6":
            alert("Saturday");
            break;
        case "7":
            alert("Sunday");
            break;
        default:
            alert("Błędny numer dnia tygodnia - ale fail!");
    }
}

function sprawdz_cb_zad3(checkbox_value){
    if(checkbox_value === true){
        alert("Pole zaznaczone");
    }else{
        alert("Pole odznaczone !");
    }
}

person = new Person(null, null, null);

function sayHello(person){

    if(checkbox_z4.checked == true){
        person.name = "Irek";
        person.age = 18;
        person.hobby = "Szydełkowanie";
    }else{
        person.name = null;
        person.age = 18;
        person.hobby = "Szydełkowanie";
    }

    if(person.name == null){
        alert("Hello !");
    }else{
        alert("Hello ! " + person.name);
    }
}

btn_z2.addEventListener("click", function(){sprawdz_z2(input_z2.value);} ,false);
checkbox_z3.addEventListener("click", function(){sprawdz_cb_zad3(checkbox_z3.checked);} ,false);
btn_z4.addEventListener("click", function(){sayHello(person);} ,false);