// burger menu

  function burgerMenu() {
      var burger = document.getElementById("burgerBar");
      var burgerMargin = document.getElementById("color");

      if (burger.style.display === "flex") {
          burger.style.display = "none";
          burgerMargin.style.marginTop = "100px";

      } else {
          burger.style.display = "flex";
          burgerMargin.style.marginTop = "350px";
      }
  }



  // Stor blå knap
  // Funktionen kaldet colorChange bruges til at ændre farve ved klik

  function colorChange() {
    document.getElementById("clickEvent").style.backgroundColor = "#fff";
    document.getElementById("clickEvent").style.border = "#3c505e solid 2px";
    document.getElementById("clickEvent").style.color = "#3c505e";
    document.getElementById("clickEvent").style.transition = "all 0.7s";

    // For at farven automatisk skifter tilbage til starts farven
    setTimeout(function(){
        document.getElementById("clickEvent").style.backgroundColor = "#3c505e";
        document.getElementById("clickEvent").style.border = "#3c505e solid 2px";
        document.getElementById("clickEvent").style.color = "#fff";

    },700); // 0,7 sek
  }



  // Lyseblå knap
  // Funktionen kaldet colorSwitch bruges til at ændre farve ved klik

  function colorSwitch() {
      document.getElementById("click").style.backgroundColor = "#fff";
      document.getElementById("click").style.border = "#3c505e solid 2px";
      document.getElementById("click").style.color = "#3c505e";
      document.getElementById("click").style.transition = "all 0.7s";

      // For at farven automatisk skifter tilbage til starts farven
      setTimeout(function(){
          document.getElementById("click").style.backgroundColor = "#3c505e";
          document.getElementById("click").style.border = "#3c505e solid 2px";
          document.getElementById("click").style.color = "#fff";

      },700); // 0,7 sek
    }



    // Pink knap
    // Funktionen kaldet colorShift bruges til at ændre farve ved klik

    function colorShift() {
        document.getElementById("clickOn").style.backgroundColor = "#fff";
        document.getElementById("clickOn").style.border = "#cfb1af solid 2px";
        document.getElementById("clickOn").style.color = "#cfb1af";
        document.getElementById("clickOn").style.transition = "all 0.7s";

        // For at farven automatisk skifter tilbage til starts farven
        setTimeout(function(){
            document.getElementById("clickOn").style.backgroundColor = "#cfb1af";
            document.getElementById("clickOn").style.border = "#cfb1af solid 2px";
            document.getElementById("clickOn").style.color = "#fff";

        },700); // 0,7 sek
      }
