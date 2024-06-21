import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/global.scss'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { store } from './store/index.ts'

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
)
