let isActive = false
let isActiveRuangKeluarga = false
let isActiveRuangTidur =  false
let isActiveRuangMakan = false

function saklar() {
    let toggle1 = document.getElementById("default-toggle1")
    let toggle2 = document.getElementById("default-toggle2")
    let toggle3 = document.getElementById("default-toggle3")
    let toggle4 = document.getElementById("default-toggle4")
    let toggle5 = document.getElementById("default-toggle5")
    let toggle6 = document.getElementById("default-toggle6")
    let toggle7 = document.getElementById("default-toggle7")
    let toggle8 = document.getElementById("default-toggle8")
    let toggle9 = document.getElementById("default-toggle9")
    let toggle10 = document.getElementById("default-toggle10")

    let lampu1 = document.getElementById("lampu1")
    let lampu2 = document.getElementById("lampu2")
    let lampu3 = document.getElementById("lampu3")
    let lampu4 = document.getElementById("lampu4")
    let lampu5 = document.getElementById("lampu5")
    let lampu6 = document.getElementById("lampu6")
    let lampu7 = document.getElementById("lampu7")
    let lampu8 = document.getElementById("lampu8")
    let lampu9 = document.getElementById("lampu9")
    let lampu10 = document.getElementById("lampu10")

    if (toggle1.checked) {
        lampu1.src = "assets/images/on.gif"
    } else {
        lampu1.src = "assets/images/off.gif"
    }

    if (toggle2.checked) {
        lampu2.src = "assets/images/on.gif"
    } else {
        lampu2.src = "assets/images/off.gif"
    }

    if (toggle3.checked) {
        lampu3.src = "assets/images/on.gif"
    } else {
        lampu3.src = "assets/images/off.gif"
    }

    if (toggle4.checked) {
        lampu4.src = "assets/images/on.gif"
    } else {
        lampu4.src = "assets/images/off.gif"
    }

    if (toggle5.checked) {
        lampu5.src = "assets/images/on.gif"
    } else {
        lampu5.src = "assets/images/off.gif"
    }

    if (toggle6.checked) {
        lampu6.src = "assets/images/on.gif"
    } else {
        lampu6.src = "assets/images/off.gif"
    }

    if (toggle7.checked) {
        lampu7.src = "assets/images/on.gif"
    } else {
        lampu7.src = "assets/images/off.gif"
    }

    if (toggle8.checked) {
        lampu8.src = "assets/images/on.gif"
    } else {
        lampu8.src = "assets/images/off.gif"
    }

    if (toggle9.checked) {
        lampu9.src = "assets/images/on.gif"
    } else {
        lampu9.src = "assets/images/off.gif"
    } 
    
    if (toggle10.checked) {
        lampu10.src = "assets/images/on.gif"
    } else {
        lampu10.src = "assets/images/off.gif"
    }
}


function handleBtn() {
    let toggle1 = document.getElementById("default-toggle1")
    let toggle2 = document.getElementById("default-toggle2")
    let toggle3 = document.getElementById("default-toggle3")
    let toggle4 = document.getElementById("default-toggle4")

    // jika salah satu toggle true, btn dianggap true
    // jika btn diklik berubah jadi false
    
    if(toggle1.checked|toggle2.checked|toggle3.checked|toggle4.checked) {
        isActive = false
    } else {
        isActive=!isActive;
    }
}

function ruangTamu() {
    console.log('BUTTON CLICKED!')
    handleBtn()
    let ruangTamu = document.getElementById("button-ruangtamu")
    let lampu1 = document.getElementById("lampu1")
    let lampu2 = document.getElementById("lampu2")
    let lampu3 = document.getElementById("lampu3")
    let lampu4 = document.getElementById("lampu4")
    let toggle1 = document.getElementById("default-toggle1")
    let toggle2 = document.getElementById("default-toggle2")
    let toggle3 = document.getElementById("default-toggle3")
    let toggle4 = document.getElementById("default-toggle4")

    console.log('ruangTamu', ruangTamu.checked)

    if(isActive) {
        lampu1.src = "assets/images/on.gif"
        lampu2.src = "assets/images/on.gif"
        lampu3.src = "assets/images/on.gif"
        lampu4.src = "assets/images/on.gif"

        toggle1.checked = true
        toggle2.checked = true
        toggle3.checked = true
        toggle4.checked = true
    } else {
        lampu1.src = "assets/images/off.gif"
        lampu2.src = "assets/images/off.gif"
        lampu3.src = "assets/images/off.gif"
        lampu4.src = "assets/images/off.gif"

        toggle1.checked = false
        toggle2.checked = false
        toggle3.checked = false
        toggle4.checked = false
    } 
}


