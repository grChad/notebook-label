import { useAppSelector, useAppDispatch } from '../hooks/store'
import { renameItemSelected } from '../../store/user/selectSlice'
import { DataSelectElement } from '../utils/configs'

export default function ViewCurse() {
	const storeCurse = useAppSelector((state) => state.storeCurse)
	const dispatch = useAppDispatch()

	const handlePress = () => {
		dispatch(renameItemSelected(DataSelectElement.curse))
	}

	return (
		<button type="button" style={{ position: 'relative' }} onClick={handlePress}>
			<h2
				className="absolute inset-0 font-bold leading-[1]"
				style={{
					color: `${storeCurse.color}`,
					fontSize: `${storeCurse.size}px`,
					textShadow: `
            1px 1px var(--color-mantle),
            -1px -1px var(--color-mantle),
            -1px 1px var(--color-mantle),
            1px -1px var(--color-mantle)`,
				}}
			>
				{storeCurse.curse === '' ? '...?' : storeCurse.curse}
			</h2>
		</button>
	)
}
