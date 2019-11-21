const roomsMap = {
  '301-Pasteur': {
    x: 307,
    y: 378
  },
  '305-Feynman': {
    x: 715,
    y: 299
  },
  '306-Aristotle': {
    x: 721,
    y: 260
  },
  '307-Newton': {
    x: 721,
    y: 215
  },
  '308-Heisenberg': {
    x: 682,
    y: 70
  },
  '309-Ada': {
    x: 720,
    y: 75
  },
  '313-Archimedes': {
    x: 315,
    y: 530
  },
  '314-da Vinci': {
    x: 306,
    y: 471
  },
  '315-Einstein': {
    x: 72,
    y: 215
  },
  '335-Darwin': {
    x: 72,
    y: 155
  },
  '312-Curie': {
    x: 217,
    y: 95
  },
  '311-Galileo': {
    x: 274,
    y: 75
  },
  '338-Bohr': {
    x: 573,
    y: 82
  },
  '340-Hawking': {
    x: 918,
    y: 150
  },
  '341-Gauss': {
    x: 928,
    y: 208
  }
};

function locateRoom() {
  const room = document.getElementById('search').value;
  console.log(`--> Locating the room ${room}`);
  const roomObj = roomsMap[Object.keys(roomsMap).find(key => key.toLowerCase().includes(room.toLowerCase()))];
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