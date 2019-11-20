const roomsMap = {
  '315-einstein': {
    x: 72,
    y: 215
  },
  '308-heisenberg': {
    x: 682,
    y: 70
  },
  '338-bohr': {
    x: 573,
    y: 82
  }
};

function locateRoom() {
  const room = document.getElementById('search').value;
  console.log(`--> Locating the room ${room}`);
  const roomObj = roomsMap[Object.keys(roomsMap).find(key => key.includes(room.toLowerCase()))];
  if (roomObj) {
    const roomEl = document.getElementsByClassName('room').item(0);
    roomEl.classList.remove('hide');
    roomEl.style.left = roomObj.x + 'px';
    roomEl.style.top = roomObj.y + 'px';
  }
}

function locateYourself() {
  const urlParams = new URLSearchParams(window.location.search);
  const x = urlParams.get('x'), y = urlParams.get('y');
  console.log(`--> You're here: [${x}, ${y}]`);
  if (x && y) {
    const youAreHereEl = document.getElementsByClassName('you-are-here').item(0);
    youAreHereEl.classList.remove('hide');
    youAreHereEl.style.left = x + 'px';
    youAreHereEl.style.top = y + 'px';
  }
}