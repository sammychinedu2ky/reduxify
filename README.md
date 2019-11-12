# Very Simple Redux App

# Intro
A redux app has the following important components

1. <span style = "color:steelblue">The Actions</span> which are dispatched to the reducer
2. <span style = "color:steelblue">The Initial State</span>
3. <span style = "color:steelblue">The Reducer or updater</span> which "reduces" the state. It's more like a state producer. It takes in state and action and returns a new state as a pure function
4. <span style = "color:steelblue">The Store</span> which takes in both the reducer and initial state. It stores the state of the app.
5. <span style = "color:steelblue">The <code>.subscribe()</code> method</span> which updates variables subscribe to the store when state is updated
6. <span style = "color:steelblue">The events</span> which dispatch actions. Actions are then sent to the reducer (or updater) which returns a new state. A new state means the subscribe method updates varaibles subscribed to the store.

That was easy right?

## More about redux
Redux is awesome. One thing bothers me though. Most examples on the internet use React with Redux. One may need to develop a vanilla app which requires serious state management. Redux used this way makes everything handy. 

Besides, redux is just 7KB.

Read the docs of redux here <button style = "color:white; background-color:steelblue; border:none; padding: 0.3rem; outline-color: lightblue">Redux Docs</button>


It's easy!
Events dispatch actions which are automatically sent to the reducer which returns a new state. Since a new state exists, the render funtion fires and the UI updates.
