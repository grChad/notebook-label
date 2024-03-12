import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from '../store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root')

if (!rootElement) {
	throw new Error('Failed to find root element')
}

ReactDOM.createRoot(rootElement).render(
	<Provider store={store}>
		<App />
	</Provider>,
)
