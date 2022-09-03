var inputData = document.getElementsByTagName('input')[0];
var myUl = document.getElementsByTagName('ul');
var mySingleLi;

function addItem() {
    var myLi = document.createElement('li');
    var myButton1 = document.createElement('button');
    var myButton2 = document.createElement('button');
    myLi.setAttribute('class', 'd-flex justify-content-center align-items-center')
    myUl[0].appendChild(myLi);
    myLi.innerHTML = inputData.value;
    myLi.appendChild(myButton1);
    myLi.appendChild(myButton2);
    var myiFrame1 = document.createElement('i');
    var myiFrame2 = document.createElement('i');
    myiFrame1.setAttribute('class', 'fas fa-trash-alt')
    myiFrame2.setAttribute('class', 'fas fa-edit')
    myButton1.appendChild(myiFrame1);
    myButton2.appendChild(myiFrame2);
    myButton1.setAttribute('class', 'mx-1')
    myButton1.setAttribute('onclick', 'deleteSingle(this)')
    myButton2.setAttribute('onclick', 'editSingle(this)')
    myButton2.setAttribute('class', 'mx-1')
    inputData.value = "";
}

function deleteItemsAll() {
    myUl[0].innerHTML = ""
}

function deleteSingle(e) {
    e.parentNode.remove();
}

function editSingle(e) {
    var changeText = prompt("Put the Edited Value");
    e.parentNode.firstChild.textContent = changeText;
}