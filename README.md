# Тестовое задание, DocDoc

## Задание вкратце
Сделать адаптивную форму из двух шагов с валидацией и сборкой.

## Что сделал
Для создания проекта использовал [Create React App](https://github.com/facebook/create-react-app). Для тестового задания достаточно было базовой конфигурации, в связи с этим не делал eject.

Приложение, использующее react и redux-подход, но вместо библиотеки для редакса используется только useReducer хук.

Для обработки форм и валидации применил Formik и Yup схему.

Для вёрстки использовал sass(scss) и css-модули. Верстка без медиа-выражений, в данном случае адаптивность достигается благодаря флексам.

### Отклонения от оригинального задания
1. 2 имплементации запроса результата:
  - с использованием test.php, закоментирована, т.к. долгое время не занимался конфигурированием php. Не уложился в тестовое задание.
  - с использованием статических json-файлов
2. Валидация даты доставки:
  - сейчас использую инпут с типом date вместо текстового инпута с форматом. Это позволяет добавить удобную валидацию даты, у меня нельзя выбрать дату раньше сегодня.

## Что можно доработать
- Валидация страны сейчас сделана через длину строк, корректнее было бы проверять по списку возможных значений
- У меня указаны кастомные переведенные сообщения не для всех полей, в рамках тестового задания на втором шаге используются сообщения по-умолчанию, для рабочей системы их стоит добавить.
- Вынести константы и справочники (названия экшнов, список стран)
- Создать функции для генерации экшнов
- Добавить компоненты для элементов формы, чтобы уменьшить количество бойлерплейт кода. В свойствах компонента указывать тип инпута, строку имени поля, и прочие данные, нужные для кастомизации. Должен пробрасывать
- Доработать верстку: Возможно, переделать на грид с фолбаком на флекс, чтобы компоненты в современных браузерах не занимали всю ширину, когда им не нужно.
- Меню получилось переусложнено для ситуации, достаточно было в данном случае просто написать кнопки в jsx.


# Документация по скриптам из сгенерированного readme

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
