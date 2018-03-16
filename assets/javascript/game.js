
        var listOfLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        var wins = 0;
        var loss = 0;
        var remGuess = 10;
        var gussedLetters = [];
        var gameStarted = false;

        document.onkeyup = function (event) {

            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
            if (!gameStarted && userGuess === " ") {
                gameStarted = true;
                showStats();
            }
            else if(gameStarted) {

                if (listOfLetters.includes(userGuess)) {

                    var compGuess = listOfLetters[Math.floor(Math.random() * listOfLetters.length)];
                    gussedLetters.push(userGuess);

                    if (compGuess === userGuess) {
                        wins++ ,
                            gussedLetters = [], remGuess = 9;
                    } else {;
                        remGuess--;
                    } if (remGuess === 0) {
                        loss++ , gussedLetters = [], remGuess = 9;
                    } if (wins === 3) {
                        gameStarted = false;
                        reset();
                        alert("To restart the game press Space!!");
                    }

                    showStats();
                }

            }

        };

        function showStats() {
            var html =

                "<h1 class=guess>Guess what letter I'm thinkin of</h1>" +
                "<h2>wins: " + wins + "</h2>" +
                "<h3>Losses: " + loss + "</h3>" +
                "<h3>Guesses left: " + remGuess + "</h3>" +
                "<h3>You Guesses so far: " + gussedLetters + "</h3>";
            document.getElementById("game").innerHTML = html;
        };

        function reset(){
         wins = 0;
         loss = 0;
         remGuess = 10;
         gussedLetters = [];
         gameStarted = false;
        }

