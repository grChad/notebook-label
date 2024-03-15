// NOTE: Global State
import { useAppSelector, useAppDispatch } from '../hooks/store'
import {
	renameClass,
	changeColor,
	changeBackground,
	changeSize,
} from '../../store/user/classroomSlice'

// NOTE: function and data
import { capitalize } from '../utils/functions'
import { colorTextClassroom, sizeClassroom } from '../utils/dataForClassroom'

// import components
import InputText from './InputText'
import SelectSize from './SelectSize'
import SelectColor from './SelectColor'
import { IconText, IconPainText, IconBrush, IconTextSize } from './IconsSVG'

export default function ControlClassroom() {
	const storeClassroom = useAppSelector((state) => state.storeClassroom)
	const dispatch = useAppDispatch()

	const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = capitalize(event.target.value)
		dispatch(renameClass(value))
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
				<IconPainText size={18} />
				<SelectColor
					handleChangeColor={handleChangeColor}
					color={storeClassroom.color}
					dateList={colorTextClassroom}
				/>
			</div>

			<div className="flex flex-row justify-center items-center gap-1">
				<IconBrush size={18} />
				<SelectColor
					handleChangeColor={handleChangeBg}
					color={storeClassroom.background}
					dateList={colorTextClassroom}
				/>
			</div>

			<div className="flex flex-row justify-center items-center gap-1">
				<IconTextSize size={21} />
				<SelectSize
					valueSelect={storeClassroom.size}
					onChangeSelect={handleChangeSize}
					dateList={sizeClassroom}
				/>
			</div>
		</>
	)
}
