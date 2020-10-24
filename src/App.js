import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config';

import { HashRouter } from 'react-router-dom'


import routes from './router';
import store from './store';

import HYAppHeader from '@/components/app-header';
import HYAppFooter from '@/components/app-footer';

import HYAppPlayBar from './pages/player/app-play-bar';


export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <HYAppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <HYAppPlayBar />
        <HYAppFooter />
      </HashRouter>
    </Provider>
  )
})
