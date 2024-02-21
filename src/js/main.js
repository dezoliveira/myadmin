const user = {
    name: 'John Dee',
    role: 'Admin'
}

let invoices = [
    {
        id: 1,
        nome: 'John Dee',
        idNota: 999999,
        dataEmissao: '01/01/2024',
        dataCobrança: '01/03/2024',
        dataPagamento: '25/02/2024',
        docNota: '386.822.670-20',
        docBoleto: '',
        status: 'Emitida',
    },
    {
        id: 2,
        nome: 'Bruce Wayne',
        idNota: 100001,
        dataEmissao: '02/06/2023',
        dataCobrança: '12/08/2024',
        dataPagamento: '',
        docNota: '404.223.800-91',
        docBoleto: '',
        status: 'Em Atraso',
    },
    {
        id: 3,
        nome: 'Luke Skywalker',
        idNota: 912399,
        dataEmissao: '01/03/2024',
        dataCobrança: '01/03/2024',
        dataPagamento: '03/02/2024',
        docNota: '838.815.220-34',
        docBoleto: '',
        status: 'Paga',
    },
    {
        id: 4,
        nome: 'Peter Parker',
        idNota: 199991,
        dataEmissao: '01/12/2023',
        dataCobrança: '02/06/2024',
        dataPagamento: '01/02/2024',
        docNota: '128.455.560-71',
        docBoleto: '',
        status: 'Paga',
    },
    {
        id: 5,
        nome: 'Parris Hilton',
        idNota: 109990,
        dataEmissao: '01/01/2024',
        dataCobrança: '01/03/2024',
        dataPagamento: '25/02/2024',
        docNota: '429.509.680-66',
        docBoleto: '',
        status: 'Emitida',
    },
]

//Chart
const ctx = document.getElementById('myChart');
let chart = new Chart (ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets:[{
            label: "Gráfico de Notas Emitidas no Período",
            data: [0, 10, 5, 15, 8, 1, 0, 0, 1, 95, 5, 0]
        }]
    },
    options: {
        legend: {
            display: true,
            position: 'bottom'
        },

        title: {
            display: true,
            text: 'Gráfico de Notas Emitidas no Período'
        }
    }
})

const invoiceStatus = ['Paga', 'Emitida', 'Em Atraso']

//variables
const userName = document.getElementById('user-name')
const userRole = document.getElementById('user-role')
const navTitle = document.getElementById('nav-title')
const navs = document.querySelectorAll('.nav-link')
const invoiceList = document.querySelector('#invoice-list tbody')
const selectInvoice = document.getElementById('select-invoice')

//date
const datePeriod = document.getElementById('date-period')
const startDate = document.getElementById('start-date')
const endDate = document.getElementById('end-date')

let currentDate = new Date()
let nextMonth = new Date(currentDate.setMonth(currentDate.getMonth() + 1))

startDate.value = currentDate.toLocaleDateString()
endDate.value = nextMonth.toLocaleDateString()

const inputStartDate = document.getElementById('start-date')
const inputEndDate = document.getElementById('end-date')

inputStartDate.addEventListener('click', (e) => {
    e.preventDefault()
    startDate.setAttribute("type", 'date')
    inputStartDate.showPicker()
})

inputEndDate.addEventListener('click', (e) => {
    e.preventDefault()
    endDate.setAttribute("type", 'date')
    inputEndDate.showPicker()
})

const btnSearch = document.getElementById('btn-search')

//onload
window.onload = () => {
    //user-info
    userName.textContent = user.name
    userRole.textContent = user.role

    //select invoice status
    for (let s in invoiceStatus)
    selectInvoice.innerHTML += `
        <option value="${invoiceStatus[s]}">
            ${invoiceStatus[s]}
        </option>
    `

    loadInvoices()

    //chart
    // loadChart()
}

//Functions
const loadInvoices = (newData) => {
    data = invoices
    
    if (newData !== undefined) {
        data = newData
    }

    //invoice list
    invoiceList.innerHTML = ``

    for (let i in data) {
        let id = data[i].id
        let nome = data[i].nome
        let idNota = data[i].idNota
        let dataEmissao = data[i].dataEmissao
        let dataCobrança = data[i].dataCobrança
        let dataPagamento = data[i].dataPagamento
        let docNota = data[i].docNota
        let docBoleto = data[i].docBoleto
        let status = data[i].status

        invoiceList.innerHTML += `
            <tr id="${id}">
                <td>${nome}</td>
                <td>${idNota}</td>
                <td>${dataEmissao}</td>
                <td>${dataCobrança}</td>
                <td>${dataPagamento}</td>
                <td>${docNota}</td>
                <td>${docBoleto}</td>
                <td>${status}</td>
            </tr>
        `
    }
}

const filterInvoices = (status) => {
    let filteredInvoices = invoices.filter((invoice => {

        if (status === 'Todas'){
            return invoices
        }

        return invoice.status === status
    }))

    loadInvoices(filteredInvoices)
}

//Events

//Nav Events
navs.forEach((nav) => {
    nav.addEventListener('click', () => {
        let id = nav.id
        let activeNav = id.split('-')[0]
        navTitle.textContent = captalize(activeNav)

        switch (activeNav) {
            case 'logout':
                location.href = '../../index.html'      
        }
    })
})

//Search
btnSearch.addEventListener('click', (e) => {
    e.preventDefault()
    let startDateVal = startDate.value
    let endDateVal = endDate.value

    if (!startDateVal.length) {
        alert('Digite a data inicial')
        return
    }

    if (!endDateVal.length) {
        alert('Digite a data final')
        return
    }

    let arr1 = startDateVal.split('-')
    let arr2 = endDateVal.split('-')

    let newStartDate = arr1[2] + '/' + arr1[1] + '/' + arr1[0]
    let newEndDate = arr2[2] + '/' + arr2[1] + '/' + arr2[0]

    datePeriod.textContent = `Notas Fiscais emitiadas no período de: ${newStartDate} á ${newEndDate}`

    let filteredByData = invoices.filter((invoice) => {
        return (
            new Date(invoice.dataEmissao) >= new Date(startDateVal) && 
            new Date(invoice.dataEmissao) <= new Date(endDateVal)
        )
    })

    loadInvoices(filteredByData)
    chart.data.labels = ['cu']
    chart.update()
})

//Status Change
selectInvoice.addEventListener('change', (e) => {
    let status = e.target.value
    filterInvoices(status)
})

//Captaliza titulo da página
const captalize = (value) => {
    newValue = value[0].toUpperCase() + value.slice(1)
    return newValue
}