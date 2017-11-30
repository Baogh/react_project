import { combineReducers } from 'redux';

const reducers = combineReducers({
    list: function(state = [], action) {
        let newS;
        switch (action.type) {
        case "RES_DATA":
            newS = [...state];
            newS.push(action.payload);
            // newS = Object.assign({}, state);
            // newS = action.payload;
            //console.log(newS);
            return newS;
        default:
            return state
        }
    },
    rankingList: (state = [], action) => {
        let newS;
        switch (action.type) {
        case "RES_RANKINGDATA":
            newS = [...state];
            newS.push(action.payload);
            // newS = Object.assign({}, state);
            // newS = action.payload;
            //console.log(newS);
            return newS;
        default:
            return state
        }
    },

})

export default reducers