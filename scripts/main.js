
  var timeoutId;
  var sendPop;
  var popCount = 0;
  var lastPopCount = 0;
  var sendPopCount = 0;

  var CountText = document.querySelector('h2');
  var total;
  var totalText = document.querySelector('h1');
  function changeSrc()
  {
      clearTimeout(timeoutId);
      clearTimeout(sendPop);
      popCount++;
      CountText.textContent = popCount.toString();  
      document.getElementById("myPopCat").src="images/popcat2.jpeg" ;
      timeoutId = setTimeout(function() {
          document.getElementById("myPopCat").src="images/popcat1.jpeg" ;
      }, 300); 
      sendPop = setTimeout(function() {
        sendPopCount = popCount - lastPopCount;
        lastPopCount = popCount;
        sendPost();
      }, 1000);
  }

function sendPost()
{
    var data = 'times='+ sendPopCount.toString();

    fetch( "https://3973-2001-b011-30d0-1b52-4d5-5edd-3aa9-c9bf.ngrok.io/pop", {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: data
      })
      getPopTimes();
}

async function getPopTimes()
{
    await fetch("https://3973-2001-b011-30d0-1b52-4d5-5edd-3aa9-c9bf.ngrok.io/show")
    .then(
      response => response.json() // .json(), .blob(), etc.
    ).then(
      json => total = json// Handle here
    );
    console.log(total.data[0].times);
    totalText.textContent = totalText.textContent+" : "+total.data[0].times.toString();
}
document.onload = getPopTimes();
