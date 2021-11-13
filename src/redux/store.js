import {combineReducers, createStore} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import settingsReducer from "./reducers/settingsReducer";
import questionsReducer from "./reducers/questionsReducer";


const rootReducers = combineReducers({
  settingsReducer: settingsReducer,
  questionsReducer: questionsReducer
})

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('questions', JSON.stringify(state.questionsReducer));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('questions');
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const persistedStore = {questionsReducer: loadFromLocalStorage()};


const store = createStore(rootReducers, persistedStore, devToolsEnhancer())

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;