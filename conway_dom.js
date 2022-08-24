// your code for the current homework goes here

// because this file is included below the conway.js script
// it has access to all functions/variables declared in conway.js
// after you've replaced the dummy stepBoard with your correct stepBoard,
// the following code should print [[false, true, false], [false, true, false]]:
var x = 25;
var y = 25;
function createTable(a, b) {
    var n = 0;
    var container = document.getElementById("table-container");
    let table = document.createElement("table")
    table.classList.add("table");
    table.setAttribute("id", "table");
    for (let i = 0; i < a; i++) {
        let tr = document.createElement("tr");
        tr.classList.add("tr");
        for (let j = 0; j < b; j++) {
           let td = document.createElement("td");
           if (n % 2 === 0) {
            let str = "td" + " " + i + " " + j;
            td.classList.add("td-even");
            td.setAttribute("id", str);
            td.style.backgroundColor = "black";
           }
           else {
            let str = "td" + " " + i + " " + j;
            td.classList.add("td-odd");
            td.setAttribute("id", str);
            td.style.backgroundColor = "white";
           }
           n+=1;
           tr.append(td);
        }
        table.appendChild(tr);
    }
    container.append(table);
}
createTable(x, y);

function reset() {
    clearTimeout(timerId);
    document.getElementById("table").remove();
    createTable(x, y);
}

function getArray(){
    let arr = []
    for (i = 0; i < 25; i++){
      arr.push([]);
    }
    for(i = 0; i < 25; i++){
      for(j = 0; j < 25; j++){
        let str = "td" + " " + i + " " + j;
        let column = document.getElementById(str);
        if(column.style.backgroundColor === "black"){
          arr[i][j] = true;
        }
        else{
          arr[i][j] = false;
        }
      }
    }
    step(arr);
  }

function step(arr) {
    let arr1 = stepBoard(arr);
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
                var str = "td" + " " + i + " " + j;
                let cell = document.getElementById(str);
                if (arr1[i][j] === true) {
                    cell.style.backgroundColor = "black";
                }
                else {
                    cell.style.backgroundColor = "white";
                }
        }
    }

}

var timerId;
function startSimulation(){
    timerId = setInterval(function() {
    getArray();
    }, 100);
}

function stopSimulation(){
    clearTimeout(timerId);
}

function createRandomTable(a, b) {
    var container = document.getElementById("table-container");
    let table = document.createElement("table")
    table.classList.add("table");
    table.setAttribute("id", "table");
    for (let i = 0; i < a; i++) {
        let tr = document.createElement("tr");
        tr.classList.add("tr");
        for (let j = 0; j < b; j++) {
           let td = document.createElement("td");
           if (Math.random() < 0.5) {
            let str = "td" + " " + i + " " + j;
            td.classList.add("td-even");
            td.setAttribute("id", str);
            td.style.backgroundColor = "black";
           }
           else {
            let str = "td" + " " + i + " " + j;
            td.classList.add("td-odd");
            td.setAttribute("id", str);
            td.style.backgroundColor = "white";
           }
           tr.append(td);
        }
        table.appendChild(tr);
    }
    container.append(table);
}

function randomBoard() {
    clearTimeout(timerId);
    document.getElementById("table").remove();
    createRandomTable(x, y);
}