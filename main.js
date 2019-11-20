const roomsMap = {
  '315-Einstein': {
    x: 72,
    y: 215
  },
  '308-Heisenberg': {
    x: 682,
    y: 70
  }
}


function locateRoom() {
  let urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log(`--> Locating the room ${room}`);
  const roomKey = roomsMap[Object.keys(roomsMap).find(key => key.includes(room))];
  console.log(`--> Room config: `, roomKey);
  const roomEl = document.getElementsByClassName('room').item(0);
  console.log(`--> roomEl: `, roomEl);
  roomEl.classList.remove('hide');
  roomEl.style.left = roomKey.x + 'px';
  roomEl.style.top = roomKey.y + 'px';
}