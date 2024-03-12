import './styles/global.css'

// import components
import ViewCurse from './components/ViewCurse'
import ViewNames from './components/ViewNames'
import BarrControl from './components/BarrControl'

import SchoolLogo from './components/SchoolLogo'
import CoverImage from './components/CoverImage'

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
						<SchoolLogo />
						<ViewCurse />
					</div>

					<div className="grid grid-cols-[1fr_270px] items-center gap-4">
						<div>
							<ViewNames />
							<p className="text-3xl font-bold">Aula: Perú</p>
						</div>
						<CoverImage />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
