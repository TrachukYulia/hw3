Task:

Докеризувати node.js app, написавши власний Dockerfile. Запустити контейнер з обмеженнями по cpu та memory.
Node.js app має бути доступним на 80 порті. Створити аккаунт на Docker Hub. 
Запушити в свій публічний репозиторій готовий image. Завантажити код програми та Dockerfile на Github. 
В README.md описати всі консольні команди

Посилання на image: https://hub.docker.com/repository/docker/fromgreensky/node-app

Спочатку збілдимо наш докерфайл. В моєму випадку назва образу ```node-app:v1```. Розмір образу 136мб. 

```docker build -t node-app:v1 .```

<img width="400" alt="image" src="https://github.com/TrachukYulia/hw3/blob/master/Screenshots/dockerbuild.png?raw=true">

Далі створимо контейнер ```node-container``` із обмеженням на cpu i memory і запустимо його. 

``` docker run -p 80:80 -d --name app-container --cpu-period=30000 --cpu-quota=15000 --memory=300m --rm node-app:v1 ```

<img width="700" alt="image" src="https://github.com/TrachukYulia/hw3/blob/master/Screenshots/dockerrun.png?raw=true">

Виконаємо команду ``` docker stats``` 

<img width="500" alt="image" src="https://github.com/TrachukYulia/hw3/blob/master/Screenshots/dockerstats.png?raw=true">

Можемо також перевірити логи для нашого контейнеру ``` docker logs app-container``` 

<img width="300" alt="image" src="https://github.com/TrachukYulia/hw3/blob/master/Screenshots/dockerlogs.png?raw=true">

Виконаємо команду ``` curl http://localhost:80``` 

<img width="500" alt="image" src="https://github.com/TrachukYulia/hw3/blob/master/Screenshots/curl.png?raw=true">

Запушимо образ на DockerHub. Спочатку авторизуємось ```docker login``` і запушимо  ```docker push fromgreensky/node-app:v1```

<img width="500" alt="image" src="https://github.com/TrachukYulia/hw3/blob/master/Screenshots/dockerhub.png?raw=true">


