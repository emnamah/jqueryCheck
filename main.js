function b() {
  let x = document.getElementById("textArea");
  if (x.style.fontWeight === "bold") {
    x.style.fontWeight = "normal";
  } else {
    x.style.fontWeight = "bold";
  }
}

function i() {
  let x = document.getElementById("textArea");
  if (x.style.fontStyle === "italic") {
    x.style.fontStyle = "normal";
  } else {
    x.style.fontStyle = "italic";
  }
}

function underline() {
  let x = document.getElementById("textArea");
  if (x.style.textDecoration === "underline") {
    x.style.textDecoration = "normal";
  } else {
    x.style.textDecoration = "underline";
  }
}

function changeSize() {
  let mySelect = document.getElementById("myFirstMenu");
  let size = mySelect.options[mySelect.selectedIndex].value;
  document.getElementById("textArea").style.fontSize = size;
}
function changeFont() {
  let mySelectFont = document.getElementById("mySecondMenu");
  let fonte = mySelectFont.options[mySelectFont.selectedIndex].value;
  document.getElementById("textArea").style.fontFamily = fonte;
}
// $(".image1").hover(function(){
//   $(".btnhover1").toggleClass('hidden')
// })

$(document).ready(function(){ 
     $(".image1").mouseenter(function(){    
         $(".btnhover1").css("display", "inline");    });   
          $(".image1").mouseleave(function(){
            $(".btnhover1").css("display", "none");    
        });  
      });
$(document).ready(function(){ 
     $(".image2").mouseenter(function(){    
         $(".btnhover2").css("display", "inline");    });   
          $(".image2").mouseleave(function(){
            $(".btnhover2").css("display", "none");    
        });  
      });
$(document).ready(function(){ 
     $(".image3").mouseenter(function(){    
         $(".btnhover3").css("display", "inline");    });   
          $(".image3").mouseleave(function(){
            $(".btnhover3").css("display", "none");    
        });  
      });
$(document).ready(function(){ 
     $(".image4").mouseenter(function(){    
         $(".btnhover4").css("display", "inline");    });   
          $(".image4").mouseleave(function(){
            $(".btnhover4").css("display", "none");    
        });  
      });
$(document).ready(function(){ 
     $(".image5").mouseenter(function(){    
         $(".btnhover5").css("display", "inline");    });   
          $(".image5").mouseleave(function(){
            $(".btnhover5").css("display", "none");    
        });  
      });
$(document).ready(function(){ 
     $(".image6").mouseenter(function(){    
         $(".btnhover6").css("display", "inline");    });   
          $(".image6").mouseleave(function(){
            $(".btnhover6").css("display", "none");    
        });  
      });
$(document).ready(function(){ 
     $(".image7").mouseenter(function(){    
         $(".btnhover7").css("display", "inline");    });   
          $(".image7").mouseleave(function(){
            $(".btnhover7").css("display", "none");    
        });  
      });
$(document).ready(function(){ 
     $(".image8").mouseenter(function(){    
         $(".btnhover8").css("display", "inline");    });   
          $(".image8").mouseleave(function(){
            $(".btnhover8").css("display", "none");    
        });  
      });
$(document).ready(function(){ 
     $(".image9").mouseenter(function(){    
         $(".btnhover9").css("display", "inline");    });   
          $(".image9").mouseleave(function(){
            $(".btnhover9").css("display", "none");    
        });  
      });
$(".image1").click(function(){
        $(".message").modal({
            fadeDuration: 100
          });
        })
$(".image2").click(function(){
        $(".message").modal({
            fadeDuration: 100
          });
        })
$(".image3").click(function(){
        $(".message").modal({
            fadeDuration: 100
          });
        })
$(".image4").click(function(){
        $(".message").modal({
            fadeDuration: 100
          });
        })
$(".image5").click(function(){
        $(".message").modal({
            fadeDuration: 100
          });
        })
$(".image6").click(function(){
        $(".message").modal({
            fadeDuration: 100
          });
        })
$(".image7").click(function(){
        $(".message").modal({
            fadeDuration: 100
          });
        })
$(".image8").click(function(){
        $(".message").modal({
            fadeDuration: 100
          });
        })
$(".image9").click(function(){
        $(".message").modal({
            fadeDuration: 100
          });
        })
