function showButton(){document.getElementById("fontcontroller").style.display="block"}function smallerFont(){document.getElementById("allhtml").style.fontSize="1em"}function biggerFont(){document.getElementById("allhtml").style.fontSize="1.5em"}window.onload=function(){showButton()};let modal=document.getElementById("myModal"),span=document.getElementsByClassName("close")[0];if(window.addEventListener("offline",function(e){modal.style.display="block"}),window.addEventListener("online",function(e){modal.style.display="none"}),span.onclick=function(){modal.style.display="none"},window.onclick=function(e){e.target==modal&&(modal.style.display="none")},window.addEventListener("online",()=>console.log("came online")),window.addEventListener("offline",()=>console.log("came offline")),console.log("Just a placeholder"),"speechSynthesis"in window){var msg=new SpeechSynthesisUtterance("Ik ben booky");window.speechSynthesis.speak(msg)}