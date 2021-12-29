const inputDate = document.getElementById("input-date")
const inputDia = document.getElementById("input-dia")
const inputMes = document.getElementById("input-mes")
const inputAño = document.getElementById("input-año")
const inputHora = document.getElementById("input-hora")
const inputMinutos = document.getElementById("input-minutos")
const enviar = document.getElementById("boton-enviar")
const resultado = document.getElementById("resultado")


    enviar.onclick = (e) =>{
        e.preventDefault()
        const date = new Date(`${inputAño.value}-${inputMes.value}-${inputDia.value} ${inputHora.value}:${inputMinutos.value}:00:00`).toUTCString()
        console.log(date)

        const dia = date.slice(4,7)
        const mes = calcularMes(date.slice(8,11))
        const año = date.slice(12,16)
        const hora = date.slice(17,22)
        resultado.textContent = `Fecha en UTC: ${dia}/${mes}/${año} ${hora}hs`
    }

    const calcularMes = (mes) =>{
        if(mes === "Jan"){
            return 1
        }
        if(mes === "Feb"){
            return 2
        }
        if(mes === "Mar"){
            return 3
        }
        if(mes === "Apr"){
            return 4
        }
        if(mes === "May"){
            return 5
        }
        if(mes === "Jun"){
            return 6
        }
        if(mes === "Jul"){
            return 7
        }
        if(mes === "Aug"){
            return 8
        }
        if(mes === "Sep"){
            return 9
        }
        if(mes === "Oct"){
            return 10
        }
        if(mes === "Nov"){
            return 11
        }
        if(mes === "Dec"){
            return 12
        }
    }