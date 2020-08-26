import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap';
import {Loading} from '../LoadingComponent';
import {baseURL} from '../shared/baseURL';
import {FadeTransform} from 'react-animation-components';



function RenderCard(props){
	
		if(props.isLoading)
			 return (
			 		<Loading />
			 	)
		else if(props.errMess)
			return(<Loading />)
		else
			{return(
				<FadeTransform in transformProps={
					{
						exitTransform:'scale(0.5) translateY(-50%) '
					}
				}>
				<Card>
						<CardImg src={baseURL + props.item.image} alt={props.item.name} />
						<CardBody>
						<CardTitle><h4>{props.item.name}</h4></CardTitle>
						{props.item.designation ? <CardSubtitle><h6>{props.item.designation}</h6></CardSubtitle>:null}
						<CardText>{props.item.description}</CardText>
						</CardBody>
						</Card>
				</FadeTransform>

		);}
}





function Home(props){
	return(
		<div className="container">
		<div className="row align-items-start">
		<div className="col-12 col-md m-1">
		<RenderCard item={props.dish} isLoading={props.dishLoading} errMess={props.dishErrMess} />
		</div>

		
		<div className="col-12 col-md m-1">
		<RenderCard item={props.promotion} isLoading={props.promosLoading} errMess={props.promosErrMess}/>
		</div>

		
		<div className="col-12 col-md m-1">
		<RenderCard item={props.leader} isLoading={props.leaderLoading} errMess={props.leaderErrMess}/>
		</div>
        
        </div>
        </div>


		);
}


export default Home;