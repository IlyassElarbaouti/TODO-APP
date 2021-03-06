import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import TodoList from './tasks/components/TodoList.jsx';

const App = () => (
    <Provider store={store}>
      <TodoList className='container'/>
    </Provider>
  );

export default App;
