let mydate = new Date()
console.log(typeof mydate)
console.log(mydate.getDate())
console.log(mydate.toString())
console.log(mydate.toISOString())
console.log(mydate.toLocaleString())

let createDate = new Date(2023,0,23)
console.log(createDate.toLocaleDateString())

const curentDate = Date.now();
console.log(curentDate)
console.log(Math.floor(Date.now()/1000))

curentDate.toLocaleString('default',{
    weekday:"long",
    
})