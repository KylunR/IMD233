window.onload = function() {
    var p1Button = document.querySelector("#p1");
    var p2Button = document.getElementById("p2");
    var resetButton = document.getElementById("reset");
    var p1Display = document.querySelector("#p1Display");
    var p2Display = document.querySelector("#p2Display");
    var numInput = document.querySelector("input");
    var winningScoreDisplay = document.querySelector("p span");
    var p1Score = 0;
    var p2Score = 0;
    var gameOver = false;
    var winningScore = 5;

    p1Button.addEventListener("click", function() {
        if (!gameOver) {
            p1Score++;
            if (p1Score === winningScore) {
                p1Button.classList.remove("btn-primary");
                p1Button.classList.add("btn-success");
                p1Display.classList.add("winner");
                gameOver = true;
            }
            p1Display.textContent = p1Score;
        }
    });

    p2Button.addEventListener("click", function() {
        if (!gameOver) {
            p2Score++;
            if (p2Score === winningScore) {
                p2Button.classList.remove("btn-primary");
                p2Button.classList.add("btn-success");
                p2Display.classList.add("winner");
                gameOver = true;
            }
            p2Display.textContent = p2Score;
        }
    });

    resetButton.addEventListener("click", function() {
        reset();
    });

    function reset() {
        p1Score = 0;
        p2Score = 0;
        p1Display.textContent = 0;
        p2Display.textContent = 0;
        p1Display.classList.remove("winner");
        p2Display.classList.remove("winner");
        gameOver = false;

        if (p1Button.classList.contains("btn-success")) {
            p1Button.classList.remove("btn-success");
            p1Button.classList.add("btn-primary");
        }

        if (p2Button.classList.contains("btn-success")) {
            p2Button.classList.remove("btn-success");
            p2Button.classList.add("btn-primary");
        }
    }

    numInput.addEventListener("change", function() {
        if (this.value > 0) {
            winningScoreDisplay.textContent = this.value;
            winningScore = Number(this.value);
            reset();
        }
    });
};