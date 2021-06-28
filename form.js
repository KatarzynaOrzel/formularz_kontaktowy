const submit = document.getElementById('submit');
submit.addEventListener('click', validateForm, false);


function validateForm() {
    let nomVal = document.getElementById('nom').value;
    let prenomVal = document.getElementById('prenom').value;
    let mailVal = document.getElementById('mail').value;
    let messVal = document.getElementById('mess').value;
    let telVal = document.getElementById('tel').value;

    if (!nomVal || !prenomVal || !mailVal || !messVal || nomVal.length < 1 || prenomVal.length < 1 || mailVal.length < 1 || messVal.length < 1 || !validateEmail(mailVal)) {
        // return false
  } else {
        console.log(nomVal);
        console.log(prenomVal);
        console.log(mailVal);
        console.log(telVal);
        console.log(messVal);
        popup();
        // return true;
    }
}

function validateEmail(mailVal) {
    reg = /^[a-zA-Z0-9ąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{1,30}@[a-zA-Z0-9ąćęłńóśżźĄĆĘŁŃÓŚŻŹ]+(\.[a-zA-Z0-9ąćęłńóśżźĄĆĘŁŃÓŚŻŹ]+)+$/;
    wyn1 = mailVal.match(reg);
    if (wyn1 == null) {
        return false;
    }
    return true;
}

// function validateTel(telVal) {
//     reg = '!/^([0-9]{9})$/';
//     wyn2 = telVal.match(reg);
//     if(wyn2 == null) {return false;}
//   return true;
//       }

function popup() {
    console.log("popup()")
    const window = document.getElementById('popup');
    const wrapper = document.getElementById('wrapper')
    console.log(window)
    if (window.style.display == "block") {
        window.style.display = "none";
        wrapper.style.opacity = 1;
    } else {
        window.style.display = "block";
        wrapper.style.opacity = 0.3;
    }
}
