
function isWhiteSpaceOrEmpty(str) {
    return /^[\s\t\r\n]*$/.test(str);
}
// function isEmpty(text) {
//     return text.length == 0;
// }


// function checkString(word, notif){
//     if((isWhiteSpaceOrEmpty(word))){
//         alert(notif);
//         return false;
//     } else {
//         return true;
//     }
// }

function checkEmail(str) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (email.test(str))
    return true;
    else {
    alert("Podaj właściwy e-mail");
    return false;
    }
}

function checkStrAndFocus(obj, msg) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name;
    if (isWhiteSpaceOrEmpty(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    } else {
        document.getElementById(errorFieldName).innerHTML = null;
        return true;
    }
}

function checkEmailAndFocus(obj, msg) {
    let e_str = obj.value;
    let e_errorFieldName = "e_" + obj.name;
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (!email.test(e_str)){
        document.getElementById(e_errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    } else {
        return true;
    }
}

function checkStringAndFocus(obj, msg, func){
    if (func(obj, msg)){
        return true;
    } else {
        return false;
    };
}
  
function validate(form) {

    let name = form.elements["name"];
    let surname = form.elements["surname"];
    let code = form.elements["post_code"];
    let street = form.elements["street"];
    let city = form.elements["city"];
    let email = form.elements["e-mail"];

    if ((!checkStringAndFocus(name, "Podaj imię!", checkStrAndFocus)) || (!checkStringAndFocus(surname, "Podaj nazwisko!", checkStrAndFocus)) || (!checkStringAndFocus(street, "Podaj ulicę!", checkStrAndFocus)) 
    || (!checkStringAndFocus(city, "Podaj miasto!", checkStrAndFocus)) || (!checkStringAndFocus(code, "Podaj kod pocztowy!", checkStrAndFocus)) || (!checkEmailAndFocus(email, "Podaj właściwy email!", checkEmailAndFocus))) {
        return false;
    } else {
        return true;
    }
    
    // if((isEmpty(name_string)) || (isWhiteSpaceOrEmpty(name_string))){
    //     alert("Podaj imię!");
    //     return false;
    // } else {
    //     return true;
    // }
}

function showElement(e) {
    document.getElementById(e).style.visibility = 'visible';
}

function hideElement(e) {
    document.getElementById(e).style.visibility = 'hidden';
}

function alterRows(i, e) {
    if (e) {
        if (i % 2 == 1) {
            e.setAttribute("style", "background-color: Aqua;");
        }
        e = e.nextSibling;
        while (e && e.nodeType != 1) {
            e = e.nextSibling;
        }
        alterRows(++i, e);
    }
}

alterRows(1, document.getElementsByTagName("tr")[0]);

function nextNode(e) {
    while (e && e.nodeType != 1) {
        e = e.nextSibling;
    }
        return e;
}

function prevNode(e) {
    while (e && e.nodeType != 1) {
        e = e.previousSibling;
    }
    return e;
}
    
function swapRows(b) {
    let tab = prevNode(b.previousSibling);
    let tBody = nextNode(tab.firstChild);
    let lastNode = prevNode(tBody.lastChild);
    tBody.removeChild(lastNode);
    let firstNode = nextNode(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize)
    form.value = form.value.substring(0, maxSize);
    else
    msg.innerHTML = maxSize - form.value.length;
    }