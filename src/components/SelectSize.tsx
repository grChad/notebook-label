interface DateList {
	size: number
}

interface Props {
	size: number
	handleChangeSize: (event: React.ChangeEvent<HTMLSelectElement>) => void
	dateList: DateList[]
}

export const SelectSize: React.FC<Props> = ({ size, handleChangeSize, dateList }) => {
	return (
		<select
			onChange={handleChangeSize}
			value={size}
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
