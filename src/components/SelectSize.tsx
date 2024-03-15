import { ListSizeText } from '../utils/types'

interface Props {
	valueSelect: number
	onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void
	dateList: ListSizeText[]
}

export const SelectSize: React.FC<Props> = ({
	valueSelect,
	onChangeSelect,
	dateList,
}) => {
	return (
		<select
			onChange={onChangeSelect}
			value={valueSelect}
			style={{
				textAlign: 'center',
				borderRadius: 5,
				padding: '3px 1rem',
				height: 'var(--heightItems)',
				border: '1px solid var(--color-gray-300)',
			}}
		>
			{dateList.map((item) => (
				<option key={item.size} value={item.size}>
					{item.size}
				</option>
			))}
		</select>
	)
}

export default SelectSize
