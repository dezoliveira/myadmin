const user = {
    name: 'John Dee',
    role: 'Admin'
}

const notas = [
    {
        id: 1,
        nome: 'John Dee',
        idNota: 999999,
        dataEmissão: '01/01/2024',
        dataCobrança: '01/03/2024',
        dataPagamento: '25/02/2024',
        docNota: '',
        docBoleto: '',
        status: 'Emitida',
    },
    {
        id: 2,
        nome: 'Bruce Wayne',
        idNota: 100001,
        dataEmissão: '02/06/2024',
        dataCobrança: '12/08/2024',
        dataPagamento: '',
        docNota: '',
        docBoleto: '',
        status: 'Em Atraso',
    },
    {
        id: 3,
        nome: 'Luke Skywalker',
        idNota: 912399,
        dataEmissão: '01/01/2024',
        dataCobrança: '01/03/2024',
        dataPagamento: '03/02/2024',
        docNota: '',
        docBoleto: '',
        status: 'Paga',
    },
    {
        id: 4,
        nome: 'Peter Parker',
        idNota: 199991,
        dataEmissão: '01/01/2024',
        dataCobrança: '02/06/2024',
        dataPagamento: '01/02/2024',
        docNota: '',
        docBoleto: '',
        status: 'Paga',
    },
    {
        id: 5,
        nome: 'Parris Hilton',
        idNota: 109990,
        dataEmissão: '01/01/2024',
        dataCobrança: '01/03/2024',
        dataPagamento: '25/02/2024',
        docNota: '',
        docBoleto: '',
        status: 'Emitida',
    },
]

const userName = document.getElementById('user-name')
const userRole = document.getElementById('user-role')
const navTitle = document.getElementById('nav-title')
const navs = document.querySelectorAll('.nav-link')

//Captaliza titulo da página
const captalize = (value) => {
    newValue = value[0].toUpperCase() + value.slice(1)
    return newValue
}   

navs.forEach((nav) => {
    nav.addEventListener('click', () => {
        let id = nav.id
        let title = id.split('-')[0]
        navTitle.textContent = captalize(title)
    })
})

console.log(navs)

document.addEventListener('', () => {
    console.log(ac)
})

// let newNavTitle = activeNav.id.split('-')
// navTitle.textContent = newNavTitle[0]

// console.log(newNavTitle[0])
// console.log(navTitle)

userName.textContent = user.name
userRole.textContent = user.role

console.log(notas)