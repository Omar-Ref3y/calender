const month=document.getElementById('month')
const dayName=document.getElementById('day-name')
const dayNum=document.getElementById('day-num')
const year=document.getElementById('year')

const date =new Date();
month.innerHTML=`${date.toLocaleString("en",{month:"long"})}`
dayName.innerHTML=`${date.toLocaleString("en",{weekday:"long"})}`
dayNum.innerHTML=`${date.getDate()}`
year.innerHTML=`${date.getFullYear()}`
