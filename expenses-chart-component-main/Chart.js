 function $(tag){
  return document.getElementsByClassName(tag)[0]
 }
const scol1 = $('scol1')
const scol2 = $('scol2')
const scol3 = $('scol3')
const scol4 = $('scol4')
const scol5 = $('scol5')
const scol6 = $('scol6')
const scol7 = $('scol7')
const subcol = $('sub-col')
console.log(scol1)

const sc1 = document.getElementById('sc1')
const sc2 = document.getElementById('sc2')
const sc3 = document.getElementById('sc3')
const sc4 = document.getElementById('sc4')
const sc5 = document.getElementById('sc5')
const sc6 = document.getElementById('sc6')
const sc7 = document.getElementById('sc7')





 const GetData = async() =>{

   const result = await fetch('data.json')
   const ResJ = await result.json()


   const TotalHeightP = ResJ[0].amount + ResJ[1].amount+ ResJ[2].amount+ResJ[3].amount+ResJ[4].amount+ResJ[5].amount+ResJ[6].amount
   
const createCol1 = document.createElement('span')
const createCol2 = document.createElement('span')

createCol1.innerText=ResJ[0].amount
 sc1.appendChild(createCol1)
createCol2.innerText=ResJ[1].amount
 sc2.appendChild(createCol2)

   
   const colheightP1 = ((ResJ[0].amount/TotalHeightP)*100 ) *3
   const colheightP2 = ((ResJ[1].amount/TotalHeightP)*100 ) *3
   const colheightP3 = ((ResJ[2].amount/TotalHeightP)*100 ) *3
   const colheightP4 = ((ResJ[3].amount/TotalHeightP)*100 ) *3
   const colheightP5 = ((ResJ[4].amount/TotalHeightP)*100 ) *3
   const colheightP6 = ((ResJ[5].amount/TotalHeightP)*100 ) *3
   const colheightP7 = ((ResJ[6].amount/TotalHeightP)*100 ) *3
   console.log(colheightP1)

     scol1.style.height= `${colheightP1}%`
     scol2.style.height= `${colheightP2}%`
     scol3.style.height= `${colheightP3}%`
     scol4.style.height= `${colheightP4}%`
     scol5.style.height= `${colheightP5}%`
     scol6.style.height= `${colheightP6}%`
     scol7.style.height= `${colheightP7}%`
   
}

GetData()

