# State Management

If you have used Vuex, then congratulations, you can quickly get started with X-BUILD's own state management, it is a castrated version of Vuex, only retains the functionality of State, Mutation, Action, and provides a watch method for listening State changes.

## Get started quickly

Install buildx via npm or select state management options when X-BUILD is initialized.

Create store.js

```javascript
import BuildX from 'buildx';

const params = {
  state: {
    name: 'codexu'
  },
  mutations: {
    setName(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    getName(store) {
      setTimeout(() => {
        store.commit('setName', 'dispatch name');
      }, 1000);
    }
  }
};

export default new BuildX(params);
```

Introducing a store instance in other js, you can change state by commit or dispatch, and listen for state changes by watch.

```JavaScript
import store from './store';

store.watch('name', value => console.log(value));

store.commit('setName', 'commit name');
store.dispatch('getName');
```

## Configuration Parameters

The mutations, actions are similar in usage, mutations are used for synchronization, actions are used for asynchronous, and actions are submitted to mutations by calling commit and then modifying the state property.

### mutations

The mutations are an object, each property must be a function, and the function has two properties state and payload.

State: A state pointing to the instance that is used to modify the value of the property.

Payload: The value passed in by commit.

### actions

Actions are an object, each property must be a function, and the function has two properties, store and payload.

Store: Point to the instance, you can modify the value of state by submitting mutations via store.commit .

Payload: The value passed in by dispatch.

## Instance method

### commit(mutationKey, payload)

mutationKey: Pass in the mutation you want to execute.

Payload: Some parameters can be passed.

### dispatch(actionKey, payload)

actionKey: Pass in the action you want to execute.

Payload: Some parameters can be passed.

### watch(stateKey, callback)

stateKey: Pass in the state key you want to listen to.

Callback: This function is fired when the stateKey changes.
