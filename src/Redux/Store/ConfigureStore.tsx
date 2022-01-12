import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import postReducer from "../Reducers/postReducer"
import rootSaga from '../Saga/rootSaga'
import createSagaMiddleware from 'redux-saga'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleWare=createSagaMiddleware()

const configureStore=()=>{  

    const store=createStore(
        combineReducers({
            postReducer:postReducer  
        }),
        composeEnhancers( applyMiddleware(sagaMiddleWare)) // applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)
    )
    sagaMiddleWare.run(rootSaga)
    return store
}
export default configureStore