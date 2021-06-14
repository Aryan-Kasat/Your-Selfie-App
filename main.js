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
    if(content=="take my selfie"){
        speak();

    }
    
}
function speak(){
    var synthesis=window.speechSynthesis;
    speak_data="taking your selfie in five seconds";
    var utter=new SpeechSynthesisUtterance(speak_data);
    synthesis.speak(utter);
    Webcam.attach(camera);
    setTimeout(function (){
        takesnapshot();
        save();
    },5000);
   }
   Webcam.set({
   width:350,height:250,image_format:'png',png_quality:100
   });
   camera=document.getElementById("camera");
   function takesnapshot(){
       Webcam.snap(function(data_url){
           document.getElementById("result").innerHTML="<img id='new_image' src='"+data_url+"'>";

       });
   }
   function save(){
       link=document.getElementById("link");
       img=document.getElementById("new_image").src;
       link.href=img;
       link.click();
   }
