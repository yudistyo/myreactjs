import React, { Component } from 'react';
import Axios from 'axios'
import { Table, Input, Button, Icon,Modal } from 'antd';

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],selectedRowKeys: [],searchText:'',filtered: false,visible:false,
      RowData:[],CustID:''
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
OkDeleteBtn=()=>{
    const paramdata = {
        custId:this.state.CustID,
        address: this.state.input1,
        city: this.state.input2,
        custTypeCd: "",
        fedId: "",
        postalCode: "",
        state: "React",
        business: null,
        individual: null,
        account: [],
        officer: []
      };
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Expose-Headers": "*",
        Allow: "*",
        "Content-Type": "application/json"
      };
    //console.log("Pre-fetch check",`http://localhost/api/c/${this.state.CustID}`);
    Axios.delete(`http://www.cv.somee.com/c/${this.state.CustID}`,paramdata, {
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
            RowData:['ID : '+record.custId,'Address : '+record.address,'City : '+record.city],CustID:record.custId
      });
        }} type="primary">Delete - ID: {record.custId}</Button>
      
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


