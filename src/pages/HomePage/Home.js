import React, { Component } from 'react';
import Parser from '../../utils/parser';

const data = {
  items: [
    {
      id: 1,
      type: 'text',
      attrs: {
        defaultValue: '',
        placeholder: 'placeholder'
      }
    },
    {
      id: 2,
      type: 'text',
      attrs: {
        defaultValue: 'This is next input',
        placeholder: ''
      }
    },
    {
      id: 3,
      type: 'radio',

      elements: [
        {
          label: 'radio 1',
          value: 'radio 1'
        },
        {
          label: 'radio 2',
          value: 'radio 2'
        }
      ]
    },
    {
      id: 4,
      type: 'textarea',
      attrs: {
        defaultValue: 'This is your text',
        placeholder: 'Some placeHolder'
      }
    }
  ]
};

class Home extends Component {
  render() {
    return (
      <div>
        <div>This is home page</div>
        {Parser.parseDataToElements(data)}
      </div>
    );
  }
}

export default Home;
