import React from 'react';
import axios from 'axios'


axios.get('https://restcountries.eu').then( (resopnse) =>{
  console.log(Response)
})

axios.get('https://restcountries.eu/#api-endpoints-all').then( (resopnse) =>{
  console.log(Response)
})


// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
