let Network = document.getElementById('Network');
let Amount = document.getElementById('Amount');
let random_number = Math.floor(Math.random() * 1000000000000000)
function submit() {
   
    if (Network.value === '') {
        alert('Please Choose a Network Provider')
    }else if (Amount.value === '') {
        alert('Please choose Airtime Amount')
    }else if (Network.value === '' && Amount.value === '') {
        alert('Pleae Choose Airtime Amount And Network Provider')
    }else{
        document.getElementById('generate').innerHTML ="Your recharge code is " + random_number
    }
    console.log(Network.value, Amount.value);
}

let inp = document.getElementById('inp')

function load() {
    if (Network.value === 'MTN' && inp.value.startsWith("*555*") && inp.value.includes(random_number) && inp.value.endsWith('#')) {
        alert('You have sucessfully recharged ' + Network.value + " " + Amount.value)
    }else if (Network.value === 'GLO' && inp.value.startsWith("*123*") && inp.value.includes(random_number) && inp.value.endsWith('#')) {
        alert('You have sucessfully recharged ' + Network.value + " " + Amount.value)
    }else if (Network.value === 'Airtel' && inp.value.startsWith("*444*") && inp.value.includes(random_number) && inp.value.endsWith('#')) {
        alert('You have sucessfully recharged ' + Network.value + " " + Amount.value)
    }else if (Network.value === '9Mobile' && inp.value.startsWith("*222*") && inp.value.includes(random_number) && inp.value.endsWith('#')) {
        alert('You have sucessfully recharged ' + Network.value + " " + Amount.value)
    }else{
        alert('Incorrect Pin. Please Try Again')
    }
}
