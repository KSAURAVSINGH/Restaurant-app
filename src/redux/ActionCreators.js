import * as ActionTypes from './ActionTypes';
import {baseURL} from '../shared/baseURL'







export const addComment=(comment)=>
({
	type:ActionTypes.ADD_COMMENT,
	payload:comment
});







export const postComment=(dishId,rating,author,comment)=>(dispatch)=>{
	 const newComment={
	 	dishId:dishId,
		rating:rating,
		author:author,
		comment:comment
	}
     return fetch(baseURL + 'comments',{
     	method:"POST",
     	body:JSON.stringify(newComment),
     	headers:{
     		"Content-Type":"application/json"
     	},
     	credentials:"same-origin"
     })
		.then(res=>{
			if(res.ok)
				return res;
			else
			{
				var error=new Error('Error'+res.status+': '+res.statusText);
				error.res=res;
				throw error;
			}
		},
		error=>{
			var errmess=new Error(error.message);
			throw errmess;
		}
		)
		.then(res=>res.json())
		.then(res=>dispatch(addComment(res)))
		.catch(error=>{console.log('post comments',error.message);
			 alert('Your comment could not be posted\nError:' + error.message);
			});


}






export const postFeedback=(firstname,lastname,telnum,email,agree,contactType,message)=>(dispatch)=>{
    const newFeedback={
    	firstname:firstname,
	    lastname:lastname,
	    telnum:telnum,
	    email:email,
	    agree:agree,
	    contactType:contactType,
	    message:message
    }

    return fetch(baseURL+'feedback',{
    	method:"POST",
    	body:JSON.stringify(newFeedback),
    	headers:{
    		"Content-Type":"application/json"
    	},
    	credentials:"same-origin"
    })
    	.then(res=>res.json());

}








export const fetchDishes=()=>(dispatch)=>
{
	dispatch(dishesLoading());
	return fetch(baseURL + 'dishes')
		.then(res=>{
			if(res.ok)
				return res;
			else
			{
				var error=new Error('Error'+res.status+': '+res.statusText);
				error.res=res;
				throw error;
			}
		},
		error=>{
			var errmess=new Error(error.message);
			throw errmess;
		}
		)
		.then(res=>res.json())
		.then(dishes=>dispatch(addDishes(dishes)))
		.catch(error=>dispatch(dishesFailed(error.message)));
}
export const dishesLoading=()=>
({
	type:ActionTypes.DISHES_LOADING
});

export const addDishes=(dishes)=>({
	type:ActionTypes.ADD_DISHES,
	payload:dishes
});

export const dishesFailed=(errmess)=>({
	type:ActionTypes.DISHES_FAILED,
	payload:errmess
});






export const fetchComments=()=>(dispatch)=>
{
  return fetch(baseURL+'comments')
  	.then(res=>{
			if(res.ok)
				return res;
			else
			{
				var error=new Error('Error'+res.status+': '+res.statusText);
				error.res=res;
				throw error;
			}
		},
		error=>{
			var errmess=new Error(error.message);
			throw errmess;
		}
		)
  	.then(res=>res.json())
  	.then(comments=>dispatch(addComments(comments)))
  	.catch(error=>dispatch(commmentsFailed(error.message)));

};
export const addComments=(comments)=>({
	type:ActionTypes.ADD_COMMENTS,
	payload:comments
});

export const commmentsFailed=(errmess)=>({
	type:ActionTypes.COMMENTS_FAILED,
	payload:errmess
})







export const fetchPromos=()=>(dispatch)=>{
	dispatch(promosLoading());

	return fetch(baseURL+'promotions')
		.then(res=>{
			if(res.ok)
				return res;
			else
			{
				var error=new Error('Error'+res.status+': '+res.statusText);
				error.res=res;
				throw error;
			}
		},
		error=>{
			var errmess=new Error(error.message);
			throw errmess;
		}
		)
		.then(res=>res.json())
		.then(promos=>dispatch(addPromos(promos)))
		.catch(error=>dispatch(promosFailed(error.message)));
};

export const promosLoading=()=>
({
	type:ActionTypes.PROMOS_LOADING
});

export const addPromos=(promos)=>({
	type:ActionTypes.ADD_PROMOS,
	payload:promos
});

export const promosFailed=(errmess)=>({
	type:ActionTypes.PROMOS_FAILED,
	payload:errmess
});






export const fetchLeaders=()=>(dispatch)=>{
	dispatch(leadersLoading());
	return fetch(baseURL+'leaders')
		.then(res=>{
			if(res.ok)
				return res;
			else
			{
				var error=new Error('Error'+res.status+': '+res.statusText);
				error.res=res;
				throw error;
			}
		},
		error=>{
			var errmess=new Error(error.message);
			throw errmess;
		}
		)
		.then(res=>res.json())
		.then(leaders=>dispatch(addLeaders(leaders)))
		.catch(error=>dispatch(leadersFailed(error.message)));

}

export const leadersLoading=()=>
({
	type:ActionTypes.LEADERS_LOADING
});

export const addLeaders=(leaders)=>({
	type:ActionTypes.ADD_LEADERS,
	payload:leaders
});

export const leadersFailed=(errmess)=>({
	type:ActionTypes.LEADERS_FAILED,
	payload:errmess
});