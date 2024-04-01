import {
	changeBackground,
	changeColor,
	changeFont,
	changeSize,
	renameClass,
} from '../../store/user/classroomSlice'
// NOTE: Global State
import { useAppDispatch, useAppSelector } from '../hooks/store'

import {
	colorTextClassroom,
	fontClassroom,
	sizeClassroom,
} from '../utils/dataForClassroom'
// NOTE: function and data
import { capitalize } from '../utils/functions'

// import components
import InputText from './InputText'
import SelectItems from './SelectItems'
import { IconBrush, IconFont, IconPainText, IconText, IconTextSize } from './IconsSVG'

export default function ControlClassroom() {
	const storeClassroom = useAppSelector((state) => state.storeClassroom)
	const dispatch = useAppDispatch()

	const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = capitalize(event.target.value)
		dispatch(renameClass(value))
	}

	const handleChangeFont = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const valueFont = event.target.value
		dispatch(changeFont(valueFont))
	}

	const handleChangeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const valueColor = event.target.value
		dispatch(changeColor(valueColor))
	}

	const handleChangeBg = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
				<InputText
					valueInput={storeClassroom.className}
					onChangeInput={handleChangeName}
				/>
			</div>

			<div className="flex flex-row justify-center items-center gap-1">
				<IconFont size={18} />
				<SelectItems
					valueSelect={storeClassroom.font}
					onChangeSelect={handleChangeFont}
					listFonts={fontClassroom}
				/>
			</div>

			<div className="flex flex-row justify-center items-center gap-1">
				<IconPainText size={18} />
				<SelectItems
					valueSelect={storeClassroom.color}
					onChangeSelect={handleChangeColor}
					listColor={colorTextClassroom}
				/>
			</div>

			<div className="flex flex-row justify-center items-center gap-1">
				<IconBrush size={18} />
				<SelectItems
					valueSelect={storeClassroom.background}
					onChangeSelect={handleChangeBg}
					listColor={colorTextClassroom}
				/>
			</div>

			<div className="flex flex-row justify-center items-center gap-1">
				<IconTextSize size={21} />
				<SelectItems
					valueSelect={storeClassroom.size}
					onChangeSelect={handleChangeSize}
					listSize={sizeClassroom}
					isSmall={true}
				/>
			</div>
		</>
	)
}
