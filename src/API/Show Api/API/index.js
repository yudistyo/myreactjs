

function Get(){
    let response=''
    const GetApi = (item, index) => {
         fetch(` http://localhost/api/c`)
     
           .then((response) => response.json()
     
           )
           .then((response) => {
               this.response=response
             console.log(response); 
           })
        .catch((e) => {
                 console.log(e);
             });

     
     }
     return response;
}

export default Get;