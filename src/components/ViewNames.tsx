import { useAppSelector, useAppDispatch } from '../hooks/store'
import { renameItemSelected } from '../../store/user/selectSlice'
import { DataSelectElement } from '../utils/configs'

export default function ViewNames() {
	const storeNames = useAppSelector((state) => state.storeNames)
	const dispatch = useAppDispatch()

	const handlePress = () => {
		dispatch(renameItemSelected(DataSelectElement.names))
	}

	return (
		<div className="relative h-40">
			<button
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					display: 'flex',
					flexDirection: 'column',
					borderRadius: 5,
					padding: '8px 12px',
					backgroundColor: `${storeNames.background}`,
				}}
				className="hover:border-gray-400"
				type="button"
				onClick={handlePress}
			>
				<h2
					style={{
						fontWeight: 'bold',
						whiteSpace: 'nowrap',
						fontSize: `${storeNames.size}px`,
					}}
				>
					{storeNames.names === '' ? '...?' : storeNames.names}
				</h2>
				<h2
					style={{
						fontWeight: 'bold',
						whiteSpace: 'nowrap',
						fontSize: `${storeNames.size}px`,
					}}
				>
					{storeNames.surnames === '' ? '...?' : storeNames.surnames}
				</h2>
			</button>
		</div>
	)
}
