import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';




export default class Usuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <div>
        <form noValidate autoComplete="off">
          <div>
            <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
          </div>
        </form>
      </div>
      

      
    );
  }
}
