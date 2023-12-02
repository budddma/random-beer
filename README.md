#### "Random Beer" - сервис по поиску собеседника со следующим функционалом:
- Авторизация пользователей, заполенение и редактирование анкеты о себе про свои персональные цели сферу деятельности, интересы, свободное время и предпочтительное место встреч, предпочтения по собеседникам;
- Мэтчинг случайных пользователей на основе их предпочтений, создание пары для встречи за кружкой пенного и сохранение истории мэтчингов, чтобы не повторяться;

[Ссылка на проект в figma.](https://www.figma.com/file/jtcbK2gXc1bOaRGcknkFw9/Random-Beer?type=design&t=wyYirgTXEd8P8aLl-6)

#### Скриншоты
<img src="screenshots/WelcomePage.png" width="500" hspace="20" vspace="20" alt="WelcomePage">
<img src="screenshots/LoginPage.png" width="500" hspace="20" vspace="20" alt="LoginPage">
<img src="screenshots/MeetingsPage.png" width="500" hspace="20" vspace="20" alt="MeetingsPage">
<img src="screenshots/ProfilePage.png" width="500" hspace="20" vspace="20" alt="ProfilePage">

#### Инструкция по запуску фронтенда
1. `cd frontend`
2. `npm install`
3. `json-server --watch ../db.json --port 3001`
4. `npm start`

#### Инструкция по запуску бэкенда
1. `cd backend`
2. `python -m venv env`
3. `source env/bin/activate`
4. `pip install django`
5. `./manage.py runserver`