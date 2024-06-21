import AppRouter from './routes/AppRouter'
import './app.scss'
import useLocalStorageMonitor from './hooks/useLocalStorageMonitor';
function App() {
  useLocalStorageMonitor();
  return (
    <div className='app'>
      <AppRouter />
    </div>

  )
}

export default App
