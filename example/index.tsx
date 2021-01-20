import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Container } from '../dist';
import '../index.css';

const App = () => {
  return (
    <div>
      <Container>
        <div>Hello</div>
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
