

var button = document.getElementById("my-button");
button.addEventListener('click', function() {
    var limit = document.getElementById("given");
    var digit=document.getElementById("counter-digit")
var value = parseFloat(limit.value);
  console.log(value);
  var i=0;
 var count= setInterval(function()
  {     if(value==i)
        {clearInterval(count)
        alert("The Time is Over")
        }
        i++;
      digit.innerText=i;
      digit.innertext='';
  },1000)
 
});
