import * as types from './actions-types';

export default {
    getArticles(){
        return (dispatch,getState)=>{
            dispatch({
                type:types.GET_ARTICLES
            });
        }
    }
}