/*Name this external file gallery.js*/

/* Name this external file gallery.js */

function upDate(previewPic) {
   
    console.log("Mouseover event triggered");

   
    console.log("Alt: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // 
    var imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;

    
    imageDiv.style.backgroundImage = "url(" + previewPic.src + ")";
}

function unDo() {
    
    console.log("Mouseout event triggered");

   
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";

    
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
