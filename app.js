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
    
   
let rn = window.prompt("Input number of rows", 1);
let cn = window.prompt("Input number of columns",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}