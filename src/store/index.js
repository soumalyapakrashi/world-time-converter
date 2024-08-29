import { createStore } from "redux";

const initialState = {
    clockPrecision: "hours:minutes",
    clockType: "digital",
}

function timezoneReducer(state = initialState, payload) {
    if(payload?.type === "clockPrecision") {
        return {
            ...state,
            clockPrecision: payload?.value
        }
    }
    else if(payload?.type === "clockType") {
        return {
            ...state,
            clockType: payload?.value
        }
    }
    else {
        return state;
    }
}

const store = createStore(timezoneReducer);

export default store;