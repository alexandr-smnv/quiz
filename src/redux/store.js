import {combineReducers, createStore} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import settingsReducer from "./reducers/settingsReducer";
import questionsReducer from "./reducers/questionsReducer";
import statisticsReducer from "./reducers/statisticsReducer";


const rootReducers = combineReducers({
  settings: settingsReducer,
  questionsReducer: questionsReducer,
  statistics: statisticsReducer
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
console.log(store.getState())


store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;