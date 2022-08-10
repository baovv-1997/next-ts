import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import { Button } from 'antd';

function aReducer(state = { value: 0 }, action: any) {
  switch (action.type) {
    case 'a/incremented':
      return { value: state.value + 1 };
    case 'a/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

function bReducer(state = { value: 0 }, action: any) {
  switch (action.type) {
    case 'b/incremented':
      return { value: state.value + 1 };
    case 'b/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const A = () => {
  const { a } = useSelector((state: any) => state);

  return (
    <div>
      <span>{a.value}</span>
    </div>
  );
};

const B = () => {
  const { b } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  console.log('B');

  const handleClick = () => {
    dispatch({
      type: 'b/incremented',
    });
  };
  return (
    <div>
      <span>{b.value}</span>
      <Button onClick={handleClick}>B</Button>
    </div>
  );
};

const Index = () => {
  const rootReducer = combineReducers({
    a: aReducer,
    b: bReducer,
  });

  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <div>
        <A />
        <B />
      </div>
    </Provider>
  );
};

export default Index;
