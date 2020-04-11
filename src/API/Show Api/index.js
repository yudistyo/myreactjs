import React, { Component } from 'react';
import Get from './API'
import Axios from 'axios'
import { Table, Input, Button, Icon,Modal } from 'antd';

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],selectedRowKeys: [],searchText:'',filtered: false,visible:false,
      RowData:[]
    };
  }
    componentDidMount=()=>{
        this.GetApi();
    }
    GetApi=()=>{
        console.log('Pre-fetch check');
        Axios.get('http://localhost/api/c')
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
      const match = record.address.match(reg);
      console.log('Data;==>',this.state.Data,'match==>',match)
      if (!match) {
        return null;
      }
      return {
        ...record,
        name: (
          <span>
            {record.address.split(reg).map((text, i) => (
              i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
            ))}
          </span>
        ),
      };
    }).filter(record => !!record),
  });
}

  render() {
    //console.log('tes==>',this.state.Data.filter((value,index,self)=>self.map(x=>x.city).indexOf(value.city)==index))
    const dataCity=this.state.Data.filter((value,index,self)=>self.map(x=>x.city).indexOf(value.city)==index)
    const columns = [{
      title: 'ID',
      dataIndex: 'custId',
      key: 'custId',
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
    title: 'Address',
    dataIndex: 'address',
    key: 'Address',
    
    filters:
    dataCity.map((d,i)=>{
        
        return ({
          text:d.city,
          value:d.city,
        }
        )
    })
    ,
    onFilter: (value, record) => record.city.indexOf(value) === 0,
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
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
            RowData:['ID : '+record.custId,'Address : '+record.address,'City : '+record.city]
      });
        }} type="primary">Details - ID: {record.custId}</Button>
      
      </span>
    ),
  }
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      this.state.Data.map((d,i)=>{
        selectedRowKeys=d.custId;
        selectedRows=d
      }) 
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    // getCheckboxProps: record => ({      
    //   disabled: record.custId === '1', // Column configuration not to be checked
    // }),
  };
      
    return (
      <div style={{position:"fixed"}}>
        <Table  pagination={{ pageSize:5}} scroll={{ y: 600}}  rowSelection={rowSelection} dataSource={this.state.Data} columns={columns} />
        <Modal style={{fontWeight:'bolder'}}
          title="Data Details"
          visible={this.state.visible}
          onOk={()=>this.setState({visible:false})}
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


