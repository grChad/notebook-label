import type { ListFonts } from '../utils/types'

interface Props {
	onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void
	valueSelect: string
	dateList: ListFonts[]
}

export const SelectFont: React.FC<Props> = ({
	onChangeSelect,
	valueSelect,
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
				<option key={item.name} value={item.font}>
					{item.name}
				</option>
			))}
		</select>
	)
}

export default SelectFont
