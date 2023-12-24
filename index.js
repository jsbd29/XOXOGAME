<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XOXO Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .game {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(3, 100px);
            gap: 10px;
        }
        .box {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 100px;
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
            border: 1px solid #ddd;
            transition: background-color 0.3s;
        }
        .box:hover {
            background-color: #e0e0e0;
        }
    </style>
</head>
<body>
    <div class="game"></div>
    <script>
        const game = document.querySelector('.game');
        let boxes = [];
        let turn = 'X';
        let isGameOver = false;

        for (let i = 0; i < 9; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('click', playGame);
            boxes.push(box);
            game.appendChild(box);
        }

        function playGame(e) {
            if (isGameOver) return;

            const box = e.target;
            if (box.textContent) return;

            box.textContent = turn;
            turn = turn === 'X' ? 'O' : 'X';

            checkWin();
        }

        function checkWin() {
            let result = '';

            for (let i = 0; i < 3; i++) {
                if (boxes[i].textContent === boxes[i + 3].textContent && boxes[i + 3].textContent === boxes[i + 6].textContent) {
                    result = boxes[i].textContent;
                }

                if (boxes[i * 3].textContent === boxes[i * 3 + 1].textContent && boxes[i * 3 + 1].textContent === boxes[i * 3 + 2].textContent) {
                    result = boxes[i * 3].textContent;
                }
            }

            if (boxes[0].textContent === boxes[4].textContent && boxes[4].textContent === boxes[8].textContent) {
                result = boxes[0].textContent;
            }

            if (boxes[2].textContent === boxes[4].textContent && boxes[4].textContent === boxes[6].textContent) {
                result = boxes[2].textContent;
            }

            if (result) {
                isGameOver = true;
                alert(`${result} wins the game!`);
            } else if (!boxes.some(box => !box.textContent)) {
                isGameOver = true;
                alert('It\'s a draw!');
            }
        }
    </script>
</body>
</html>
