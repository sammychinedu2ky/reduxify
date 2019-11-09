const $ = n => document.querySelector(n);

const valueEl = $('#value')

//actions
//reducer
//store

const actions = {

}

//This is the reducer
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = Redux.createStore(counter)

function render() {
  valueEl.innerHTML = store.getState().toString()
}

render();

store.subscribe(render)
$('#increment')
  .addEventListener('click', function () {
    store.dispatch({ type: 'INCREMENT' })
  })
$('#decrement')
  .addEventListener('click', function () {
    store.dispatch({ type: 'DECREMENT' })
  })
$('#incrementIfOdd')
  .addEventListener('click', function () {
    if (store.getState() % 2 !== 0) {
      store.dispatch({ type: 'INCREMENT' })
    }
  })
$('#incrementAsync')
  .addEventListener('click', function () {
    setTimeout(function () {
      store.dispatch({ type: 'INCREMENT' })
    }, 1000)
  })