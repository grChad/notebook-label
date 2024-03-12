export default function ButtonPrint() {
	return (
		<div className="absolute top-1 right-1">
			<button
				type="button"
				className="bg-sky-400 py-1 text-white font-bold"
				onClick={() => window.print()}
			>
				Inprimir
			</button>
		</div>
	)
}
