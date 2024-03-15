import { useAppSelector, useAppDispatch } from '../hooks/store'
import { renameItemSelected } from '../../store/user/selectSlice'
import { DataSelectElement as Data } from '../utils/configs'

export default function ViewClassroom() {
	const storeClass = useAppSelector((store) => store.storeClassroom)
	const dispatch = useAppDispatch()

	const handleClick = () => {
		dispatch(renameItemSelected(Data.classroom))
	}

	return (
		<button type="button" onClick={handleClick}>
			<div className="flex justify-center items-center">
				<span
					style={{
						fontWeight: 'bold',
						marginRight: 5,
						fontSize: `${storeClass.size}px`,
					}}
				>
					Aula:
				</span>
				<span
					style={{
						fontWeight: 'bold',
						paddingInline: 10,
						borderRadius: 3,
						fontSize: `${storeClass.size - 5}px`,
						backgroundColor: `${storeClass.background}`,
						color: `${storeClass.color}`,
						textShadow: '0px 0px 1px black',
					}}
				>
					{storeClass.className}
				</span>
			</div>
		</button>
	)
}
