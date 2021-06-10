var speechrecognition=window.webkitSpeechRecognition;
var Recognition=new speechrecognition();
function start(){
 document.getElementById("textbox").innerHTML="";
 Recognition.start();
}
Recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content)
    document.getElementById("textbox").innerHTML=content;
    speak();
}
function speak(){
    var synthesis=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;
    var utter=new SpeechSynthesisUtterance(speak_data);
    synthesis.speak(utter);
    Webcam.attach(camera);
   }
   Webcam.set({
   width:350,height:250,image_format:'png',png_quality:100
   });
   camera=document.getElementById("camera");
