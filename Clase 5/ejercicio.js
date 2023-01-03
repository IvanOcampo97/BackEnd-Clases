const moment = requires("moment");

const hoy= moment();
const fechaDeNacimiento= moment("1997/07/02", "YYYY/MM/DD");

const diffYears = hoy.diff(fechaDeNacimiento, 'years')
const diffDays = hoy.diff(fechaDeNacimiento, 'days')

console.log(`Hoy es ${hoy.format('DD/MM/YYYY')}`)
console.log(`Nací el ${fechaNacimiento.format("DD/MM/YYYY")}`)
console.log(`Desde mi nacimiento han pasado ${diffYears} años.`)
console.log(`Desde mi nacimiento han pasado ${diffDays} días.`)
