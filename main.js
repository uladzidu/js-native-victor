
const students = [
    {
        name : "Bob",
        age : 22,
        isMarried : true,
        scores : 120
    },
    {
        name : "Alex",
        age : 21,
        isMarried : true,
        scores : 85
    },
    {
        name : "Michel",
        age : 20,
        isMarried : false,
        scores : 89
    },
    {
        name : "John",
        age : 19,
        isMarried : false,
        scores : 100
    }
]

const big = document.querySelector('.big')
const medium = document.querySelector('.medium')
const small = document.querySelector('.small')
const link = document.querySelector('a')

function onClickHandler(e) {
    console.log(e.target.id)
    console.log('-----------------')
}

link.addEventListener('click', (e) => {e.preventDefault()} )

medium.addEventListener('click', onClickHandler)
big.addEventListener('click', onClickHandler)
small.addEventListener('click', onClickHandler)





