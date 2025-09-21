
FROM php:8.3-fpm

WORKDIR /var/www/html


RUN apt-get update && apt-get install -y \
    libpng-dev libonig-dev libxml2-dev zip unzip git curl \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd


COPY . .


RUN chmod -R 777 storage bootstrap/cache

CMD ["php-fpm"]
