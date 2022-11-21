let scr=document.getElementById('scr')
let search=document.querySelector('.search')
let first=document.getElementById('first')
let second=document.getElementById('second')
let icn=document.querySelector('.icn')
let dropdown=document.querySelector('#dropdown')
let x=document.querySelector('#dropdown i')
let dil=document.querySelector('.dil')
scr.onclick=function axtr() {
    if (search.className==='active') {
        search.className='search'
        first.style.display='block'
        second.style.display='block'
        icn.style.display='none'
    }
    else{
        search.className='active'
        first.style.display='none'
        second.style.display='none'
        icn.style.display='block'
        icn.onclick=function close() {
            search.className='search'
            first.style.display='block'
            second.style.display='block'
            icn.style.display='none'
        }
    }
}
dropdown.onclick=function lang() {
    x.classList.toggle('bi-chevron-up')
    if (x.classList.contains('bi-chevron-up')) {
        dil.style.display='block'
    }
    else{
        dil.style.display='none'
    }
}
