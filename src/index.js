import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



ReactDOM.render(
  /*react applicaion은 한 번에 하나의 component만 redering할 수 
  있다. */
  <App />,
 /*<App />와 같은 것을 component라 부른다. react는 component와 
  함께 동작한다. 모든 것은 component이다. 
  component가 data를 보여주게 할 것이다.
  <App />부분이 component를 사용하고자 할 때, component의 형태이다.
  javascript와 HTML 사이의 이러한 조합을 jsx라고 부른다.
  
  jsx는 javascript안의 HTML이다. Component를 만들고 어떻게 사용하는지에 
  대한 것이다.*/
  document.getElementById('potato') 
);

