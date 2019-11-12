const $ = n => document.querySelector(n);
const ace = (node, func) => node.addEventListener('click', func)
const log = console.log;


const nodes = {
  countNode: $('#value1'),
  plusButton: $('#increment'),
  minusButton: $('#decrement'),
  oddIncrement: $('#odd-increment'),
  asyncIncrement: $('#async-increment'),
  red: $('#red'),
  green: $('#green'),
  blue: $('#blue'),
  textSource: $('.text-source'),
  coloredText: $('.colored-text')
}
const { plusButton,
  minusButton,
  oddIncrement,
  countNode,
  asyncIncrement,
  red,
  green,
  blue,
  textSource,
  coloredText } = nodes;

const actions = {
  increment: {
    type: 'INCREMENT',
    payload: { value: 1 }
  },
  decrement: {
    type: 'DECREMENT',
    payload: { value: -1 }
  },
  changeColor(color) {
    return {
      type: 'CHANGE_COLOR',
      payload: { color: color }
    }
  },
  handleChange({target}) {
    return {
      type: 'HANDLE_CHANGE',
      payload: { value: target.value }
    }
  }
}

//This is the initial state
const initialState = {
  count: 0,
  text: '',
  color: ''
}


//This is the reducer or modifier
function counter(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload.value
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count + action.payload.value
      }
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.payload.color
      }
    case 'HANDLE_CHANGE':
      return {
        ...state,
        text: action.payload.value
      }
    default:
      return state
  }
}

//This is the store
const store = Redux.createStore(counter, initialState)

//The render function and the subscribe method both contribute to
//updates done to the UI
function render() {
  countNode.textContent = store.getState().count;
  coloredText.textContent = store.getState().text;
  coloredText.style.color = store.getState().color;
  textSource.value = store.getState().text;
}
render();
store.subscribe(render)

// These are the events which dispatch actions
ace(plusButton, () => store.dispatch(actions.increment));
ace(minusButton, () => store.dispatch(actions.decrement));

ace(oddIncrement, () => {
  if (store.getState().count % 2 !== 0)
    return store.dispatch(actions.increment);
})
ace(asyncIncrement, () => {
  setTimeout(() => store.dispatch(actions.increment), 1000)
})
ace(red, () => store.dispatch(actions.changeColor('red')));
ace(green, () => store.dispatch(actions.changeColor('green')));
ace(blue, () => store.dispatch(actions.changeColor('blue')));
textSource.addEventListener('input', () => store.dispatch(actions.handleChange(event)))