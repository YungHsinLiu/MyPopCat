var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World!";
var isPopping = false;
var timeoutId;
function changeSrc()
{
    clearTimeout(timeoutId);
        document.getElementById("myImage").src="images/popcat2.jpeg" ;
        timeoutId = setTimeout(function() {
            document.getElementById("myImage").src="images/popcat1.jpeg" ;
        }, 100); 
    
        // clearTimeout(timer);
}

