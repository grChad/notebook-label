import './styles/global.css'

// import components
import BarrControl from './components/BarrControl'
import ViewClassroom from './components/ViewClassroom'
import ViewCurse from './components/ViewCurse'
import ViewImage from './components/ViewImage'
import ViewNames from './components/ViewNames'

// import Image
import DEFAULT_LOGO from './assets/scorza03.png'
import DEFAULT_IMAGE from './assets/matematica.webp'

function App() {
	return (
		<div className="app">
			<BarrControl />
			{/* una separacion de la barra de control */}
			<div style={{ marginTop: 45 }}>
				<div
					className="flex w-[600px] flex-col justify-between rounded-3xl
          border-8 border-sky-500 p-4"
				>
					<div className="grid grid-cols-[80px_1fr] gap-4">
						<ViewImage default_image={DEFAULT_LOGO} size={80} alt="Logo" />
						<ViewCurse />
					</div>

					<div className="grid grid-cols-[1fr_270px] justify-between gap-4">
						<div className="flex flex-col justify-evenly">
							<ViewNames />
							<ViewClassroom />
						</div>
						<ViewImage default_image={DEFAULT_IMAGE} size={270} alt="Imagen de Portada" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
