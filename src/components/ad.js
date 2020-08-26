<Errors 
					show="touched"
					model=".comment"
					messages={{
						required:"Required",
						minlength:"Should be greater than 2 characters",
						maxlength:"Should be less than or equal to 15 characters"
					}}/>


					<Errors 
						show="touched"
						model=".name"
						messages={{
						required:"Required",
						minlength:"Should be greater than 2 characters",
						maxlength:"Should be less than or equal to 15 characters"
					}}/>


					<Errors 
	          			show="touched"
	          			model=".rating"
	          			messages={{
						required:"Required",
						minlength:"Should be greater than 2 characters",
						maxlength:"Should be less than or equal to 15 characters"
					}}/>





					validators={{
	          				required}}


	          				validators={{
						required,minlength:minlength(3),maxlength:maxlength(15)}}



						 validators={{required}} 




		class CommentForm extends Component{
	constructor(props){
		super(props);
		this.state={
			isModalOpen:false,
			firstname:"",
			touched:{
				firstname:false
			}
			
			
		};
		this.toggleModal=this.toggleModal.bind(this);
		this.handleComment=this.handleComment.bind(this);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleBlur=this.handleBlur.bind(this);

	}

	



	toggleModal(){
		this.setState({
			isModalOpen:!this.state.isModalOpen
		});
	}

handleInputChange(event){
	const target=event.target;
	const value=target.type==='checkbox'?target.checked:target.value;
	const name=target.name;
	this.setState({
		[name]:value
	});
}
handleBlur=(field)=>(evt)=>{
	this.setState({
		touched:{...this.state.touched,[field]:true}
	})
}

handleComment(value){
	this.toggleModal();
	 alert("Rating:"+this.rating.value+" Your name:"+this.name.value+ " Comment:"+this.comment.value);
	
}
validate(firstname){
	const errors={
		firstname:""
	};
	if(this.state.touched.firstname && firstname.length>15)
		errors.firstname="Name should be less than or equal to 15 characters ";

	else if (this.state.touched.firstname  && firstname.length<3)
		errors.firstname="Name should be equal or more than 3 characters ";
	
	return errors;
}





render()
{
	const errors=this.validate(this.state.firstname);

	return(
	<div>
          <Modal isOpen={this.state.isModalOpen} toggle={this.state.toggleModal}>
	          <ModalHeader toggle={this.toggleModal} >Submit Comment</ModalHeader>
          <ModalBody>
          	<Form onSubmit={(value)=>this.handleComment(value)} >
	          	<FormGroup>
	          			<Label htmlFor="rating">Rating</Label>
	          			<Input type="select"
	          		     model=".rating" name="rating"  innerRef={(input)=>this.rating=input} 
	          			
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
						 
						valid={errors.firstname===""}
					invalid={errors.firstname!==""}
					onChange={this.handleInputChange}
					onBlur={this.handleBlur('firstname')}
					 />
						 <FormFeedback>{errors.firstname}</FormFeedback>
					}
					
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





function RenderComments({comments,addComment,dishId}) {
		if(comments!= null){
			return (
				<div className = 'col-12 col-md-5 m-1'>
				{	comments.map((comment)=>{

		return(
		        <div className="container">
				<Card className="col-15  center" body inverse style={{backgroundColor:"#010", width:"auto",alignbody:"left"}} >
                    
                    <CardBody>
                      <CardTitle>{comment.author}</CardTitle>
                      <CardText>{comment.comment}</CardText>
                    </CardBody>
                   
                </Card>
                <CommentForm dishId={dishId} addComment={addComment} />
                	</div>
		);
	})
}
				
				</div>
		
			)
		}
	}