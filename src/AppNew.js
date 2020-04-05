import React,{Component,useState} from 'react';

function AppNew() {
  const [fromUrl,setfromUrl]=useState('')
  const [data,setdata]=useState('')

 const GetApi = (item, index) => {
   // this.setState({ ImgA: require('./loading.gif')});
    //this.setState({ value: item });
    //fetch(`https://kurs.web.id/api/v1/bca`)
    fetch(` https://free.currconv.com/api/v7/currencies?apiKey=4487c4acf3c9dfaa37b8`)

      // .finally(()=>
      //     // this.setState({
      //     //   ImgA : ''
      //     // })
      // )
      .then((response) => response.json()

      )
      .then((response) => {
        console.log(response);     
          //console.log(ad)
          // this.setState({ Result: response })
         
          //setdata({data:response.results}) 
             
      })
        .catch((e) => {
            console.log(e);
        });

}
GetApi()
  return (    
    <div className="AppNew">
    APPNew
    <p>{fromUrl}</p>     
          <div className="Json">
            {}
          </div>
          <div style={{fontSize:18,fontWeight:'bolder'}}>
            <ul>
              <li>{} </li>
             
            </ul>
          </div>
    </div>
  );
}

export default AppNew;
