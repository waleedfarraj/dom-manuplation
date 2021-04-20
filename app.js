'use strict';




function sayHi(){
    const div = document.getElementById('hey')
    let newElem = document.createElement('P')
    newElem.innerHTML = 'hey'
    div.append(newElem)
}
function changeAttr(){
    let theSection = document.getElementsByTagName('section')[0]
    theSection.setAttribute('class','red')
    console.log(theSection);
    
}
function deleteTable(){
    let table = document.getElementById('myTable')
console.log(table);
table.innerHTML = ""
}

function createTable()
{
    deleteTable()
    
   
let rowNumber = prompt("Input number of rows", 1);
let columnNumber = prompt("Input number of columns",1);
  
 for(let r=0;r<parseInt(rowNumber,10);r++)
  {
   let table=document.getElementById('myTable').insertRow(r);
   for(let c=0;c<parseInt(columnNumber,10);c++)  
    {
     let cell=  table.insertCell(c);
     cell.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}