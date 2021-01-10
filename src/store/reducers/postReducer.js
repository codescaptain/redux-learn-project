const initState ={
    posts:[
        
    ]
}

const postReducer=(state=initState,action)=>{
    switch(action.type){
        case "DELETE_POST":
            
            const newPosts=state.posts.filter(post=>post.id!==action.id);
            return{
                posts:newPosts
            }
        case "ADD_POST":
            return{
                posts:[...state.posts,action.post],
              
            }   
        default:
            return state;    

    }
    
}

export default postReducer;