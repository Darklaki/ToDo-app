import { createStore } from 'redux'
import reducer from './reducers/index.js'

import {retrieveState} from './localStorage'

const data = retrieveState();

export default createStore(reducer, data);