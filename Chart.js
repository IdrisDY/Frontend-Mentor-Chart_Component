 function $(tag){
  return document.getElementsByClassName(tag)[0]
 }

 // selecting the sub-column div responsible for the vertical bars proper
const scol1 = $('scol1')
const scol2 = $('scol2')
const scol3 = $('scol3')
const scol4 = $('scol4')
const scol5 = $('scol5')
const scol6 = $('scol6')
const scol7 = $('scol7')
const subcol = $('sub-col')

console.log(scol1)


// selecting the individual columns div
const sc1 = document.getElementById('sc1')
const sc2 = document.getElementById('sc2')
const sc3 = document.getElementById('sc3')
const sc4 = document.getElementById('sc4')
const sc5 = document.getElementById('sc5')
const sc6 = document.getElementById('sc6')
const sc7 = document.getElementById('sc7')




/**
 * GetData is an async function that fetches data from the local json file and returns the result as a json
 * object
 */
 const GetData = async() =>{

   const result = await fetch('data.json')
   const ResJ = await result.json()


/* Adding up the amount of each object in the array. */
const TotalHeightP = ResJ[0].amount + ResJ[1].amount+ ResJ[2].amount+ResJ[3].amount+ResJ[4].amount+ResJ[5].amount+ResJ[6].amount
 
   /* calculating the height dynamically from the amount as a percentage 
   Scale of 1:3 was used 
   */
const colheightP1 = ((ResJ[0].amount/TotalHeightP)*100 ) *3
const colheightP2 = ((ResJ[1].amount/TotalHeightP)*100 ) *3
const colheightP3 = ((ResJ[2].amount/TotalHeightP)*100 ) *3
const colheightP4 = ((ResJ[3].amount/TotalHeightP)*100 ) *3
const colheightP5 = ((ResJ[4].amount/TotalHeightP)*100 ) *3
const colheightP6 = ((ResJ[5].amount/TotalHeightP)*100 ) *3
const colheightP7 = ((ResJ[6].amount/TotalHeightP)*100 ) *3
console.log(colheightP1)

/* changing the display height with calculated variable */
  scol1.style.height= `${colheightP1}%`
  scol2.style.height= `${colheightP2}%`
  scol3.style.height= `${colheightP3}%`
  scol4.style.height= `${colheightP4}%`
  scol5.style.height= `${colheightP5}%`
  scol6.style.height= `${colheightP6}%`
  scol7.style.height= `${colheightP7}%`



/* Creating the Hover Price effects which onmouse evl to use tho? */


// Create new elements to be appended on hover
const createCol1 = document.createElement('span')
const createCol2 = document.createElement('span')
const createCol3 = document.createElement('span')
const createCol4 = document.createElement('span')
const createCol5 = document.createElement('span')
const createCol6 = document.createElement('span')
const createCol7 = document.createElement('span')



// Display the amount as a text in the span element and append to selected col div
createCol1.innerText= `$${ResJ[0].amount}`
 sc1.appendChild(createCol1)
createCol2.innerText= `$${ResJ[1].amount}`
 sc2.appendChild(createCol2)
createCol3.innerText= `$${ResJ[2].amount}`
 sc3.appendChild(createCol3)
createCol4.innerText= `$${ResJ[3].amount}`
 sc4.appendChild(createCol4)
createCol5.innerText= `$${ResJ[4].amount}`
 sc5.appendChild(createCol5)
createCol6.innerText= `$${ResJ[5].amount}`
 sc6.appendChild(createCol6)
createCol7.innerText= `$${ResJ[6].amount}`
 sc7.appendChild(createCol7)



 /* Created a class (remove) that displays on event 
 toggle or add? 
 */
 sc1.onmouseenter= function(e){
  createCol1.classList.toggle('remove')
}
 sc1.onmouseenter= function(e){
  createCol1.classList.toggle('remove')
}
 sc2.onmouseenter= function(e){
  createCol2.classList.toggle('remove')
}
 sc3.onmouseenter= function(e){
  createCol3.classList.toggle('remove')
}
 sc4.onmouseenter= function(e){
  createCol4.classList.toggle('remove')
}
 sc5.onmouseenter= function(e){
  createCol5.classList.toggle('remove')
}
 sc6.onmouseenter= function(e){
  createCol6.classList.toggle('remove')
}
 sc7.onmouseenter= function(e){
  createCol7.classList.toggle('remove')
}
   
}

//Roar!
GetData()

