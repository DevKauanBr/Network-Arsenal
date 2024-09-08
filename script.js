let bitcoin = document.querySelector('#bitcoins')
let ip = document.querySelector('#ipadd')
let port = document.querySelector('#port')
let cmddos = document.querySelector('#cmddos')

let contadorint1 = 0

const listport = [
    "21",   // FTP (File Transfer Protocol)
    "22",   // SSH (Secure Shell)
    "23",   // Telnet
    "25",   // SMTP (Simple Mail Transfer Protocol)
    "53",   // DNS (Domain Name System)
    "80",   // HTTP (Hypertext Transfer Protocol)
    "110",  // POP3 (Post Office Protocol)
    "123",  // NTP (Network Time Protocol)
    "143",  // IMAP (Internet Message Access Protocol)
    "161",  // SNMP (Simple Network Management Protocol)
    "194",  // IRC (Internet Relay Chat)
    "443",  // HTTPS (HTTP Secure)
    "445",  // Microsoft-DS (Directory Services)
    "587",  // SMTP (with SSL)
    "993",  // IMAP (with SSL)
    "995",  // POP3 (with SSL)
    "3306", // MySQL Database
    "3389", // RDP (Remote Desktop Protocol)
    "5060", // SIP (Session Initiation Protocol)
    "8080", // HTTP Alternative
    "8443", // HTTPS Alternative
    "1900", // SSDP (Simple Service Discovery Protocol)
    "6667"  // IRC (Alternative Ports)
];

let option1 = document.querySelector('#option1')

var two = document.querySelector('#two');
var disablevpn = document.querySelector('#divpn');

let vpnstatus = false

let divpn = document.querySelector('#divpn')



bitcoin.focus()


function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function bitcoinpay(){
    alert('Error: Payment may be being tracked, operations have been disrupted')
}

function ddosattack(){

    if(ip.value == ''){
        clearTimeout(intervalId)
        cmddos.style.color = 'red'
        cmddos.value = 'error: invalid ip'
        return 0
    }

    if (/[a-zA-Z]/.test(ip.value)){
        clearTimeout(intervalId)
        cmddos.style.color = 'red'
        cmddos.value = 'error: invalid ip'
        return 0
    }

    if(port.value == ''){
        clearTimeout(intervalId)
        cmddos.style.color = 'red'
        cmddos.value = 'error: invalid port'
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

function vpn(){
    let nl = randint(0, 10)
    if(nl == 7){
        alert('Error: This network is not available, try again later or use another network.')
        return
    }

    alert('wait... searching for servers')

    setTimeout(()=>{
        disablevpn.style.display = 'inline'
        vpnstatus = true
        alert('VPN connection successfully established')
    }, randint(1000, 5000))
}


function vpnd(){
    if(vpnstatus == false){
        alert('No VPN connected.')
        return
    }

    vpnstatus = false
    divpn.style.display = 'none'

    setTimeout(()=>{
        alert('disconnected from private connection.')
    },2000)
}
