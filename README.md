# Postocl
Проект на Laravel с фронтендом на React/Inertia и Vite для создания просмотра статей
## Требования
 Docker Desktop (Windows)
- Docker Compose
  
## Запуск проекта
1. **Собрать контейнеры:**
 docker-compose build
2. Запустить контейнеры:
docker-compose up -d
3. Проверить статус контейнеров:
docker-compose ps
## Настройка Laravel
1. Копируем .env.example в .env
cp .env.example .env
2. Сгенерировать ключ приложения:
docker-compose exec app php artisan key:generate
## Миграции и сиды базы данных
Применить миграции и сиды:<br>
docker-compose exec app php artisan migrate --seed
## Работа с фронтендом
 Dev режим:
 docker-compose exec node npm install<br>
 docker-compose exec node npm run dev
 Prod сборка фронтенда
 docker-compose exec node npm run build
## Права доступа
 На Windows для корректной работы Laravel и записи логов:<br>
 docker-compose exec app chmod -R 777 storage bootstrap/cache

   
