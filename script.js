let gameSpace = [firstRow = ['', '', ''], secondRow = ['', '', ''], thirdRow = ['', '', '']];

let counter = 0;

one.onclick = () => {
    if (counter === 0 && one.innerHTML === "") {
        document.getElementById('one').innerHTML = 'X';
        firstRow[0] = 'X';
        counter++;
        console.log(gameSpace);


        whoWins();

    }

    if (counter === 1 && one.innerHTML === "") {
        document.getElementById('one').innerHTML = 'O';
        firstRow[0] = 'O';
        counter--;
        console.log(gameSpace);


        whoWins();

    }
}

two.onclick = () => {
    if (counter === 0 && two.innerHTML === "") {
        document.getElementById('two').innerHTML = 'X';
        firstRow[1] = 'X';
        counter++;
        console.log(gameSpace);

        whoWins();

    }

    if (counter === 1 && two.innerHTML === "") {
        document.getElementById('two').innerHTML = 'O';
        firstRow[1] = 'O';
        counter--;
        console.log(gameSpace);

        whoWins();

    }
}

three.onclick = () => {
    if (counter === 0 && three.innerHTML === "") {
        document.getElementById('three').innerHTML = 'X';
        firstRow[2] = 'X';
        counter++;
        console.log(gameSpace);

        whoWins();

    }

    if (counter === 1 && three.innerHTML === "") {
        document.getElementById('three').innerHTML = 'O';
        firstRow[2] = 'O';
        counter--;
        console.log(gameSpace);

        whoWins();

    }
}

four.onclick = () => {

    if (counter === 0 && four.innerHTML === "") {
        document.getElementById('four').innerHTML = 'X';
        secondRow[0] = 'X';
        counter++;
        console.log(gameSpace);

        whoWins();

    }

    if (counter === 1 && four.innerHTML === "") {
        document.getElementById('four').innerHTML = 'O';
        secondRow[0] = 'O';
        counter--;
        console.log(gameSpace);

        whoWins();

    }
}

five.onclick = () => {

    if (counter === 0 && five.innerHTML === "") {
        document.getElementById('five').innerHTML = 'X';
        secondRow[1] = 'X';
        counter++;
        console.log(gameSpace);

        whoWins();

    }

    if (counter === 1 && five.innerHTML === "") {
        document.getElementById('five').innerHTML = 'O';
        secondRow[1] = 'O';
        counter--;
        console.log(gameSpace);

        whoWins();

    }
}

six.onclick = () => {
    if (counter === 0 && six.innerHTML === "") {
        document.getElementById('six').innerHTML = 'X';
        secondRow[2] = 'X';
        counter++;
        console.log(gameSpace);

        whoWins();

    }

    if (counter === 1 && six.innerHTML === "") {
        document.getElementById('six').innerHTML = 'O';
        secondRow[2] = 'O';
        counter--;
        console.log(gameSpace);

        whoWins();

    }
}

seven.onclick = () => {

    if (counter === 0 && seven.innerHTML === "") {
        document.getElementById('seven').innerHTML = 'X';
        thirdRow[0] = 'X';
        counter++;
        console.log(gameSpace);

        whoWins();

    }

    if (counter === 1 && seven.innerHTML === "") {
        document.getElementById('seven').innerHTML = 'O';
        thirdRow[0] = 'O';
        counter--;
        console.log(gameSpace);

        whoWins();

    }
}

eight.onclick = () => {

    if (counter === 0 && eight.innerHTML === "") {
        document.getElementById('eight').innerHTML = 'X';
        thirdRow[1] = 'X';
        counter++;
        console.log(gameSpace);

        whoWins();

    }

    if (counter === 1 && eight.innerHTML === "") {
        document.getElementById('eight').innerHTML = 'O';
        thirdRow[1] = 'O';
        counter--;
        console.log(gameSpace);

        whoWins();

    }
}

nine.onclick = () => {

    if (counter === 0 && nine.innerHTML === "") {
        document.getElementById('nine').innerHTML = 'X';
        thirdRow[2] = 'X';
        counter++;
        console.log(gameSpace);

        whoWins();

    }

    if (counter === 1 && nine.innerHTML === "") {
        document.getElementById('nine').innerHTML = 'O';
        thirdRow[2] = 'O';
        counter--;
        console.log(gameSpace);

        whoWins();

    }
}

function whoWins() {
    if (firstRow[0] !== '' && firstRow[0] === firstRow[1] && firstRow[0] === firstRow[2]) { alert(`${firstRow[0]} wins`); window.location.reload() }

    if (secondRow[0] !== '' && secondRow[0] === secondRow[1] && secondRow[0] === secondRow[2]) { alert(`${secondRow[0]} wins`); window.location.reload() }

    if (thirdRow[0] !== '' && thirdRow[0] === thirdRow[1] && thirdRow[0] === thirdRow[2]) { alert(`${thirdRow[0]} wins`); window.location.reload() }

    if (firstRow[0] !== '' && firstRow[0] === secondRow[0] && thirdRow[0] === firstRow[0]) { alert(`${thirdRow[0]} wins`); window.location.reload() }

    if (firstRow[1] !== '' && firstRow[1] === secondRow[1] && thirdRow[1] === firstRow[1]) { alert(`${thirdRow[1]} wins`); window.location.reload() }

    if (firstRow[2] !== '' && firstRow[2] === secondRow[2] && thirdRow[2] === firstRow[2]) { alert(`${thirdRow[2]} wins`); window.location.reload() }

    if (firstRow[0] !== '' && firstRow[0] === secondRow[1] && thirdRow[2] === firstRow[0]) { alert(`${thirdRow[2]} wins`); window.location.reload() }

    if (firstRow[2] !== '' && firstRow[2] === secondRow[1] && thirdRow[0] === firstRow[2]) { alert(`${thirdRow[0]} wins`); window.location.reload() }

    let x = 0;
    let y = 0;
    let z = 0;

    for (let i = 0; i < firstRow.length; i++) {

        if (firstRow[i] !== '') x++;


        if (secondRow[i] !== '') y++;


        if (thirdRow[i] !== '') z++;

        console.log(`x =  ${x} y = ${y} z = ${z}`);
    }

    if (x === 3 && x === y && x === z) {
        alert(`nechya`);
        window.location.reload();

    }





}