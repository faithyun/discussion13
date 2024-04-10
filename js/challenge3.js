// when the page is loaded an alert box should pop up with the Caption from the 2nd figure. 

window.addEventListener("load", function() {
    // alert("hello!");
    let elements = document.querySelectorAll('figcaption');
    console.log(elements);
    let caption = elements[1];
    console.log(caption.innerHTML);

    alert(caption.innerHTML);
});
 

// When the mouse goes over an image three things should happen: 
//    a. the backgroud image of the display should change to the same image being hovered over 
//    b. the text in the siplay should show the alt attribute of the image 
//    c. the image should no longer be visible-- but it should still take up the same amount of space 


// document.querySelector(thumbs).style.display = 



//  when the mouse leaves an image, the page should revert back 



// implement the same functionalitiy for tab focus. Make sure that it is possible to return the original blue background.


// Notice that the functionalitiy doesn't work on 2nd image. Can you fix this problem JUST using JavaScript? 
