// NOTE: Global State
import { useAppSelector, useAppDispatch } from '../hooks/store'
import {
	renameNames,
	renameSurnames,
	changeBackground,
	changeSize,
} from '../../store/user/namesSlice'

// NOTE: function and data
import { capitalize } from '../utils/functions'
import { backgroundNames, sizeNames } from '../utils/dataForNames'

// import components
import InputText from './InputText'
import SelectSize from './SelectSize'
import SelectColor from './SelectColor'
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
				<InputText valueInput={storeNames.names} onChangeInput={handleChangeNames} />
				<InputText
					valueInput={storeNames.surnames}
					onChangeInput={handleChangeSurnames}
				/>
			</div>

			<div className="flex flex-row justify-center items-center gap-1">
				<IconBrush size={18} />
				<SelectColor
					handleChangeColor={handleChangeColor}
					color={storeNames.background}
					dateList={backgroundNames}
				/>
			</div>

			<div className="flex flex-row justify-center items-center gap-1">
				<IconTextSize size={21} />
				<SelectSize
					valueSelect={storeNames.size}
					onChangeSelect={handleChangeSize}
					dateList={sizeNames}
				/>
			</div>
		</>
	)
}