function handleBtnKeluarga() {
    let toggle5 = document.getElementById("default-toggle5")
    let toggle6 = document.getElementById("default-toggle6")
    let toggle7 = document.getElementById("default-toggle7")

    console.log('IS ACTIVE HANDLE BTN KLG',isActiveRuangKeluarga)
    if(toggle5.checked|toggle6.checked|toggle7.checked){
        isActiveRuangKeluarga = false
    } else {
        isActiveRuangKeluarga=!isActiveRuangKeluarga
    }

}

function ruangKeluarga() {
    console.log('BUTTON CLICK')
    handleBtnKeluarga()
    let ruangKeluarga = document.getElementById("button-ruangkeluarga")
    let lampu5 = document.getElementById("lampu5")
    let lampu6 = document.getElementById("lampu6")
    let lampu7 = document.getElementById("lampu7")
    let toggle5 = document.getElementById("default-toggle5")
    let toggle6 = document.getElementById("default-toggle6")
    let toggle7 = document.getElementById("default-toggle7")

    // console.log('ruangKeluarga', ruangKeluarga.checked)
    console.log('ruangKeluarga IS ACTIVE2', isActiveRuangKeluarga)
    console.log('toggle5', toggle5.checked)
    console.log('toggle6', toggle6.checked)
    console.log('toggle7', toggle7.checked)

    if(isActiveRuangKeluarga) {
        lampu5.src = "assets/images/on.gif"
        lampu6.src = "assets/images/on.gif"
        lampu7.src = "assets/images/on.gif"

        toggle5.checked = true
        toggle6.checked = true
        toggle7.checked = true
    } else {
        lampu5.src = "assets/images/off.gif"
        lampu6.src = "assets/images/off.gif"
        lampu7.src = "assets/images/off.gif"

        toggle5.checked = false
        toggle6.checked = false
        toggle7.checked = false
    }
}


function handleBtnTidur () {
    let toggle8 = document.getElementById("default-toggle8") 
    let toggle9 = document.getElementById("default-toggle9")

    if(toggle8.checked|toggle9.checked){
        isActiveRuangTidur = false
    } else {
        isActiveRuangTidur=!isActiveRuangTidur
    }
}

function ruangTidur() {
    console.log('BUTTON DI CLICK')
    handleBtnTidur()
    let ruangTidur = document.getElementById("button-ruangtidur")
    let lampu8 = document.getElementById("lampu8")
    let lampu9 = document.getElementById("lampu9")
    let toggle8 = document.getElementById("default-toggle8")
    let toggle9 = document.getElementById("default-toggle9")

    console.log('ruangTidur', ruangTidur.checked)

    if(isActiveRuangTidur) {
        lampu8.src = "assets/images/on.gif"
        lampu9.src = "assets/images/on.gif"

        toggle8.checked = true
        toggle9.checked = true
    } else {
        lampu8.src = " assets/images/off.gif"
        lampu9.src = " assets/images/off.gif"

        toggle8.checked = false
        toggle9.checked = false
    }
}

function handleBtnMakan () {
    let toggle10 = document.getElementById("default-toggle10")
    if(toggle10.checked) {
        isActiveRuangMakan = false
    } else {
        isActiveRuangMakan=!isActiveRuangMakan
    }
}

function ruangMakan() {
    console.log('BUTTON-NYA DI-CLICK')
    handleBtnMakan()
    let ruangMakan = document.getElementById("button-ruangmakan")
    let lampu10 = document.getElementById("lampu10")
    let toggle10 = document.getElementById("default-toggle10")

    console.log('ruangMakan', ruangMakan.checked)

    if(isActiveRuangMakan) {
        lampu10.src = "assets/images/on.gif"
        toggle10.checked = true
    } else {
        lampu10.src = "assets/images/off.gif"
        toggle10.checked = false
    }
}