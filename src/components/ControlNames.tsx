import { useAppSelector, useAppDispatch } from '../hooks/store'
import {
	renameNames,
	renameSurnames,
	changeBackground,
	changeSize,
} from '../../store/user/namesSlice'

import { capitalize } from '../utils/functions'
import { backgroundNames, sizeNames } from '../utils/dataForNames'

// import components
import InputText from './InputText'
import SelectSize from './SelectSize'
import { IconText, IconBrush, IconTextSize } from './IconsSVG'

export default function ControlNames() {
	const storeNames = useAppSelector((state) => state.storeNames)
	const dispatch = useAppDispatch()

	const handleChangeNames = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = capitalize(event.target.value)
		dispatch(renameNames(value))
	}
	const handleChangeSurnames = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = capitalize(event.target.value)
		dispatch(renameSurnames(value))
	}

	const handleChangeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const valueColor = event.target.value
		dispatch(changeBackground(valueColor))
	}

	const handleChangeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const valueSize = event.target.value
		dispatch(changeSize(Number(valueSize)))
	}

	return (
		<>
			<div className="flex flex-row justify-center items-center gap-1">
				<IconText size={18} />
				<InputText name={storeNames.names} changeName={handleChangeNames} />
				<InputText name={storeNames.surnames} changeName={handleChangeSurnames} />
			</div>
			<div className="flex flex-row justify-center items-center gap-1">
				<IconBrush size={18} />
				<select
					onChange={handleChangeColor}
					value={storeNames.background}
					style={{
						width: 100,
						textAlign: 'center',
						backgroundColor: `${storeNames.background}`,
						borderRadius: 5,
						padding: '3px 1rem',
						height: 'var(--heightItems)',
						maxHeight: 40,
						overflowY: 'auto',
					}}
				>
					{backgroundNames.map((item) => (
						<option key={item.id} value={item.color}>
							{item.name}
						</option>
					))}
				</select>
			</div>
			<div className="flex flex-row justify-center items-center gap-1">
				<IconTextSize size={21} />
				<SelectSize
					size={storeNames.size}
					handleChangeSize={handleChangeSize}
					dateList={sizeNames}
				/>
			</div>
		</>
	)
}
