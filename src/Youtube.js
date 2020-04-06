import React, { Component } from 'react';

import { Player } from 'video-react';
const Youtube = (props) => {
    return (
        <div style={{margin:50}}>
            <div style={{display:'inline-block',margin:50,marginBottom:100}}>
                <div>
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/XRqiFqWkNfI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/SKTGpBpAKLs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

             <div style={{display:'inline-block',marginTop:10}}>
                <div>
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/nrCs5IzaxTc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/rFXkDvx0w0o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

        </div>

    );
};
export default Youtube;

//https://www.youtube.com/watch?v=XRqiFqWkNfI