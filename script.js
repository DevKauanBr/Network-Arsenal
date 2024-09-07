let bitcoin = document.querySelector('#bitcoins')
let ip = document.querySelector('#ipadd')
let port = document.querySelector('#port')
let cmddos = document.querySelector('#cmddos')

let contadorint1 = 0


bitcoin.focus()

function bitcoinpay(){
    alert('Error: Payment may be being tracked, operations have been disrupted')
}

function ddosattack(){

    if(ip.value == ''){
        clearTimeout(intervalId)
        cmddos.style.color = 'red'
        cmddos.value = 'error: invalid ip or port'
        return 0
    }

    if (/[a-zA-Z]/.test(ip.value)){
        clearTimeout(intervalId)
        cmddos.style.color = 'red'
        cmddos.value = 'error: invalid ip or port'
        return 0
    }

    if (!listport.includes(port.value)){
        clearTimeout(intervalId)
        cmddos.style.color = 'red'
        cmddos.value = 'error: invalid port'
        return 0
    }


    cmddos.style.color = '#029702'
    cmddos.value = 'connect...'
    setTimeout(()=>{
        cmddos.value = cmddos.value + '\nchecking door...'
    },2000)


    setTimeout(()=>{
        cmddos.value = cmddos.value + `\nchecking ip ${ip.value} and port ${port.value}`

        setTimeout(()=>{
            cmddos.value = cmddos.value + `\nsuccessful connection!`
        }, 3000)

        setTimeout(()=>{
            cmddos.value = cmddos.value + `\nstarting denial of service code...`
            startInterval()
            cmddos.style.color = 'red'
        }, 3000)

    },3000)


    
}

let intervalId;

function startInterval() {
    intervalId = setInterval(() => {
        contadorint1++
        if(contadorint1 == 5001){
            clearInterval(intervalId)
            return
        }
        cmddos.value = cmddos.value + `\nbot ${contadorint1} injected into the network`
        cmddos.scrollTop = cmddos.scrollHeight;
        console.log(`\nbot ${contadorint1} injected into the network`)
    }, 100);
}
