const initState = {
    
    posts: [
        {id: '1', title: 'Squirtle laid an egg', body: 'my fav pokemon and has a quality of water beam'},
        {id: '2', title: 'Charminder laid an egg', body:'my second fav pokemon and has a quality of fire'} ,
        {id: '3', title: 'Pikachu laid an egg', body: 'my third fav pokemon and has a quality of electricity'}
    ]
}

const rootReducer = (state = initState, action) => {
   if (action.type === 'DELETE_POST'){
       let newPosts = state.posts.filter(post => {
           return action.id !== post.id
       });
       return {
           ...state,
           posts: newPosts
       }
   }
    return state;
}

export default rootReducer