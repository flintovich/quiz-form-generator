import React from 'react';
import TextField from 'material-ui/TextField';

class Parser {

  parseDataToElements(data) {
    if(data && data.items) {
      return data.items.map((item) => {
        if(item.type === 'text') return this.parseToTextInput(item);
        if(item.type === 'radio') return this.parseToRadios(item);
        if(item.type === 'textarea') return this.parseToTextArea(item);
      })
    }
  }

  parseToTextInput(item) {
    return (
      <div key={item.id}>
        <TextField hintText="Hint Text" />
      </div>
    );
  }

  parseToRadios(item) {
    return (
      <div key={item.id}>
        {item.elements.map((radio, index) => {
          return (
            <label key={index}>
              <input type="radio" name={item.id} defaultValue={radio.value}/>
              {radio.label}
            </label>
          );
        })}
      </div>
    );
  }

  parseToTextArea(item) {
    return (
      <div key={item.id}>
        <TextField
          hintText={item.attrs.defaultValue}
          floatingLabelText={item.attrs.placeholder}
          multiLine={true}
          fullWidth={true}
          rows={2}
        />
      </div>
    );
  }

}

export default (new Parser());
