import React, { Component } from 'react';

import Axios from 'axios'
class componentName extends Component {
  render() {
    return (
      <div> textInComponent </div>
    );
  }
}

export default componentName;

export function GetApi(){
    console.log('Pre-fetch check function');
    Axios.get('https://api.kawalcorona.com/indonesia/')
    .then(res=>{
        console.log('res data function==>',res.data);
        //this.props.corona(res.data)
        return res
    })
    .catch((error)=>{
        console.log('res error function==>',error)
        //this.props.corona(error)
            return error
    })
}
