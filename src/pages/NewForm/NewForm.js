import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

class FormCreator extends Component {

  constructor(props) {
    super(props);
    this.handleChangeName = this.handleChangeName.bind(this);

    this.state = {
      formName: ''
    };
  }

  handleChangeName(e) {
    this.setState({
      formName: e.target.value
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="col-xs-12">
            <Chip style={styles.chip}>Question with one answer</Chip>
            <Chip style={styles.chip}>Question with multiple answers</Chip>
          </div>
        </div>
        <div className="row">
          <div className="creator-form col-xs-5">
            <TextField
              hintText="Name"
              floatingLabelText="Enter Form Title"
              onChange={this.handleChangeName}
            />
          </div>
          <div className="form-preview col-xs-7">
            <AppBar
              title={<span>{this.state.formName}</span>}
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              iconElementRight={<FlatButton label="Save" />}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FormCreator;

const styles = {
  chip: {
    margin: 4
  }
};
