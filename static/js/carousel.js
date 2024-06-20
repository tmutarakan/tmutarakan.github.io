const nearby1 = document.querySelector('.nearby-1');
const nearby2 = document.querySelector('.nearby-2');
const nearby3 = document.querySelector('.nearby-3');
const nearby4 = document.querySelector('.nearby-4');
const nearby5 = document.querySelector('.nearby-5');


let xDown = null, yDown = null;

const setting = {
    "main": ".js-carousel",
    "wrap": ".js-carousel__wrap",
    "prev": ".js-carousel__prev",
    "next": ".js-carousel__next"
}

let privates = {};

privates.setting = setting;

privates.sel = {
    "main": document.querySelector(privates.setting.main),
    "wrap": document.querySelector(privates.setting.wrap),
    "children": document.querySelector(privates.setting.wrap).children,
    "prev": document.querySelector(privates.setting.prev),
    "next": document.querySelector(privates.setting.next)
};

privates.opt = {
    "position": 0,
    "max_position": document.querySelector(privates.setting.wrap).children.length
};


// Фиксируем изначальные координаты прикосновения
function handleTouchStart(evt) {
    const { clientX, clientY } = evt.touches[0];
    xDown = clientX; 
    yDown = clientY;
}

// Отслеживаем движение пальца и определяем направление свайпа
function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return; // Если изначальные координаты не зафиксированы, прекращаем выполнение
    }

    this.prev_slide = () => {
        --privates.opt.position;
    
        if(privates.opt.position < 0) {
            privates.sel.wrap.classList.add('s-notransition');
            privates.opt.position = privates.opt.max_position - 1;
        }
    
        privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
    };
   
    // Next slide
    this.next_slide = () => {
        ++privates.opt.position;
    
        if(privates.opt.position >= privates.opt.max_position) {
            privates.opt.position = 0;
        }
    
        privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
    };

    const { clientX, clientY } = evt.touches[0];

    const xDiff = xDown - clientX;
    const yDiff = yDown - clientY;

    // Вычисляем, был ли свайп выполнен по горизонтали или вертикали
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            this.next_slide();
        } else {
            this.prev_slide();
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


/*	function Carousel(setting) {
		if(document.querySelector(setting.wrap) === null) {
			console.error(`Carousel not fount selector ${setting.wrap}`);
			return;
		}

		// Scope privates methods and properties 
		let privates = {};


		// Public methods 
		// Prev slide
		this.prev_slide = () => {
			--privates.opt.position;

			if(privates.opt.position < 0) {
				privates.sel.wrap.classList.add('s-notransition');
				privates.opt.position = privates.opt.max_position - 1;
			}

			privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
		};


		// Next slide
		this.next_slide = () => {
			++privates.opt.position;

			if(privates.opt.position >= privates.opt.max_position) {
				privates.opt.position = 0;
			}

			privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
		};



		// Privates properties
		privates.setting = setting;

		privates.sel = {
			"main": document.querySelector(privates.setting.main),
			"wrap": document.querySelector(privates.setting.wrap),
			"children": document.querySelector(privates.setting.wrap).children,
			"prev": document.querySelector(privates.setting.prev),
			"next": document.querySelector(privates.setting.next)
		};

		privates.opt = {
			"position": 0,
			"max_position": document.querySelector(privates.setting.wrap).children.length
		};

		
        // Control
		if(privates.sel.prev !== null) {
			privates.sel.prev.addEventListener('click', () => {
				this.prev_slide();
			});
		}

		if(privates.sel.next !== null) {
			privates.sel.next.addEventListener('click', () => {
				this.next_slide();
			});
		}

	}


	let a = new Carousel({
		"main": ".js-carousel",
		"wrap": ".js-carousel__wrap",
		"prev": ".js-carousel__prev",
		"next": ".js-carousel__next"
	});

})();*/
