let screenEl=document.getElementById("screen-el")
let screenEl2=document.getElementById("screen-el2")

let a=0
function first()
{
    a+=1
    screenEl.textContent=a
}
function second()
{
    a+=2
    screenEl.textContent=a
}
function third()
{
    a+=3
    screenEl.textContent=a
}
function reset()
{
    a=0
    screenEl.textContent=a
}


let b=0
function first2()
{
    b+=1
    screenEl2.textContent=b
}
function second2()
{
    b+=2
    screenEl2.textContent=b
}
function third2()
{
    b+=3
    screenEl2.textContent=b
}
function reset2()
{
    b=0
    screenEl.textContent=b
}