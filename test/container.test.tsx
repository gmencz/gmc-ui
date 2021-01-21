import React from 'react';
import * as ReactDOM from 'react-dom';
import { Columns } from '../stories/Container.stories';

describe('Container', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Columns />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
