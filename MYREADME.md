## Table of Contents
- [Simple Hello World](#simple-hello-world)
    - [Init React Application](#init-react-application)
    - [Hello World App](#hello-world-app)
## Simple Hello World

### Init React Application

Install create-react-app in global:

* `npm install -g create-react-app`

Create new project:

* `create-react-app my-react-tutorial-mern`

Start project:
 
* `cd my-react-tutorial-mern`
* `npm start || grunt start`

### Hello World App


AppHello.css: prepare css template for AppHello

AppHello.js: write new AppHello.js for define React Components

* using new CSS `import './AppHello.css';`
* define `AppHello` class with `class AppHello extends Component {}`
* write code as sample or by yourself

index.html: html template file 

* Keep `<div id="root"></div>`

index.js: `grunt start` will start following `index.js` so edit file following

* Import `import AppHello from './AppHello'`
* Render `ReactDOM.render(<AppHello />, document.getElementById('root'));`







## :
## :