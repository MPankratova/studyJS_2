let mover = {
/**Функция проверяет может ли игрок делать ход
 * @param {{x:int, y:int}} nextPoint Точка которую занимает игрок
 * @returns {boolean} возвращает true, если игрок не на границе поля
 */
    canMakeMove(nextPoint) {
        return nextPoint.x >= 0 &&
        nextPoint.x < config.colsCount &&
        nextPoint.y >= 0 &&
        nextPoint.y < config.rowsCount;
    },


    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = [2, 4, 6, 8, 1, 7, 9, 3];

        while (true) {
            // Получаем от пользователя направление.
            let direction = parseInt(prompt('Введите число 2, 4, 6, 8, 1, 7, 9 или 3, куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 2, 4, 6, 8, 1, 7, 9 или 3.');
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        // Следующая точка игрока, в самом начале в точке будут текущие координаты игрока.
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        // Определяем направление и обновляем местоположение игрока в зависимости от направления.
        switch (direction) {
            case 2:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 1:
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;

        }

        return nextPosition;
    },
};