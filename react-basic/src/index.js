import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // app.js 파일을 받아서 App 이름으로 import
import reportWebVitals from './reportWebVitals';


//컴포넌트에서 사용하는 전역설정
//App JS 를 id가 root 인 태그에 넣어주고 있음
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
