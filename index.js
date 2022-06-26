// code your solution here
function superbowlWin(object) {
    for (const user of object) {
      if (user['result'] === "W") {
        return (user['year']);
      }
    }
  }
