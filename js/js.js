/*
let matn = "Qiyosh sharqdan chiqib g'arbga botadi"

document.write(matn.slice(-14))*/

let son = 7
let matnson = '8'

/*
console.log(typeof son.toString())*/
/*
console.log(typeof parseInt(matnson) )*/

/*
let  list = []

list.push('adham')
list.push('16 yoshda')
list.push('islom')
list.push('20 yoshda')
list.push('shaxzoda')
list.push('18 yoshda')

console.log(list.length)
console.log(list)
console.log(list.pop())
console.log(list)
console.log(list.pop())
console.log(list)
*/

/*
let list = []
list.unshift("adham")
list.unshift("16 yoshda")
list.unshift("Islom")
list.unshift("20 yoshda")
list.unshift("shaxzoda")
list.unshift("18yoshda")

console.log(list.shift())
console.log(list)
console.log(list.shift())
console.log(list)
console.log(list.shift())
console.log(list)

console.log(list.length)
console.log(list)
*/
/*
let list = ['Islom','Umid','Jahongir','Jasur']

console.log(list.sort().reverse())*/

/*
let sonlar = [567,16,2575,964,11,2030,2,47]

let ttson = sonlar.sort(function (a,b) {
    return a-b
})

console.log(ttson)*/


/*
let sonlar = [567,16,2575,964,11,2030,2,47]

let ttson = sonlar.sort(function (a,b) {
    return a-b
})

console.log(sonlar.reverse())*/

let belgilar = "qwertyuiopasdfghjklz2xcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM"

function parolBer() {
    let i = 0
    let parol = ''
    while (i < 6) {
        let son = parseInt(Math.random() * belgilar.length)
        parol += belgilar[son]
    }
    console.log(parol)
}
document.querySelector('.tg').addEventListener('click',function () {
    let ekran = document.querySelector('.ekran')
    console.log(typeof parseInt(ekran.value))
    ekran.value = parseInt(ekran.value) + 1 ;
})

document.querySelector('.nolga').addEventListener('click',function () {
    document.querySelector('.ekran').value = 0
})