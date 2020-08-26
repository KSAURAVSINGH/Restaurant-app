import React,{ Component } from 'react';
import { Media,Nav,FormFeedback,Input,NavItem,Form,ModalBody,FormGroup,Label,Card,CardImg,CardTitle,Col,CardImgOverlay,Button,CardText,CardBody,Breadcrumb,BreadcrumbItem,Modal,ModalHeader } from 'reactstrap';
import './DishdetailComponent.css';
import {Link } from 'react-router-dom';
import {Errors,Control} from 'react-redux-form';
import {Loading} from '../LoadingComponent';
import {baseURL} from '../shared/baseURL';
import {FadeTransform,Fade,Stagger} from 'react-animation-components';



 	function RenderDish({dis,isLoading,errMess}){
 		if(isLoading){
 			return(
 					<div className="container">
 						<div className="row">
 							<Loading />
 						</div>
 					</div>
 				);
 		}
 		else if(errMess)
 		{
 			return(
 					<div className="container">
 						<div className="row">
 							<h4>{errMess}</h4>
 						</div>
 					</div>
 				)
 		}
		else if(dis!=null)
			{
				console.log(dis.name);
				
			return(
			<FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
				<Card className="grow" body inverse style={{backgroundColor:"#911", width:"300px",margin:"37px 0px 0px 0px"}} >
                    <CardImg  top  height="200px" src={baseURL + dis.image} alt={dis.name} />
                    <CardBody>
                      <CardTitle>{dis.name}</CardTitle>
                      <CardText>{dis.description}</CardText>
                    </CardBody>
                </Card>
               </FadeTransform>
				);
			}
		else
			return(
				<div></div>);

	}


function RenderComments({dish,comments,postComment}) {
		if(comments!= null){
			return (
				<div className = 'col-12 col-md-5 m-1'>
				<Stagger in>
				{	comments.map((comment)=>{

		return(
		        <div className="container">
		        <Fade in>
                  <li>{comment.author}
                  <p>{comment.comment}</p>
                  <p>{new Date().toISOString()}</p><br /></li>
                </Fade>
                	</div>

		);
	})
}
</Stagger>

<CommentForm comments={comments}  dish={dish} postComment={postComment} />
				
				</div>
		
			)
		}
	}


	
		
	
const DishDetail=(props) =>

{
	
const tool=props.dishh;		  {/*A big trouble here with dishh*/}
console.log(tool);

	return(              
		 <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active></BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3></h3>
                        <hr />
                    </div>                
                </div>


	<div className="container">
    <Media>        
    	<RenderDish dis={props.dishh} isLoading={props.isLoading} errMess={props.errMess} />
		<div>
		<h4>Comments</h4>
		<RenderComments comments={props.comments}  dish={props.dishh} postComment={props.postComment} />
		
		
		</div>  
    </Media>
    </div>
    </div>
          
		);
}



export default DishDetail;



class CommentForm extends Component{
	constructor(props){
		super(props);
		this.state={
			isModalOpen:false,
			
			
			
		};
		this.toggleModal=this.toggleModal.bind(this);
		this.handleComment=this.handleComment.bind(this);
		
		
	}

	



	toggleModal(){
		this.setState({
			isModalOpen:!this.state.isModalOpen
		});
	}




handleComment(value){
	this.toggleModal();
    this.props.postComment(this.props.dish.id,this.rating.value,this.name.value,this.comment.value);
    
}




render()
{
   
	return(
	<div>
          <Modal isOpen={this.state.isModalOpen} toggle={this.state.toggleModal}>
	          <ModalHeader toggle={this.toggleModal} >Submit Comment</ModalHeader>
          <ModalBody>
          	<Form onSubmit={(value)=>this.handleComment(value)} onGet={(value)=>this.handleGet(value)}>
	          	<FormGroup>
	          			<Label htmlFor="rating">Rating</Label>
	          			<Input type="select"
	          		      name="rating"  innerRef={(input)=>this.rating=input} 
	          			
	          				>

	          				
	          			<option>1</option>
	          			<option>2</option>
	          			<option>3</option>
	          			<option>4</option>
	          			<option>5</option>
	          			</Input>
	          			

				</FormGroup>
				<FormGroup>
					<Label htmlFor="name">
						Your Name
					</Label>
					<Input type="text"  name="name" innerRef={(input)=>this.name=input} 
						 
					
					 />
				
						 
					
					
				</FormGroup>
				<FormGroup>
					<Label >Comment</Label>
					<Input  type="textarea"  name="comment" innerRef={(input)=>this.comment=input} 
					
					/>
					
				</FormGroup>
	          	<Button>Submit</Button>
          	</Form>
          </ModalBody>
          </Modal>
          
          

          <Nav className="ml-auto" navbar>
          	<NavItem>
          		<Col md={{size:10,offset:2}}>

           			<Button  onClick={this.toggleModal} color="primary">
           			<span className="fas fa-pen"></span><strong>Submit Comment</strong>
           			</Button>
		  		</Col>
		  	</NavItem>
		  </Nav>
          


          


		  

	</div>
	);
}

}