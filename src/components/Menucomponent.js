import React  from 'react';
import { Media,Card,CardImg,CardTitle,CardImgOverlay,CardText,CardBody,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import DishDetail from './DishdetailComponent';
import {Link} from 'react-router-dom';
import './DishdetailComponent.css';
import 'tachyons';
import {baseURL} from '../shared/baseURL';

   function RenderMenuItem({dish}){
 
   	return(

   		<Card  className=" grow " key={dish.id}  style={{width:"auto",margin:"10px 10px 10px 10px"}} >
   			<Link to={`/menu/${dish.id}`}>
                  
								<CardImg top col-10 height="250px" src={baseURL + dish.image} alt={dish.name} body inverse />
							
							
								<Media heading>{dish.name}</Media>
								
			</Link>
		</Card>
			);

   }
	

 		const Menu=(props) => {

 			const menu=props.dishes.map((dish)=>{
			return(
					<div className="w3-green w3-hover-shadow w3-center"  key={dish.id} className="col-5 md-5 mt-1">
					   
					 	 <RenderMenuItem dish={dish}  />

					</div>
				);
		});

		return(
			
			<div className="container">
			
				<div className="row">
				<Breadcrumb>
					<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
					<BreadcrumbItem active>Menu</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
					<h3>Menu</h3>
					</div>
					</div>
					<div className="row">

				{menu}
			  
			   </div>

                 

			</div>
			);

 		}
		
	
export default Menu;