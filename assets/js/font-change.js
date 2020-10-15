
$(document).ready(function(){
    $("#myrange").on("input change", function (){
        $(".box").css("font-size", $(this).val() + "px" );
    })

    $("#linerange").on("input change", function (){
        $(".box").css("line-height", $(this).val() + "px" );  
    })

    $("#spacingrange").on("input change", function (){
        $(".box").css("letter-spacing", $(this).val() + "px" );
    })
    
    $("#typo").on("select change", function (){
        $(".box").css("font-family", $(this).val());
    })
})
 

 
/*  
var slider = document.getElementById("myrange");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


slider.addEventListener("mousemove", function(){
   var xy = slider.value;
   var color = 'linear-gradient(90deg, rgb(117,252,117)' + xy + '%, rgb(214,214,214)' + xy + '%)';
   slider.style.background = color;
 
}) */

 