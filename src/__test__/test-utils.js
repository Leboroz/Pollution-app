import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
// Redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../redux/pollution/reducer';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { pollution: reducer } }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }
  Wrapper.propTypes = {
    children: PropTypes.objectOf(String).isRequired,
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
