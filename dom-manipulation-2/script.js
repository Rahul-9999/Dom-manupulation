// // keyup event
// let textBox = document.querySelector('#text-box');
// textBox.addEventListener('keyup',function(){
// // alert('hello');
// let textEntered = textBox.Value;
// let h3Tag = document.querySelector('#display-text');
// h3Tag.innerText = textEntered;
// });

// Keyup event
let textBox = document.querySelector('#text-box');
textBox.addEventListener('keyup',function () {
    let textEntered = textBox.value;
    let h3Tag = document.querySelector('#display-text');
    h3Tag.innerText = reverseString(textEntered);
    // even
    if(textEntered.length % 2 === 0){
        h3Tag.style.color = 'red';
    }
    else{
        h3Tag.style.color = 'blue';
    }
});

// change event on select box
let selectBox = document.querySelector('#select-box');
selectBox.addEventListener('change',function() {
   let selectedOption = selectBox.value;
    let h3Tag = document.querySelector('#selected-option');
    h3Tag.innerText = `${selectedOption} - ${reverseString(selectedOption)}`;
});

// sms app
let textArea = document.querySelector('#text-area');
textArea.addEventListener('keyup',function() {
   let textLength = textArea.value.length;
    document.querySelector('#text-count').innerText = textLength;
});

// change password
let checkBox = document.querySelector('#check-box');
checkBox.addEventListener('change',function() {
  let passwordBox = document.querySelector('#password-box');
  let attribute = passwordBox.getAttribute('type');
  if(attribute === 'password'){
      passwordBox.setAttribute('type','text');
  }
  else{
      passwordBox.setAttribute('type','password');
  }
});

// Range Select
let rangeInput = document.querySelector('#range');
rangeInput.addEventListener('input',function() {
    let selectedAmount = rangeInput.value;
    let theAmount = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(selectedAmount);
    document.querySelector('#amount').innerText = theAmount;
});

// innerHTML
let htmlString = `<span style="color: red">Good</span>
                  <span style="color: blueviolet">Morning</span> `;
document.querySelector('#h3-tag').innerHTML = htmlString;

// get employees data
let employeeList = getEmployees();
let tableRow = '';
for(let employee of employeeList){
    tableRow += `<tr>
                    <td>${employee.name}</td>
                    <td>${employee.age}</td>
                    <td>${employee.designation}</td>
                    <td>${employee.active}</td>
                 </tr>\n`;
    console.log(tableRow);
}
document.querySelector('#table-body').innerHTML  = tableRow;

// Table
