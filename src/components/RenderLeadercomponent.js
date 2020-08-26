import React from 'react';
import {Media,CardImg} from 'reactstrap';
import {baseURL } from '../shared/baseURL';



const RenderLeader=({lead})=>{

	return(
		<div className="container" style={{margin:"50px 0px 0px 0px"}}>
		<Media>
		<CardImg top style={{width:"auto",height:"auto",margin:"5px 15px 5px 5px"}} src="/assets/images/alberto.png" height="auto" className="md-5"/>
       <div><Media heading>{lead.name}</Media>
       <h6>{lead.designation}</h6>
        <p>{lead.description}</p>    
         </div>  
         </Media>
         </div>

		);
}


export default RenderLeader;