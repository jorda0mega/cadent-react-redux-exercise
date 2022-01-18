import { render, screen } from '@testing-library/react';
import ListTable from './components/ListTable';
import { Provider } from 'react-redux';
import configureStore from "./store/configure-store";

const store = configureStore();

test('renders learn react link', () => {
  const [queryByTestId] = render(<Provider store={store}><ListTable /></Provider>);
  expect(queryByTestId("list-table")).toBbeTruthy();
});
