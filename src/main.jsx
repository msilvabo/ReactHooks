import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CallBackHook from './06-memos/CallBackHook'
import { Padre } from './07-tarea-memo/Padre'
import TodoApp from './08-useReducer/TodoApp'
// import './08-useReducer/intro-reducer';

// import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
// import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
// import FocusScreen from './04-useRef/FocusScreen'
// import Layout from './05-useLayoutEffect/Layout'
// import Memorize from './06-memos/Memorize'
// import MemoHook from './06-memos/MemoHook'
// import SimpleForm from './02-useEffect/simpleForm'
// import HooksApp from './HooksApp'
// import CounterApp from './01-useState/CounterApp'
// import CounterWithCustomeHook from './01-useState/CounterWithCustomeHook'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <TodoApp/>
  // </StrictMode>,
)
