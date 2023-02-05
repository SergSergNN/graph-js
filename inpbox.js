var ib_act
var inputVisible=false

var ib_overlay = document.createElement('div')
document.body.appendChild(ib_overlay)
ib_overlay.style.position='fixed'
ib_overlay.style.top='0'
ib_overlay.style.left='0'
ib_overlay.style.width='100%'
ib_overlay.style.height='100%'
ib_overlay.style.backgroundColor='#00000099'
ib_overlay.style.zIndex='10'
ib_overlay.style.display='none'

var ib_box = document.createElement('div')
document.body.appendChild(ib_box)
ib_box.style.backgroundColor='#cccccc'
//ib_box.style.position='fixed'
ib_box.style.top='30%'
ib_box.style.left='30%'
ib_box.style.padding='5px'
ib_box.style.position='fixed'
ib_box.style.zIndex='20'
ib_box.style.display='none'

var ib_title = document.createElement('div')
ib_box.appendChild(ib_title)

var ib_input = document.createElement('input')
ib_input.style.fontSize="larger"
ib_box.appendChild(ib_input)

var ib_button = document.createElement('button')
ib_box.appendChild(ib_button)
ib_button.fontSize="larger"
ib_button.innerText='ok'
ib_button.addEventListener('click',function () {
    console.log('ib_button click')
    ib_overlay.style.display='none'
    ib_box.style.display='none'
    ib_act(ib_input.value)
    inputVisible=false
})

var ib_bottom = document.createElement('div')
ib_box.appendChild(ib_bottom)

function showInpBox(txt,title,bottom){
    inputVisible=true
    ib_input.value=txt
    ib_title.innerHTML=title
    ib_bottom.innerHTML=bottom
//    ib_box.insertAdjacentHTML('afterbegin',title+'<br>')
//    ib_box.insertAdjacentHTML('beforeend','<br>'+bottom)
    ib_box.style.display='block'
    ib_overlay.style.display='block'
}
