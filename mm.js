const burgerButton = document.getElementsByClassName('menu-button')
const menuOfBurger = document.getElementById('from_it')
const wrap = document.getElementById('wraper-menu-button')
wrap.onclick = function(){

	burgerButton[0].classList.toggle('act')
	menuOfBurger.classList.toggle('menu_show')
	if (menuOfBurger.classList.contains('menu_show')){
		slideDown(menuOfBurger)
	}
	else{
		slideUp(menuOfBurger)
	}
}	
















	var badPause = false
	var pause = false

			// Поле, на котором всё будет происходить, — тоже как бы переменная
			var Bcanvas = document.getElementById('downJs3');
			// Классическая змейка — двухмерная, сделаем такую же
			var Bcontext = Bcanvas.getContext('2d');
			// Размер одной клеточки на поле — 16 пикселей
			var Bgrid = 16;
			// Служебная переменная, которая отвечает за скорость змейки
			var Bcount = 0;
			// А вот и сама змейка
			var Bsnake = {
			// Начальные координаты
			x: 160,
			y: 160,
			// Скорость змейки — в каждом новом кадре змейка смещается по оси Х или У. На старте будет двигаться горизонтально, поэтому скорость по игреку равна нулю.
			dx: Bgrid,
			dy: 0,
			// Тащим за собой хвост, который пока пустой
			cells: [],
			// Стартовая длина змейки — 4 клеточки
			maxCells: 4
			};
			var BadSnake = {
				x: 160,
				y: 160,
				dx: Bgrid,
				dy: 0,
				// Тащим за собой хвост, который пока пустой
				cells: [],
				// Стартовая длина змейки — 4 клеточки
				maxCells: 4
			}
			// А это — еда. Представим, что это красные яблоки.
			var Bapple = {
			// Начальные координаты яблока
			x: 320,
			y: 320
			};
			// Делаем генератор случайных чисел в заданном диапазоне
			function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
			}
			// Игровой цикл — основной процесс, внутри которого будет всё происходить
			function loopBad() {
				if (badPause){
					return ;
				}
			// Хитрая функция, которая замедляет скорость игры с 60 кадров в секунду до 15 (60/15 = 4)
			requestAnimationFrame(loopBad);
			// Игровой код выполнится только один раз из четырёх, в этом и суть замедления кадров, а пока переменная count меньше четырёх, код выполняться не будет
			if (++Bcount < 4) {
				return;
			}
			// Обнуляем переменную скорости
			Bcount = 0;
			// Очищаем игровое поле
			Bcontext.clearRect(0, 0, Bcanvas.width, Bcanvas.height);
			// Двигаем змейку с нужной скоростью
			BadSnake.x += BadSnake.dx;
			BadSnake.y += BadSnake.dy;
			Bsnake.x += Bsnake.dx;
			Bsnake.y += Bsnake.dy;
			// Если змейка достигла края поля по горизонтали — продолжаем её движение с противоположной строны
			if (BadSnake.x < 0){
				BadSnake.x =  Bcanvas.width - Bgrid;
			}
			else if (BadSnake.x >= Bcanvas.width){
				BadSnake.x = 0
			}

			if (BadSnake.y < 0) {
				BadSnake.y = Bcanvas.height - Bgrid;
			}
			else if (BadSnake.y >= Bcanvas.height) {
				BadSnake.y = 0;
			}

			if (Bsnake.x < 0) {
				Bsnake.x = Bcanvas.width - Bgrid;
			}
			else if (Bsnake.x >= Bcanvas.width) {
				Bsnake.x = 0;
			}
			// Делаем то же самое для движения по вертикали
			if (Bsnake.y < 0) {
				Bsnake.y = Bcanvas.height - Bgrid;
			}
			else if (Bsnake.y >= Bcanvas.height) {
				Bsnake.y = 0;
			}
			// Продолжаем двигаться в выбранном направлении. Голова всегда впереди, поэтому добавляем её координаты в начало массива, который отвечает за всю змейку
			Bsnake.cells.unshift({ x: Bsnake.x, y: Bsnake.y });
			BadSnake.cells.unshift({ x : BadSnake.x, y:BadSnake.y })
			// Сразу после этого удаляем последний элемент из массива змейки, потому что она движется и постоянно освобождает клетки после себя
			if (Bsnake.cells.length > Bsnake.maxCells) {
				Bsnake.cells.pop();
			}
			if (BadSnake.cells.length > BadSnake.maxCells) {
				BadSnake.cells.pop();
			}
			// Рисуем еду — красное яблоко
			Bcontext.fillStyle = 'red';
			Bcontext.fillRect(Bapple.x, Bapple.y, Bgrid - 1, Bgrid - 1);
			// Одно движение змейки — один новый нарисованный квадратик 





			Bcontext.fillStyle = 'green';
			// Обрабатываем каждый элемент змейки
			Bsnake.cells.forEach(function (cell, index) {
				// Чтобы создать эффект клеточек, делаем зелёные квадратики меньше на один пиксель, чтобы вокруг них образовалась чёрная граница
				Bcontext.fillRect(cell.x, cell.y, Bgrid , Bgrid );
				// Если змейка добралась до яблока...
				if (cell.x === Bapple.x && cell.y === Bapple.y) {
				// увеличиваем длину змейки
				Bsnake.maxCells++;
				BadSnake.maxCells++;
				// Рисуем новое яблочко
				// Помним, что размер холста у нас 400x400, при этом он разбит на ячейки — 25 в каждую сторону
				Bapple.x = getRandomInt(0, 25) * Bgrid;
				Bapple.y = getRandomInt(0, 25) * Bgrid;
				}
				// Проверяем, не столкнулась ли змея сама с собой
				// Для этого перебираем весь массив и смотрим, есть ли у нас в массиве змейки две клетки с одинаковыми координатами 
				for (var i = index + 1; i < Bsnake.cells.length; i++) {
				// Если такие клетки есть — начинаем игру заново
				if ( (cell.x === Bsnake.cells[i].x && cell.y ===Bsnake.cells[i].y) ) {
					// Задаём стартовые параметры основным переменным
					Bsnake.x = 160;
					Bsnake.y = 160;
					Bsnake.cells = [];
					Bsnake.maxCells = 4;
					Bsnake.dx = Bgrid;
					Bsnake.dy = 0;
					// Ставим яблочко в случайное место
					Bapple.x = getRandomInt(0, 25) * Bgrid;
					Bapple.y = getRandomInt(0, 25) * Bgrid;
				}
				}

				for (var i = index + 1; i < BadSnake.cells.length; i++) {
					if ((  (cell.x === BadSnake.cells[i].x && cell.y === BadSnake.cells[i].y) ) ){
						Bsnake.x = 160;
						Bsnake.y = 160;
						Bsnake.cells = [];
						Bsnake.maxCells = 4;
						Bsnake.dx = Bgrid;
						Bsnake.dy = 0;
						// Ставим яблочко в случайное место
						Bapple.x = getRandomInt(0, 25) * Bgrid;
						Bapple.y = getRandomInt(0, 25) * Bgrid;
					}

				}
			});


			Bcontext.fillStyle = 'blue';



			BadSnake.cells.forEach(function (cell, index) {
				// Чтобы создать эффект клеточек, делаем зелёные квадратики меньше на один пиксель, чтобы вокруг них образовалась чёрная граница
				Bcontext.fillRect(cell.x, cell.y, Bgrid , Bgrid );
				// Если змейка добралась до яблока...
				if (cell.x === Bapple.x && cell.y === Bapple.y) {
				// увеличиваем длину змейки
				BadSnake.maxCells++;
				// Рисуем новое яблочко
				// Помним, что размер холста у нас 400x400, при этом он разбит на ячейки — 25 в каждую сторону
				Bapple.x = getRandomInt(0, 25) * Bgrid;
				Bapple.y = getRandomInt(0, 25) * Bgrid;
				}
				// Проверяем, не столкнулась ли змея сама с собой
				// Для этого перебираем весь массив и смотрим, есть ли у нас в массиве змейки две клетки с одинаковыми координатами 
				for (var i = index + 1; i < Bsnake.cells.length; i++) {
				// Если такие клетки есть — начинаем игру заново
				if (cell.x === Bsnake.cells[i].x && cell.y === Bsnake.cells[i].y)  {
					// Задаём стартовые параметры основным переменным
					BadSnake.x = 160;
					BadSnake.y = 160;
					BadSnake.cells = [];
					BadSnake.maxCells = 4;
					BadSnake.dx = Bgrid;
					BadDnake.dy = 0;
					// Ставим яблочко в случайное место
					Bapple.x = getRandomInt(0, 25) * Bgrid;
					Bapple.y = getRandomInt(0, 25) * Bgrid;
				}
				}
			});
			let direction = getRandomInt(0 , 10)
			if (direction === 0 && BadSnake.dx != -Bgrid && BadSnake.dy!= 0) {
				BadSnake.dx = -Bgrid;
				BadSnake.dy = 0;
			}
			if (direction === 1 && BadSnake.dy != -Bgrid && BadSnake.dx!= 0){
				BadSnake.dy = -Bgrid;
				BadSnake.dx = 0;
			}
			if (direction === 2 && BadSnake.dx != Bgrid && BadSnake.dy!= 0){
				BadSnake.dx = Bgrid;
				BadSnake.dy = 0;
			}
			if (direction === 3 && BadSnake.dy != Bgrid && BadSnake.dy!= 0){
				BadSnake.dy = Bgrid;
				BadSnake.dx = 0;
			}
			
			








			}
			// Смотрим, какие нажимаются клавиши, и реагируем на них нужным образом
			document.addEventListener('keydown', function (e) {
			// Дополнительно проверяем такой момент: если змейка движется, например, влево, то ещё одно нажатие влево или вправо ничего не поменяет — змейка продолжит двигаться в ту же сторону, что и раньше. Это сделано для того, чтобы не разворачивать весь массив со змейкой на лету и не усложнять код игры.
			// Стрелка влево
			// Если нажата стрелка влево, и при этом змейка никуда не движется по горизонтали…
			if (e.which === 37 && Bsnake.dx === 0) {
				// то даём ей движение по горизонтали, влево, а вертикальное — останавливаем
				// Та же самая логика будет и в остальных кнопках
				Bsnake.dx = -Bgrid;
				Bsnake.dy = 0;
			}
			// Стрелка вверх
			else if (e.which === 38 && Bsnake.dy === 0) {
				Bsnake.dy = -Bgrid;
				Bsnake.dx = 0;
			}
			// Стрелка вправо
			else if (e.which === 39 && Bsnake.dx === 0) {
				Bsnake.dx = Bgrid;
				Bsnake.dy = 0;
			}
			// Стрелка вниз
			else if (e.which === 40 && Bsnake.dy === 0) {
				Bsnake.dy = Bgrid;
				Bsnake.dx = 0;
			}
			});

			

		






			var canvas = document.getElementById('down_js');
			// Классическая змейка — двухмерная, сделаем такую же
			var context = canvas.getContext('2d');
			// Размер одной клеточки на поле — 16 пикселей
			var grid = 16;
			// Служебная переменная, которая отвечает за скорость змейки
			var count = 0;
			// А вот и сама змейка
			var snake = {
			// Начальные координаты
			x: 160,
			y: 160,
			// Скорость змейки — в каждом новом кадре змейка смещается по оси Х или У. На старте будет двигаться горизонтально, поэтому скорость по игреку равна нулю.
			dx: grid,
			dy: 0,
			// Тащим за собой хвост, который пока пустой
			cells: [],
			// Стартовая длина змейки — 4 клеточки
			maxCells: 4
			};
			var BadSnake = {
				x: 160,
				y: 160,
				dx: grid,
				dy: 0,
				// Тащим за собой хвост, который пока пустой
				cells: [],
				// Стартовая длина змейки — 4 клеточки
				maxCells: 4
			}
			// А это — еда. Представим, что это красные яблоки.
			var apple = {
			// Начальные координаты яблока
			x: 320,
			y: 320
			};
			// Делаем генератор случайных чисел в заданном диапазоне
			function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
			}










	function loop() {
		if (pause){
			return ;
		}
      // Хитрая функция, которая замедляет скорость игры с 60 кадров в секунду до 15 (60/15 = 4)
      requestAnimationFrame(loop);
      // Игровой код выполнится только один раз из четырёх, в этом и суть замедления кадров, а пока переменная count меньше четырёх, код выполняться не будет
      if (++count < 4) {
        return;
      }
      // Обнуляем переменную скорости
      count = 0;
      // Очищаем игровое поле
      context.clearRect(0, 0, canvas.width, canvas.height);
      // Двигаем змейку с нужной скоростью
	  BadSnake.x += BadSnake.dx;
	  BadSnake.y += BadSnake.dy;
      snake.x += snake.dx;
      snake.y += snake.dy;
      // Если змейка достигла края поля по горизонтали — продолжаем её движение с противоположной строны
	  if (BadSnake.x < 0){
		BadSnake.x =  canvas.width - grid;
	  }
	   else if (BadSnake.x >= canvas.width){
		BadSnake.x = 0
	   }

	   if (BadSnake.y < 0) {
        BadSnake.y = canvas.height - grid;
      }
      else if (BadSnake.y >= canvas.height) {
        BadSnake.y = 0;
      }

      if (snake.x < 0) {
        snake.x = canvas.width - grid;
      }
      else if (snake.x >= canvas.width) {
        snake.x = 0;
      }
      // Делаем то же самое для движения по вертикали
      if (snake.y < 0) {
        snake.y = canvas.height - grid;
      }
      else if (snake.y >= canvas.height) {
        snake.y = 0;
      }
      // Продолжаем двигаться в выбранном направлении. Голова всегда впереди, поэтому добавляем её координаты в начало массива, который отвечает за всю змейку
      snake.cells.unshift({ x: snake.x, y: snake.y });
	  BadSnake.cells.unshift({ x : BadSnake.x, y:BadSnake.y })
      // Сразу после этого удаляем последний элемент из массива змейки, потому что она движется и постоянно освобождает клетки после себя
      if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
      }
	  if (BadSnake.cells.length > BadSnake.maxCells) {
        BadSnake.cells.pop();
      }
      // Рисуем еду — красное яблоко
      context.fillStyle = 'red';
      context.fillRect(apple.x, apple.y, grid - 1, grid - 1);
      // Одно движение змейки — один новый нарисованный квадратик 





      context.fillStyle = 'green';
      // Обрабатываем каждый элемент змейки
      snake.cells.forEach(function (cell, index) {
        // Чтобы создать эффект клеточек, делаем зелёные квадратики меньше на один пиксель, чтобы вокруг них образовалась чёрная граница
        context.fillRect(cell.x, cell.y, grid , grid );
        // Если змейка добралась до яблока...
        if (cell.x === apple.x && cell.y === apple.y) {
          // увеличиваем длину змейки
          snake.maxCells++;
		  BadSnake.maxCells++;
          // Рисуем новое яблочко
          // Помним, что размер холста у нас 400x400, при этом он разбит на ячейки — 25 в каждую сторону
          apple.x = getRandomInt(0, 25) * grid;
          apple.y = getRandomInt(0, 25) * grid;
        }
        // Проверяем, не столкнулась ли змея сама с собой
        // Для этого перебираем весь массив и смотрим, есть ли у нас в массиве змейки две клетки с одинаковыми координатами 
        for (var i = index + 1; i < snake.cells.length; i++) {
          // Если такие клетки есть — начинаем игру заново
          if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
            // Задаём стартовые параметры основным переменным
            snake.x = 160;
            snake.y = 160;
            snake.cells = [];
            snake.maxCells = 4;
            snake.dx = grid;
            snake.dy = 0;
            // Ставим яблочко в случайное место
            apple.x = getRandomInt(0, 25) * grid;
            apple.y = getRandomInt(0, 25) * grid;
          }
        }
      });







    }
    // Смотрим, какие нажимаются клавиши, и реагируем на них нужным образом
    document.addEventListener('keydown', function (e) {
      // Дополнительно проверяем такой момент: если змейка движется, например, влево, то ещё одно нажатие влево или вправо ничего не поменяет — змейка продолжит двигаться в ту же сторону, что и раньше. Это сделано для того, чтобы не разворачивать весь массив со змейкой на лету и не усложнять код игры.
      // Стрелка влево
      // Если нажата стрелка влево, и при этом змейка никуда не движется по горизонтали…
      if (e.which === 37 && snake.dx === 0) {
        // то даём ей движение по горизонтали, влево, а вертикальное — останавливаем
        // Та же самая логика будет и в остальных кнопках
        snake.dx = -grid;
        snake.dy = 0;
      }
      // Стрелка вверх
      else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
      }
      // Стрелка вправо
      else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
      }
      // Стрелка вниз
      else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
      }
    });


































