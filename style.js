

function colorChange() {
    document.getElementById("clickEvent").style.backgroundColor = "#fff";
    document.getElementById("clickEvent").style.border = "#3c505e solid 2px";
    document.getElementById("clickEvent").style.color = "#3c505e";
    document.getElementById("clickEvent").style.transition = "all 0.7s";


    setTimeout(function(){
        document.getElementById("clickEvent").style.backgroundColor = "#3c505e";
        document.getElementById("clickEvent").style.border = "#3c505e solid 2px";
        document.getElementById("clickEvent").style.color = "#fff";

    },700);
  }


  function colorSwitch() {
      document.getElementById("click").style.backgroundColor = "#fff";
      document.getElementById("click").style.border = "#3c505e solid 2px";
      document.getElementById("click").style.color = "#3c505e";
      document.getElementById("click").style.transition = "all 0.7s";


      setTimeout(function(){
          document.getElementById("click").style.backgroundColor = "#3c505e";
          document.getElementById("click").style.border = "#3c505e solid 2px";
          document.getElementById("click").style.color = "#fff";

      },700);
    }
