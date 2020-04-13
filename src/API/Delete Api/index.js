import React, { Component } from 'react';
import Axios from 'axios'
import { Table, Input, Button, Icon,Modal } from 'antd';

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],selectedRowKeys: [],searchText:'',filtered: false,visible:false,
      RowData:[],id:''
    };
  }
    componentDidMount=()=>{
        this.GetApi();
    }
    GetApi=()=>{
        console.log('Pre-fetch check');
        Axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res=>{
            console.log('res data==>',res.data)
            this.setState({
              Data:res.data
            })
        })
}

onInputChange = (e) => {
  this.setState({ searchText: e.target.value });
}

onSearch = () => {
 
  const { searchText } = this.state;
  const reg = new RegExp(searchText, 'gi');
  this.setState({
    filterDropdownVisible: false,
    filtered: !!searchText,
    Data: this.state.Data.map((record) => {
      const match = record.name.match(reg);
      console.log('Data;==>',this.state.Data,'match==>',match)
      if (!match) {
        return null;
      }
      return {
        ...record,
        name: (
          <span>
            {record.name.split(reg).map((text, i) => (
              i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
            ))}
          </span>
        ),
      };
    }).filter(record => !!record),
  });
}
OkDeleteBtn=()=>{
    const paramdata = {
        id:this.state.id,
        name: this.state.input1,
        email: this.state.input2,
        body: "react cvnet netlify com"
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Expose-Headers": "*",
        Allow: "*",
        "Content-Type": "application/json"
      };
    //console.log("Pre-fetch check",`http://localhost/api/c/${this.state.id}`);
    Axios.delete(`https://jsonplaceholder.typicode.com/comments/${this.state.id}`,paramdata, {
        headers,
        mode: "no-cors"
      }).then(res => {
        console.log("res data==>", res)
      if(res.status===200){
        this.setState({
            visible: false
          });
          this.GetApi();
          //console.log("1==>", this.state.input1,'2==>',this.state.input2)
      }      
    })
    .catch((error)=>{
        console.log('Error==>',error)
    });
  }

  render() {
    //console.log('tes==>',this.state.Data.filter((value,index,self)=>self.map(x=>x.email).indexOf(value.email)==index))
    const dataCity=this.state.Data.filter((value,index,self)=>self.map(x=>x.email).indexOf(value.email)==index)
    const columns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <div style={{backgroundColor:'lightgrey',textAlign:'center'}}>{text}</div>
      ,
      
    filterDropdown: (
      <div className="custom-filter-dropdown">
        <Input
          ref={ele => this.searchInput = ele}
          placeholder="Search name"
          value={this.state.searchText}
          onChange={this.onInputChange}
          onPressEnter={this.onSearch}
        />
        <Button type="primary" onClick={this.onSearch}>Search</Button>
      </div>
    )
     },
    {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    
    filters:
    dataCity.map((d,i)=>{
        
        return ({
          text:d.email,
          value:d.email,
        }
        )
    })
    ,
    onFilter: (value, record) => record.email.indexOf(value) === 0,
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
   {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button onClick={()=>{
          this.setState({
                visible:true
          });
          this.setState({
            RowData:['ID : '+record.id,'name : '+record.name,'email : '+record.email],id:record.id
      });
        }} type="primary">Delete - ID: {record.id}</Button>
      
      </span>
    ),
  }
  ];
  

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      this.state.Data.map((d,i)=>{
        selectedRowKeys=d.id;
        selectedRows=d
      }) 
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    // getCheckboxProps: record => ({      
    //   disabled: record.id === '1', // Column configuration not to be checked
    // }),
  };
      
    return (
      <div style={{position:"fixed"}}>
        <Table  pagination={{ pageSize:5}} scroll={{ y: 600}}  rowSelection={rowSelection} dataSource={this.state.Data} columns={columns} />
        <Modal style={{fontWeight:'bolder'}}
          title="Are you sure Delete this data ?"
          visible={this.state.visible}
          onOk={this.OkDeleteBtn}
          onCancel={()=>this.setState({visible:false})}
        >
          {this.state.RowData.map((d,i)=>{
            return(
              <p style={{fontWeight:'bolder'}}>{d}</p>
            )
          })}
        </Modal>
         </div>
    );
  }
}



export default componentName;


