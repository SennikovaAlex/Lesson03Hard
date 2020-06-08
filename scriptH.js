let day = new Date().getDay();
console.log(day);
let lang = 'ru';
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let weekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// так как в будущем дни недели возможно надо выводить отдельно пусть лежат в массиве
let question = confirm ('Вы хотите перевести страницу на английский?');
if (question) {
lang = 'en';
}

if (lang === 'ru') {
    console.log(week[day-1])
} else { console.log(weekEn[day-1])
}

switch (lang){
    case 'ru':
        console.log(week[day-1]);
        break
    case 'en':
        console.log(weekEn[day-1]);
        break;
    default:
        console.log('Error');
}

let weekArr = [[week],[weekEn]];
console.log( weekArr[+question] );

// вторая часть задания

let namePerson = prompt('Введите имя');
let result = namePerson == 'Артем' ? 'Директор' : namePerson == 'Максим' ? 'Преподаватель' : 'Студент';
console.log(result);

