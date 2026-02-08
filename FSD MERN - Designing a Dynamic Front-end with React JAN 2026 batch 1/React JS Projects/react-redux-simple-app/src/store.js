import { legacy_createStore as createStore} from 'redux'
import reducer from './reducer'

// createStore is a function which help to connect reducer
// and make state variable as global state variable. 
// in RTK configureStore 
let storeRef = createStore(reducer);

export default storeRef;