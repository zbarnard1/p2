//This is the Javascript file for "Project 2 - Javascript Matching Game"
      var numTiles = 16;
      var numberList = [];
      var selected = [];

      function restart() {
        kill();
        makeList();
        shuffle();
        makeLoop(numTiles);
      }

      function appendToHtml (thing) {
        var at = document.getElementById("gameBox");
        at.appendChild(thing);
      }

      function makeLoop (n) {
        for ( i = 0; i < n; i++) {
        appendToHtml(tileMake(pick()));
        }
      }

      function tileMake (foo){
        var divi = document.createElement("div");
        var inside = document.createTextNode(foo);
        divi.addEventListener("click", flip, true);
        divi.setAttribute("class", "initial");
        divi.appendChild(inside);
        return divi ;
      }

      function makeList () {
        for (var i = 1; i <= (numTiles/2); i++) {
          numberList.push (i);
          numberList.push (i);
        }
      }

      function shuffle () {
        numberList.sort(function(a, b){return 0.5 - Math.random()});
      }

      function pick () {
        return numberList.shift();
      }

      function kill () {
        document.getElementById("gameBox").innerHTML = "";
      }

      function flip (event) {
        var clicked = event.target;
        clicked.setAttribute("class", "trial");
        if (!selected.find(finder, clicked)) {
          selected.push(clicked);
        }
        howMany();
      }

      function howMany () {       
        if (selected.length > 1) {
          compare();
        }
      }

      function finder (a) {
        return a===this;
      }

      function compare () {
        var first = selected[0].childNodes[0].nodeValue;
        var second = selected[1].childNodes[0].nodeValue;
        if (first == second) {
          match();
        }
        else {
          setTimeout(hide, 0);
        }
      }

      function hide () {
        var item = selected.shift();
        while (item){
          item.setAttribute("class", "initial");
          item = selected.shift();
        }
      }

      function match () {
        var loops = selected.length;
        for (i=0; i < loops; i++)
          selected.shift().setAttribute("class", "matched");
        }
