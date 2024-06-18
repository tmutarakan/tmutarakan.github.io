const nearby1 = document.querySelector('.nearby-1');
const nearby2 = document.querySelector('.nearby-2');
const nearby3 = document.querySelector('.nearby-3');
const nearby4 = document.querySelector('.nearby-4');
const nearby5 = document.querySelector('.nearby-5');

let xDown = null, yDown = null;

// Фиксируем изначальные координаты прикосновения
function handleTouchStart(evt) {
    const { clientX, clientY } = evt.touches[0];
    xDown = clientX; yDown = clientY;
}

// Отслеживаем движение пальца и определяем направление свайпа
function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return; // Если изначальные координаты не зафиксированы, прекращаем выполнение
    }

    const { clientX, clientY } = evt.touches[0];

    const xDiff = xDown - clientX;
    const yDiff = yDown - clientY;

    // Вычисляем, был ли свайп выполнен по горизонтали или вертикали
    if (Math.abs(xDiff) > Math.abs(yDiff) && xDiff > 0) {
        this.style.display = 'none';
        switch(this.className) {
            case 'nearby-1':  // if (x === 'value1')
                nearby2.style.display = 'block';
                break;
            case 'nearby-2':  // if (x === 'value1')
                nearby3.style.display = 'block';
                break;
            case 'nearby-3':  // if (x === 'value1')
                nearby4.style.display = 'block';
                break;
            case 'nearby-4':  // if (x === 'value1')
                nearby5.style.display = 'block';
                break;
            case 'nearby-5':  // if (x === 'value1')
                nearby1.style.display = 'block';
                break;
        }
    }

    // Обнуляем координаты после распознавания свайпа
    xDown = yDown = null;
}


nearby1.addEventListener("touchstart", handleTouchStart, false);
nearby1.addEventListener("touchmove", handleTouchMove, false);

nearby2.addEventListener("touchstart", handleTouchStart, false);
nearby2.addEventListener("touchmove", handleTouchMove, false);

nearby3.addEventListener("touchstart", handleTouchStart, false);
nearby3.addEventListener("touchmove", handleTouchMove, false);

nearby4.addEventListener("touchstart", handleTouchStart, false);
nearby4.addEventListener("touchmove", handleTouchMove, false);

nearby5.addEventListener("touchstart", handleTouchStart, false);
nearby5.addEventListener("touchmove", handleTouchMove, false);
