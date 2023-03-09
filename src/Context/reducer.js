  
const reducer=(state,action)=>{
    switch(action.type)
    {
        
        case 'SELECT CAT':
            /*const selectedItemIndex=state.cats.findIndex(item=>item.id===action.payload.id) 
            return {...state,selectedCat:state.cats[selectedItemIndex]}
            */
            return {...state,selectedCat:action.payload}

        case 'INCREMENT CLICKS_COUNT':    
            const increaseItemIndex=state.cats.findIndex(item=>item.id===action.payload.id)  
            state.cats[increaseItemIndex].clicks_count++;
            return{...state,cats:state.cats,selectedCat:action.payload}
            
        case 'ADD NEW CAT':                                                  
            return {...state,cats:[...state.cats,action.payload],selectedCat:action.payload}

            case 'DELETE CAT':
            const updatedList=state.cats.filter(item=>item.id!==action.payload.id)                    
            return {...state,cats:[...updatedList]}           
            
        default:
            return state;
    }
    
}

export default reducer;