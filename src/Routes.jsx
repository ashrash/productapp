/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import App from './components/App';
import Product from './containers/Product';
import ImageGallery from './containers/ImageGallery';

class Routes extends React.Component {
  render() {
    return (
      <App>
        <Switch>
          <Route exact path="/" render={() => <Product />} />
          <Route path="/image-gallery" render={() => <ImageGallery />} />
        </Switch>
      </App>
    );
  }
}

export default Routes;
