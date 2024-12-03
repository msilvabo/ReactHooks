
const initialState = [{
    id: 1,
    todo: 'Recolectar pidra del alma',
    done: false
}];

const todoReducer = (state = initialState, action= {}) =>{
    
    if (action.type === '[TODO] add Todo'){
        return [...state, action.payload];
    }

    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Vencer a los Avengers',
    done: false
};

const addTodoAction = {
    type: '[TODO] add Todo',
    payload: newTodo
}

console.log({state:todos});
todos = todoReducer(todos, addTodoAction);
console.log({state:todos});
