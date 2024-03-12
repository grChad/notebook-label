import { useAppSelector, useAppDispatch } from '../hooks/store'
import { renameCurse, changeColor, changeSize } from '../../store/user/curseSlice'

import { capitalize } from '../utils/functions'
import { colorTextCurse } from '../utils/selectColors'

// import components
import { IconText, IconPainText, IconTextSize } from './IconsSVG'
import InputText from './InputText'

export default function ControlsCurse() {
	const storeCurse = useAppSelector((state) => state.storeCurse)
	const dispatch = useAppDispatch()

	const changeCurse = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = capitalize(event.target.value)
		dispatch(renameCurse(value))
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
				<InputText name={storeCurse.curse} changeName={changeCurse} />
			</div>
			<div className="flex flex-row justify-center items-center gap-1">
				<IconPainText size={18} />
				<select
					onChange={handleChangeColor}
					value={storeCurse.color}
					style={{
						width: 100,
						textAlign: 'center',
						backgroundColor: `${storeCurse.color}`,
						borderRadius: 5,
						padding: '3px 1rem',
						height: 'var(--heightItems)',
						maxHeight: 40,
						overflowY: 'auto',
					}}
				>
					{colorTextCurse.map((item) => (
						<option key={item.id} value={item.color}>
							{item.name}
						</option>
					))}
				</select>
			</div>
			<div className="flex flex-row justify-center items-center gap-1">
				<IconTextSize size={21} />
				<select
					onChange={handleChangeSize}
					style={{
						textAlign: 'center',
						borderRadius: 5,
						padding: '3px 1rem',
						height: 'var(--heightItems)',
						border: '1px solid var(--color-gray-300)',
					}}
				>
					<option value="50">50</option>
					<option value="55">55</option>
					<option value="60">60</option>
					<option value="65">65</option>
					<option value="70" selected>
						70
					</option>
					<option value="75">75</option>
					<option value="80">80</option>
					<option value="85">85</option>
				</select>
			</div>
		</>
	)
}
