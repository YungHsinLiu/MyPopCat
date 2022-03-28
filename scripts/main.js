var isPopping = false;
var timeoutId;
var popCount = 0;

var Count = document.querySelector('h1');
  
function changeSrc()
{
    clearTimeout(timeoutId);
    popCount++;
    Count.textContent = popCount.toString();
    document.getElementById("myPopCat").src="images/popcat2.jpeg" ;
    timeoutId = setTimeout(function() {
        document.getElementById("myPopCat").src="images/popcat1.jpeg" ;
    }, 100); 

        // clearTimeout(timer);
}

