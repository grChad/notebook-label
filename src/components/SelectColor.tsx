import { ListColorText } from '../utils/types'

interface Props {
	handleChangeColor: (event: React.ChangeEvent<HTMLSelectElement>) => void
	color: string
	dateList: ListColorText[]
}
export const SelectColor: React.FC<Props> = ({ handleChangeColor, color, dateList }) => {
	return (
		<select
			onChange={handleChangeColor}
			value={color}
			style={{
				width: 100,
				textAlign: 'center',
				backgroundColor: `${color}`,
				borderRadius: 5,
				padding: '3px 1rem',
				height: 'var(--heightItems)',
				maxHeight: 40,
				overflowY: 'auto',
			}}
		>
			{dateList.map((item) => (
				<option key={item.id} value={item.color}>
					{item.name}
				</option>
			))}
		</select>
	)
}

export default SelectColor
