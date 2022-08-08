
let lexical_environment = {

} // скрытый объект, который есть в каждом скрипте. Там прописано окружение и ссылки.

// lexical_environment === { empty }
let name; // { name : undefined }

name = 'Alex' // { name : 'Alex' }

name = 'Hanna' // { name : 'Hanna' }

// {} -> null . js будет искать переменную в своем окрежении, и если ничего не найдет будет переходить по ссылке

f1()

function f1() {           // function declaration, функциональное объявление. Может быть вызвано до объявления функции
    console.log('f1')
    console.log('a : ' + 'a') // log выведет только 'f1', потому что переменная а еще не определена
}

const f2 = () => {          // function expression, функциональное выражение. Нельзя вызвать до объявления функции

}


let a;

function f3 () {
    let name = 'Alex' // f1_LE = { name : 'Alex' } -> global LE

    console.log(name) // Alex

    console.log(a) // f1_LE = { name : 'Alex' } -> global LE      ->
    // в своем лекс. окружении переменная не найдена, выходим по ссылке на уровень выше.
    // Там, где была создана наша функция. Вернет undefined.

    console.log('b') // в своем лекс. окружении переменная не найдена, выходим по ссылке на уровень выше.
    // Там, где была создана наша функция. В глобальном окружении ее тоже нет, подниматься по ссылке некуда.
    // поэтому вернет ошибку, потому что ее нет
}
f3()

let name2 = 'Sanya'

function sayHi() {
    let name2 = 'Vova'
    return () => {
        let name2 = 'Vlad'
        name2 = 'Vlad2'
        console.log(name2)
    }
}
sayHi()()