/* SLIDE UP */
let slideUp = (target, duration = 400) => {
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.boxSizing = 'border-box'
	target.style.height = target.offsetHeight + 'px'
	target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.style.border = 'none'

	window.setTimeout(() => {
		target.style.display = 'none'
		target.style.removeProperty('height')
		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-top')
		target.style.removeProperty('margin-bottom')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* SLIDE DOWN */
let slideDown = (target, duration = 400) => {
	target.style.removeProperty('display')
	let display = window.getComputedStyle(target).display
	if (display === 'none') display = 'grid'
	target.style.display = display
	let height = target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.offsetHeight
	target.style.boxSizing = 'border-box'
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.height = height + 'px'
	target.style.border = 'none'

	target.style.removeProperty('padding-top')
	target.style.removeProperty('padding-bottom')
	target.style.removeProperty('margin-top')
	target.style.removeProperty('margin-bottom')
	target.style.removeProperty('border')

	window.setTimeout(() => {
		target.style.removeProperty('height')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* TOOGLE */

const sec_one = document.getElementById("fourth_left_choice_one")
const sec_two = document.getElementById("fourth_left_choice_two")
const sec_three = document.getElementById("fourth_left_choice_three")


const btn_one = document.getElementById('section_1')
const btn_one_reverse = document.getElementById('section_1_reverse')
const btn_two = document.getElementById('section_2')
const btn_two_reverse = document.getElementById('section_2_reverse')
const btn_three = document.getElementById('section_3')
const btn_three_reverse = document.getElementById('section_3_reverse')
const in_one = document.getElementById('inner_one')
const in_two = document.getElementById('inner_two')
const in_three = document.getElementById('inner_three')

let sec_one_active = false
let sec_two_active = false
let sec_three_active = false
// http://www.w3.org/2000/svg

const main = function(){
    sec_one.onclick = function(){
		 in_one.style.maxWidth = String(document.getElementsByClassName('fourth_left')[0].offsetWidth) + 'px'

        if (!sec_one_active){
            slideDown(in_one)      
            sec_one_active = true
        }
        else{
            slideUp(in_one)      
            sec_one_active = false
        }

        in_one.classList.toggle('show') 
        btn_one.classList.toggle('rot')

        // btn_one_reverse.classList.toggle('hiden')
    }
    sec_two.onclick = function(){
		in_two.style.maxWidth = String(document.getElementsByClassName('fourth_left')[0].offsetWidth) + 'px'
        if (!sec_two_active){
            slideDown(in_two)      
            sec_two_active = true
        }
        else{
            slideUp(in_two)      
            sec_two_active = false
        }
        in_two.classList.toggle('show') 
        btn_two.classList.toggle('rot')
    }
    sec_three.onclick = function(){
		in_three.style.maxWidth = String(document.getElementsByClassName('fourth_left')[0].offsetWidth) + 'px'
        if (!sec_three_active){
            slideDown(in_three)      
            sec_three_active = true
        }
        else{
            slideUp(in_three)      
            sec_three_active = false
        }
        in_three.classList.toggle('show') 
        btn_three.classList.toggle('rot')
    }

}
main()


const objects = document.getElementsByClassName('six_circle_right')
// for (el of objects){
// console.log(el.offsetHeight)
// 	el.style.top = String(-el.offsetHeight / 4 ) + 'px'
//  }


for (el of objects){
	el.style.top = String( -(el.offsetHeight / 2 - 75/2)) + 'px'
}


const right_elements = document.getElementsByClassName('six_circle_right')
const clickers = document.getElementsByClassName('for_click')
const eps = document.getElementsByClassName('ep')
const circles = document.getElementsByClassName('six_circle')
const nine = document.getElementById('nine')
const easy = document.getElementById('easy')
const hardSectionContainer = document.getElementById('hard_section_container_top')
const eightOne = document.getElementById('eight_one')
const uper = document.getElementById('uper')

if (document.documentElement.clientWidth <= 1247){
	nine.style.width = String(document.documentElement.clientWidth - 50) + 'px'
	easy.style.width = String(document.documentElement.clientWidth - 50) + 'px'
	hardSectionContainer.style.width = String(document.documentElement.clientWidth - 50) + 'px'
	eightOne.style.width = String(document.documentElement.clientWidth - 50) + 'px'
	eightOne.style.height = String(document.documentElement.clientWidth * (741/1054.919)) + 'px'
	uper.style.width = String(document.documentElement.clientWidth ) + 'px'
}
else{
	eightOne.style.height = '741px'
	eightOne.style.width = '1054.919px'
}




const helper = [ [], ['61%' , '21%'], ['2%', '25%'], ['83%', '46%'], ['46%' , '69.1%'], ['13%', '74%'], ['76%', '88%']   ]
const mainCircle = document.getElementById('six')

if ( (document.documentElement.clientWidth >= 0 ) && (document.documentElement.clientWidth<= 1247) ){
	mainCircle.style.width = String(document.documentElement.clientWidth) + 'px'
	mainCircle.style.height = String(document.documentElement.clientWidth) + 'px'
}

window.addEventListener('resize', function(event) {
	if (document.documentElement.clientWidth >= 801 ){
		menuOfBurger.style.display = 'flex'
	}
	else {
		if  (!menuOfBurger.classList.contains('menu_show')){
			menuOfBurger.style.display = 'none'

		}
	}
	if (document.documentElement.clientWidth >= 0 ){
		if (document.documentElement.clientWidth <= 1247){
			mainCircle.style.width = String(document.documentElement.clientWidth) + 'px'
			mainCircle.style.height = String(document.documentElement.clientWidth) + 'px'
		}	
		 for (circle of circles){
	 		if (circle.classList.contains('Ell')){
		 		if (circle.getBoundingClientRect().left + 75 + 91 + 297  >= window.innerWidth){
		 			// helper[circle.dataset.index][0] = circle.style.left
		 			// helpe	r[circle.dataset.index][1] = circle.style.top
		 			circle.style.left = String( Number(window.getComputedStyle(circle,null).getPropertyValue('left').slice(0,-2)) -  ((circle.getBoundingClientRect().left + 75 + 91 + 297) - window.innerWidth  )   ) + 'px'
		 		}
				else{
					// this.alert( Number(helper[circle.dataset.index][0].slice(0,-1)) /100 * mainCircle.offsetWidth)
					// this.alert(mainCircle.offsetWidth)
					if ( (Number(helper[circle.dataset.index][0].slice(0,-1))/100 * mainCircle.offsetWidth) + 75 + 91 + 297  >= window.innerWidth){
						let t = Number(window.getComputedStyle(circle,null).getPropertyValue('left').slice(0,-2)) -  ((circle.getBoundingClientRect().left + 75 + 91 + 297) - window.innerWidth  )
						while (t + 75 + 91 + 297 <= mainCircle.offsetWidth ){
								t += 1
						}
						circle.style.left = String(t) + 'px'
						// let p = (Number(helper[circle.dataset.index][0].slice(0,-1)) /100 * mainCircle.offsetWidth)
						// let pTwo =  String(mainCircle.offsetWidth - 75 - 91 - 297 - 100) + 'px'
						// circle.style.left =  pTwo
					}
					else{
						circle.style.left = helper[circle.dataset.index][0]
					}
				}
		 	}
		 }
	}
	if (document.documentElement.clientWidth <= 1247){
		nine.style.width = String(document.documentElement.clientWidth - 50) + 'px'
		easy.style.width = String(document.documentElement.clientWidth - 50) + 'px'
		hardSectionContainer.style.width = String(document.documentElement.clientWidth - 50) + 'px'
		eightOne.style.width = String(document.documentElement.clientWidth - 50) + 'px'
		eightOne.style.height = String(document.documentElement.clientWidth * (741/1054.919)) + 'px'
		uper.style.width = String(document.documentElement.clientWidth ) + 'px'
	}
	else{
		nine.style.width = '1200px'
		easy.style.width = '1200px'
		hardSectionContainer.style.width = '1200px'
		uper.style.width = '1200px'
		eightOne.style.width = '1054.919px'
		eightOne.style.height = '741px'

	}

}, true);




const main2 = function(){
	
	eps[1].style.opacity = '1'
	const torrow = function(el){
		el.onclick = function(){
			let ind = el.dataset.index
			// helper[ind][0] = el.style.left
			// helper[ind][1] = el.style.top
			if (el.getBoundingClientRect().left + 75 + 91 + 297  >= window.innerWidth){
				for (t of circles){
					if (t.dataset.index === ind){
						t.style.left = String( Number(window.getComputedStyle(t,null).getPropertyValue('left').slice(0,-2))   -  ((el.getBoundingClientRect().left + 75 + 91 + 297) - window.innerWidth  )   ) + 'px'
						
					}
				}
			} 
			for (el_2 of right_elements){
				if (el_2.dataset.index === ind){
					if (!el_2.classList.contains('active')){
						for (el_3 of right_elements){
							if (el_3.classList.contains('active')){
								el_3.classList.remove('active')
							}

						}
						 for (circle of circles){
						 	if (circle.classList.contains('Ell')){
						 		circle.classList.remove('Ell')
								 circle.style.left = helper[circle.dataset.index][0]
								 circle.style.top = helper[circle.dataset.index][1]
						 	}
							// circle.style.left = helper[circle.dataset.index][0]
							// circle.style.left = helper[circle.dataset.index][1]
							// alert(helper[circle.dataset.index][0])
						 }
						 for (circle of circles){
						 	if (circle.dataset.index === ind){
						 		circle.classList.toggle('Ell')
						 	}
						 }
						 for (ep of eps){
							if (ep.style.opacity === '1'){
								ep.style.opacity = '0'
							}
						 }
						 for (ep of eps){
							if (ep.dataset.index === ind){
								ep.style.opacity = '1'
							}
						 }

						el_2.classList.toggle('active')
					}
				}
			}

		}
	}
	torrow(clickers[0])
	torrow(clickers[1])
	torrow(clickers[2])
	torrow(clickers[3])
	torrow(clickers[4])
	torrow(clickers[5])
}
main2()

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
  
const pOne = document.getElementsByClassName('eight_img')
const opac = (object) => {

	if (object.style.transform === 'scale(1.3)'){
		object.style.transform = 'scale(1)'
	}
	else{
		object.style.transform = 'scale(1.3)'
	}
}

for (p of pOne){
	setInterval(opac , getRandomInt(1000 , 2000) , p)
}

new Swiper('.main_swiper', {
	pagination:{
		el : '.swiper-pagination',
		clickable : true
	}
})


const Sec1 = document.getElementById('sec1')
const Sec2 = document.getElementById('sec2')
const Sec3 = document.getElementById('sec3')
const down_1 = document.getElementById('down_js')
const down_2 = document.getElementById('downJs2')
const down_3 = document.getElementById('downJs3')
const window_scroll_top = window.pageYOffset;
if (window_scroll_top > 100) {
    setScrollBy()
    window.scrollBy({ top: 300, behavior: "smooth" })
}
function setScrollBy(){
    window.scrollBy({ top: 300, behavior: "smooth" });
}

let idd = undefined
const start = function(){
	pause = false
}
Sec1.onclick = function(){
	// setTimeout( start, 3000)
	if (pause === true){
		pause = false
		setTimeout(requestAnimationFrame, 1000, loop)
	}
	else{
		setTimeout(requestAnimationFrame, 1000, loop)
	}
    down_1.classList.toggle('sec_down')
    down_2.classList.remove('sec_down')
    down_3.classList.remove('sec_down')
}
Sec2.onclick = function(){
	// cancelAnimationFrame(idd)
	// cancelAnimationFrame(idd);
	// alert()
	pause=true
	badPause = true;
    down_1.classList.remove('sec_down')
    down_2.classList.toggle('sec_down')
    down_3.classList.remove('sec_down')
}
Sec3.onclick = function(){
	if (badPause === true){
		badPause = false
		setTimeout(requestAnimationFrame, 1000, loopBad)
	}
	else{
		setTimeout(requestAnimationFrame, 1000, loopBad)
	}
    down_1.classList.remove('sec_down')
    down_2.classList.remove('sec_down')
    down_3.classList.toggle('sec_down')
}


new Swiper('.image-slider', {
    navigation : {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev'
    },
    srcollbar:{
        el:".swiper-scrollbar",
        draggable : true
    },
    keyboard:{
        enabled: true,
        onlyInViewport : true,
        pageUpDown : true
    },
    mousewheel:{
        sensitivity : true
    }, 
    autoheight : true,
    loop : true,
    loopedSlides : 3,
    autoplay:{
        delay : 2000,
        disableOnInteraction : false
    },
    speed : 1400,
    effect : 'slide'

})




document.onkeydown = function(evt) {
		evt = evt || window.event;
		var keyCode = evt.keyCode;
		if (keyCode >= 37 && keyCode <= 40) {
			return false;
		}
	};