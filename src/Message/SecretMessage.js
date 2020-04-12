import React, { Component } from 'react';
import { Table, Input, Button, Icon, Modal } from "antd";

class componentName extends Component {
  render() {
    return (
      <div style={{display:'flex',flexDirection:'column'}}> 
              <Input style={{height:'50vh',wordWrap:'break-word',borderRadius:10}} type='area' placeholder='Message...'></Input>

              <Button type='danger' style={{marginTop:20,width:200,borderRadius:20}}>Send</Button>
      </div>
    );
  }
}

export default componentName;
