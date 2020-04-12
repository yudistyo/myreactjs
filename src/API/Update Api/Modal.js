import React, { Component } from 'react';
import { Table, Input, Button, Icon, Modal } from "antd";

class componentName extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Data: [],
        selectedRowKeys: [],
        searchText: "",
        filtered: false,
        visible: false,
        RowData3: [],BtnConfirmWait:true,input1:'',input2:'',CustID:''
      };
      
    };
    OnCancel=()=>{
        var val=false;
        this.props.visibleC2(val)
    }
    ChangeUpdateInput=()=>{
        
    }
    componentDidMount=()=>{
        this.setState({
            RowData3:this.props.RowData2
        })
        console.log('from child=>',this.state.RowData3)
    }
    
  render() {
    
     
    return (
        <div>
            {this.state.RowData3}
        <Modal
        style={{ fontWeight: "bolder" }}
        confirmLoading={this.state.BtnConfirmWait}
        title="Data Details for Update data"
        visible={this.props.visibleC}
        onOk={this.OkUpdateBtn}
        onCancel={this.OnCancel}
      >
        {this.state.RowData3.map((d, i) => {
            if(i>0){
                return(
                  <div key={'input'+i}>
                  <p style={{ fontWeight: "bolder" }}>{d}</p>               
                  <Input  id={'input'+i} placeholder={d} onChange={this.ChangeUpdateInput}></Input >
                </div>
                )
            }
          return (
            <div key={'id'+i}>{this.state.RowData3}
              <p style={{ fontWeight: "bolder" }}>{d}</p> 
            </div>
          );
        })}
      </Modal>
      </div>
    );
  }
}

export default componentName;
