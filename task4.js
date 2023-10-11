// Args:
//     - n: число.
//     - forms: кортеж из трех форм слова в порядке:
//         1. Именительный падеж единственного числа.
//         2. Родительный падеж единственного числа.
//         3. Родительный падеж множественного числа.

//     Returns:
//     Слово в правильной форме.

// 1. узнать последнее число в num
// 2. исходя из последнего числа распределить по падежам:
//          1 - им; 2-4 - род1; 5-10 - род2
// 3. записать словарь чисел, после которых идёт родительный падеж, ед. число (2, 3, 4)
// 4. в результат вписать падеж, исходя из проверок, (3 проверки - лучше всего switch case) 
"use strict";
// при экспорте функции (упаковки в модуль) возникла необходимость установки npm 

export function setWord(num, { nominative, genitiveS, genitiveP }) {

    const endNum = Number(num.toString().slice(-1))     // определение последней цифры в числе (* 1 - преобразование обратно в число)
    const dictionaryGenitiveS = [2, 3, 4]           // декларация словаря, который хранит окончание чисел для родительного падежа, единственного числа
    const dictionaryGenitiveP = [5, 6, 7, 8, 9, 10] // декларация словаря, который хранит окончание чисел для родительного падежа, множественного числа
    switch (endNum) {
        case 1: return console.log(num + " " + nominative)      // если число заканчивается на 1, то выводим именительный падеж.
        case dictionaryGenitiveS.find(e => e === endNum): return console.log(num + " " + genitiveS)     // проход по словарю, если число заканчивается на число из словаря, то вывод родительного падежа, ед. число
        case dictionaryGenitiveP.find(e => e === endNum): return console.log(num + " " + genitiveP)     // если число не попадает под 2 правил выше - вывод родительного падежа, мн. числа.
        default: return console.log(`Неопределённое количество ${genitiveP}`)                           // при некорректных входных данных ошибки не возникает
    }

}
setWord(1, { nominative: "яблоко", genitiveS: "яблока", genitiveP: "яблок" })
setWord(3, { nominative: "сообщение", genitiveS: "сообщения", genitiveP: "сообщений" })
setWord(5, { nominative: "пилюля", genitiveS: "пилюли", genitiveP: "пилюль" })
setWord(-135, { nominative: "чапельник", genitiveS: "чапельника", genitiveP: "чапельников" })
setWord("73", { nominative: "панда", genitiveS: "панды", genitiveP: "панд" })
setWord("-51", { nominative: "окно", genitiveS: "окна", genitiveP: "окон" })
setWord(NaN, { nominative: "лещ", genitiveS: "леща", genitiveP: "лещей" })
setWord(true, { nominative: "литр", genitiveS: "литра", genitiveP: "литров" })
