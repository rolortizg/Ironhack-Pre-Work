console.log("Welcome to the Mars Rover. To move use the first letter of: '(f)orward', '(b)ackward', '(l)eft', or '(r)ight' in the 'commands()' function. Remember it is a 10 x 10 grid!");
// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// ======================
function turnLeft(){
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
  console.log("turnLeft was called! " + "Your current direction is... " + rover.direction);
}



function turnRight(){
  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
  console.log("turnRight was called! " + "Your current direction is... " + rover.direction);
}

function moveForward(){
  console.log("moveForward was called! " + "Your coordinates are " + rover.x + ", " + rover.y);
  
  if (rover.direction ==="N" && rover.y > 0) {
    rover.y += -1;
  }
  else if (rover.direction ==="W" && rover.x > 0) {
    rover.x += -1;
  }
  else if (rover.direction === "S" && rover.y < 10) {
    rover.y += 1;
  }
  else if (rover.direction === "E" && rover.x < 10) {
    rover.x += 1;
  }
  else {
    console.log("You're off the grid!")
  }
  
  
  rover.travelLog.push("(" + rover.x + " , " + rover.y + ")");
}


function moveBackward() {

  if (rover.direction ==="N") {
    rover.y += 1;
  }
  if (rover.direction ==="W") {
    rover.x += 1;
  }
  if (rover.direction === "S") {
    rover.y += -1;
  }
  if (rover.direction === "E") {
    rover.x += -1;
  }
  console.log("moveBackward was called! " + "Your coordinates are " + rover.x + ", " + rover.y);

  rover.travelLog.push("(" + rover.x + " , " + rover.y + ")");
}

//This is the commands part//
function commands(str) {
  for (i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "l":
        turnLeft();
        break;
      case "r":
        turnRight();
        break;
      case "f":
        moveForward();
        break;
      case "b":
        moveBackward();
        break;
    }
  } console.log("You are facing " + rover.direction + ". You used the following coordinates: " + rover.travelLog);
}
