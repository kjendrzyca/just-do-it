import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './App';
import {withMaterialTheme} from './utils'

const App = withMaterialTheme(AppComponent)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
