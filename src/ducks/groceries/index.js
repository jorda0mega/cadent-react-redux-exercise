const duckRoot = 'app/groceries/';

// Constants
export const ADD_ITEM = `${duckRoot}ADD_ITEM`;
export const REMOVE_ITEM = `${duckRoot}REMOVE_ITEM`;
export const SELECT_ITEM = `${duckRoot}SELECT_ITEM`;
export const DESELECT_ITEM = `${duckRoot}DESELECT_ITEM`;

export const initialState = {
  list: [
    {
      id: 66,
      name: 'Bananas',
      category: 'Fruit',
      deliveryMethod: 'Air',
    },
    {
      id: 16,
      name: 'Whole Grain Bread',
      category: 'Grains',
      deliveryMethod: 'Air',
    },
    {
      id: 100,
      name: 'Lettuce',
      category: 'Vegetable',
      deliveryMethod: 'Ground',
    },
    {
      id: 10,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
    },
  ],
  isItemSelected: false,
  selectedItem: {
    id: 0,
    name: '',
    category: '',
    deliveryMethod: '',
  },
};

// Reducers
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return { ...state, list: [...state.list, payload]}

    case REMOVE_ITEM:
      // Write a custom reducer that will remove an item from the list array
      if(payload === state.selectedItem.id){
        return { ...state, list: state.list.filter(item => item.id !== payload), isItemSelected: false, selectedItem: {
          id: 0,
          name: '',
          category: '',
          deliveryMethod: '' 
        }};
      }
      return { ...state, list: state.list.filter(item => item.id !== payload) };
      // return state; 

    case SELECT_ITEM:
      // Write a custom reducer that will select an item
      return { ...state, isItemSelected: true, selectedItem: payload}
      // return state;

    case DESELECT_ITEM:
      // Write a customer reducer that will deselect an item
      return { ...state, isItemSelected: false, selectedItem: {
        id: 0,
        name: '',
        category: '',
        deliveryMethod: '' 
      }};
      // return state;

    default:
      return state;
  }
};

// Action Creators
export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const selectItem = item => ({
  type: SELECT_ITEM,
  payload: item,
});

export const deselectItem = item => ({
  type: DESELECT_ITEM,
  payload: item,
});