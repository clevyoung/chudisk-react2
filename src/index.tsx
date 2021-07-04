import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './App';
import { store, StoreContext } from './stores/store';
import { GlobalStyle } from './styles';

export const history = createBrowserHistory();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root')
);
