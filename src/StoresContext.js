import React from 'react';
import {createContext, useContext, useReducer} from 'react';
import {STORES} from './mocks/stores.mock';

const StoresContext = createContext(null);
const StoresDispatchContext = createContext(null);

export const StoresProvider = ({children}) => {
  const [stores, dispatch] = useReducer(storesReducer, STORES);

  return (
    <StoresContext.Provider value={stores}>
      <StoresDispatchContext.Provider value={dispatch}>
        {children}
      </StoresDispatchContext.Provider>
    </StoresContext.Provider>
  );
};

export const useStores = () => {
  return useContext(StoresContext);
};

export const useStoresDispatch = () => {
  return useContext(StoresDispatchContext);
};

export const actions = {
  ADD: 'add',
  UPDATE: 'update',
  DELETE: 'delete',
};

const storesReducer = (stores, action) => {
  switch (action.type) {
    case actions.ADD:
      return [
        ...stores,
        {
          id: action.id,
          name: action.name,
          address: action.address,
          phone: action.phone,
          website: action.website,
          products: [],
        },
      ];
    case actions.UPDATE:
      return stores.map(store => {
        if (store.id === action.store.id) {
          return action.store;
        } else {
          return store;
        }
      });
    case actions.DELETE:
      return stores.filter(({id}) => id !== action.id);
    default:
      throw Error(`Unknown action ${action.type}`);
  }
};
