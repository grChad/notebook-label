// NOTE: Global State
import { useAppSelector, useAppDispatch } from '../hooks/store'
import {
	renameCurse,
	changeFont,
	changeColor,
	changeSize,
} from '../../store/user/curseSlice'

// NOTE: function and data
import { capitalize } from '../utils/functions'
import { colorTextCurse, fontCurse, sizeCurse } from '../utils/dataForCurse'

// import components
import InputText from './InputText'
import SelectSize from './SelectSize'
import SelectColor from './SelectColor'
import SelectFont from './SelectFont'
import { IconText, IconFont, IconPainText, IconTextSize } from './IconsSVG'

export default function ControlsCurse() {
	const storeCurse = useAppSelector((state) => state.storeCurse)
	const dispatch = useAppDispatch()

	const changeCurse = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = capitalize(event.target.value)
		dispatch(renameCurse(value))
	}
	const handleChangeFont = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const valueFont = event.target.value
		dispatch(changeFont(valueFont))
	}

	const handleChangeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const valueColor = event.target.value
		dispatch(changeColor(valueColor))
	}

	const handleChangeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const valueSize = event.target.value
		dispatch(changeSize(Number(valueSize)))
	}

	return (
		<>
			<div className="flex flex-row justify-center items-center gap-1">
				<IconText size={18} />
				<InputText valueInput={storeCurse.curse} onChangeInput={changeCurse} />
			</div>

			<div className="flex flex-row justify-center items-center gap-1">
				<IconFont size={18} />
				<SelectFont
					onChangeSelect={handleChangeFont}
					valueSelect={storeCurse.font}
					dateList={fontCurse}
				/>
			</div>

			<div className="flex flex-row justify-center items-center gap-1">
				<IconPainText size={18} />
				<SelectColor
					handleChangeColor={handleChangeColor}
					color={storeCurse.color}
					dateList={colorTextCurse}
				/>
			</div>

			<div className="flex flex-row justify-center items-center gap-1">
				<IconTextSize size={21} />
				<SelectSize
					valueSelect={storeCurse.size}
					onChangeSelect={handleChangeSize}
					dateList={sizeCurse}
				/>
			</div>
		</>
	)
}
