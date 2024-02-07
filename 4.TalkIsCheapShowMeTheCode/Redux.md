# Redux

- Redux is library used to managing state
- Redux is not mandatory in react
- Redux is an external library
- Zunstand is also another state management library
- It is offers state management
- React-Redux and Redux Toolkit this library offers redux

- Redux store is very big js object, its kept central place.
- Redux story we are creating slices of data 
- example we are creating cart slice initially it is empty
- after we put data on it it will update the card slice

- how data goes into card slice once click on the add button, redux cannot directly do this
- when you click on add button it dispatch the action 
- what happend after dispatching an action it called a function and this function internally modify the card
- what is this function this function known as reducer

- [WRITE DATA] Add button => Dispatch (action) => function() reducer => modify or update cart[]
- [GET DATA] for that we use selector: we use selector to read data and it update the cart item
- header component subscribe to our store using selector: sync with store

# Redux Toolkit

- Install @redux/toolkit and react-redux
- Build our store
- Connect our store to our app
- slice (cartSlice)
- dispatch(action)
- Selector