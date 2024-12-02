'Use Strict'

 const sections =Array.from (document.querySelectorAll('.sections'));
 const form = document.createElement('form');
 console.log(sections);
const aboutClick =  document.querySelector('.aboutClick');
const projectclick =  document.querySelector('.projectClick');
const registerClick =  document.querySelector('.registerClick');
const homeButton =  document.querySelector('.greenGhostLogo');
const homeButtons =  document.querySelector('.greenGhostLogos');
const homeSection =  document.querySelector('.homeSection');
const aboutSection =  document.querySelector('.aboutSection');
const projectSection =  document.querySelector('.projectSection');
const registerSection =  document.querySelector('.registerSection');
const button1 =  document.querySelector('.button1');
const button2 =  document.querySelector('.button2');
const leftHandSide =  document.querySelector('.leftHand');
const rightHandSide =  document.querySelector('.rightHand');
const secondsTimer =  document.querySelector('.num4');
const minsTimer =  document.querySelector('.num3');
const hoursTimer =  document.querySelector('.num2');
const daysTimer =  document.querySelector('.num1');
const registerButtonsArray =  Array.from(document.querySelectorAll('.registerButton'));
const projectDiv = Array.from( document.querySelectorAll('.projectDiv'));
const explanation = Array.from( document.querySelectorAll('.explanation'));
const projectInformation =  document.querySelector('.projectInformation');
const X =  document.querySelector('.X');
const picturesInformtion =  document.querySelector('.picturesInformtion');
const backProjectSection =  document.querySelector('.backProjectSection');
const inputs = Array.from(document.querySelectorAll('input'));
const signUpButton = document.querySelector('.normalSignUp')





projectDiv.forEach( function(e,i){
  e.addEventListener('click', function(){
    console.log(explanation[i].textContent);
   projectInformation.textContent = `${explanation[i].textContent}`;
   console.log(projectInformation.textContent);


   

   picturesInformtion.classList.add('fadeIn')
   picturesInformtion.classList.remove('fadeOut')
  
  backProjectSection.classList.add('fadeSectionIn')
   backProjectSection.classList.remove('fadeSectionOut')
   
  })
})



X.addEventListener('click', function(){
  picturesInformtion.classList.add('fadeOut')
  picturesInformtion.classList.remove('fadeIn')
 
 backProjectSection.classList.add('fadeSectionOut')
  backProjectSection.classList.remove('fadeSectionIn')
})



const sectionChange = function(sectional){
    sections.forEach( function(e,i){
        e.style.display="none"
     });
     sectional.style.display="inline"
 }



 homeButton.addEventListener('click', function(){
    sectionChange(homeSection)
 })
 homeButtons.addEventListener('click', function(){
    sectionChange(homeSection)
 })

 aboutClick.addEventListener('click', function(){
   sectionChange(aboutSection)
 })
 registerClick.addEventListener('click', function(){
    sectionChange(registerSection)
 })

projectclick.addEventListener('click', function(){
  sectionChange(projectSection)
 })

  registerButtonsArray.forEach( function(e,i){
    e.addEventListener('click',function(){
        sectionChange(registerSection)
     })
  })


 button1.addEventListener('click',function(){
button1.style.backgroundColor="black"
button1.style.color= "white"
button2.style.fontSize='x-large';
button1.style.fontSize = "large";
 button2.style.backgroundColor="white"
    button2.style.color= "black"
    leftHandSide.style.transform= "translateX(0%)"
    rightHandSide.style.transform= "translateX(0%)"
 })
 button2.addEventListener('click',function(){
    button2.style.backgroundColor="black"
    button2.style.color= "white"
    button1.style.backgroundColor="white"
button1.style.color= "black"
button1.style.fontSize='x-large';
button2.style.fontSize = "large";
leftHandSide.style.transform= "translateX(-100%)"
    rightHandSide.style.transform= "translateX(-100%)"
     })

let seconds=secondsTimer.textContent;
let minutes = minsTimer.textContent;
let hours = hoursTimer.textContent;
     console.log(secondsTimer.textContent);

    //  function startMinutesTimer(){
    //     setInterval(function(){
    //         minutes--
    //         if(minutes <0){
    //             minutes = 60
    //         }
    //         minsTimer.textContent= minutes;
    //     },)
    // }

     function startTimer() {
        setInterval(() => {
            seconds--; // Decrement by 1
            if(seconds===0){
              minutes --
              if(minutes===0){
                hours--
                if(hours<0){
                    hours=60
                }
                hoursTimer.textContent=hours;
              }
              if(minutes <0){
                minutes = 60
            }
            minsTimer.textContent= minutes;
            }
            if (seconds < 0) {



                seconds = 60; // Reset to 60
            }
            secondsTimer.textContent = seconds;
        }, 1000); 
    }

    startTimer(); 


console.log(form);
form.addEventListener('submit', function(e){
  // e.preventDefault();

 }
)
console.log(inputs.value);
let emailValue = document.querySelector('.email').value
let firstNameValue = document.querySelector('.firstName').value
let lastNameValue = document.querySelector('.lastName').value;
let phoneNumberValue = document.querySelector('.phone').value;
signUpButton.addEventListener('click', function(){
  // console.log(emailValue);
  // emailValue = "";
  // lastNameValue = "";
  // firstNameValue ="";
  // phoneNumberValue = "";
 

})