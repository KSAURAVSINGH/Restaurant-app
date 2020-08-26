import React,{ Component }from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menucomponent';
import DishDetail from './components/DishdetailComponent';
import Header from './components/Headercomponent';
import Footer from './components/Footercomponent';
import Home from './components/Homecomponent';
import { Switch,Route,Redirect,withRouter} from 'react-router-dom';
import Contact from './components/Contactcomponent';
import { connect } from 'react-redux';
import About from './components/Aboutcomponent';
import { addComment,postComment,postFeedback,fetchDishes,fetchComments,fetchPromos,fetchLeaders } from './redux/ActionCreators';
import {actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps=(state)=>
{
  return {
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
 
}; 


const mapDispatchToProps=(dispatch)=>
({
  addComment:(comment)=>dispatch(addComment(comment)),
  fetchDishes:()=>{dispatch(fetchDishes())},
  resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))},
  fetchPromos:()=>{dispatch(fetchPromos())},
  fetchComments:()=>dispatch(fetchComments()),
  fetchLeaders:()=>{dispatch(fetchLeaders())},
  postComment:(dishId,rating,author,comment)=>{dispatch(postComment(dishId,rating,author,comment))},
  postFeedback:(firstname,lastname,telnum,email,agree,contactType,message)=>{dispatch(postFeedback(firstname,lastname,telnum,email,agree,contactType,message))}
});





class Main extends Component{
  constructor(props){
    super(props);
    
  }

componentDidMount(){
  this.props.fetchDishes();
  this.props.fetchLeaders();
  this.props.fetchPromos();
  this.props.fetchComments();

}
  

  render(){

    const HomePage=()=>
    {
      return(
<Home  
dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
dishLoading={this.props.dishes.isLoading}
dishErrMess={this.props.dishes.errmess}
promotion={this.props.promotions.promotions.filter((promo)=>promo.featured)[0]}
promosLoading={this.props.promotions.isLoading}
promosErrMess={this.props.promotions.errmess}
leader={this.props.leaders.leaders.filter((leader)=>leader.featured)[0]}
leaderLoading={this.props.leaders.isLoading}
leaderErrMess={this.props.leaders.errmess}
/>




        );
    }


    const ContactUs=()=> 
    {
      return(
        <Contact resetFeedback={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />
   );
    }


      const DishWithId=({match})=>{
        return(
          <DishDetail 
          dishh={this.props.dishes.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
          addComment={this.props.addComment}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
          />

          );
      }


      const AboutUs=()=>
      {return(
        <About leaders={this.props.leaders.leaders} />
        );
      }

     return (
   <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
             <Switch location={this.props.location} >
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes.dishes} /> } />
                <Route exact path='/contactus' component={ContactUs } />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route path="/aboutus" component={AboutUs} />

               <Redirect to="/home" />
             </Switch>
          </CSSTransition>
        </TransitionGroup>
       <Footer />

    </div>
  );
  }
}
 

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
