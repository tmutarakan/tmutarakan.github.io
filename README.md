# smart_arenda

## Настройка хостинга
Чтобы узнать доступные версии Python, выполните команду:
```sh
ls -la /opt/python/*/bin/python
```
Для создания виртуального окружения выполните команду:
```sh
/opt/python/python-3.7.0/bin/python -m venv flaskenv
```
где python-3.7.0 — ваша версия Python,

а flaskenv — название вашего виртуального окружения.

Активируйте ваше виртуальное окружение с помощью команды:
```sh
source flaskenv/bin/activate
```

Внимание! Главный экземпляр класса Flask обязательно должен быть назван application.

Создайте еще один файл с названием passenger_wsgi.py и с содержимым:

```python
import sys

import os

INTERP = os.path.expanduser("/var/www/u0000005/data/flaskenv/bin/python")
if sys.executable != INTERP:
   os.execl(INTERP, INTERP, *sys.argv)

sys.path.append(os.getcwd())

from hello import application
```

В строке: os.path.expanduser(«/var/www/u0000005/data/flaskenv/bin/python») измените следующие значения:

    u0000005 — логин вашей услуги хостинга
    flaskenv — название вашего виртуального окружения, которое вы создали в пункте 6.

А в строке from hello import application значение hello должно соответствовать названию файла без расширения из пункта 9.

Сохраните изменения в файле.

## Как перезапустить проект на Flask

Если вы изменили файлы проекта и хотите увидеть изменения, вам необходимо перезапустить проект. Для этого создайте файл .restart-app в корневой директории вашего сайта. После перезапуска проекта файл будет удалён автоматически.