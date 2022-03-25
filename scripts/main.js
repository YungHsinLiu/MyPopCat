var isPopping = false;
var timeoutId;
function changeSrc()
{
    clearTimeout(timeoutId);
        document.getElementById("myPopCat").src="images/popcat2.jpeg" ;
        timeoutId = setTimeout(function() {
            document.getElementById("myPopCat").src="images/popcat1.jpeg" ;
        }, 100); 
    
        // clearTimeout(timer);
}

