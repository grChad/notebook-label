import type { ListColors, ListFonts, ListSizes } from '../utils/types'

interface Props {
	valueSelect: number | string
	onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void
	listSize?: ListSizes[]
	listFonts?: ListFonts[]
	listColor?: ListColors[]
	isSmall?: boolean
}

export const SelectSize: React.FC<Props> = ({
	valueSelect,
	onChangeSelect,
	listSize,
	listColor,
	listFonts,
	isSmall = false,
}) => {
	const listComponent = listSize || listColor || listFonts || []

	return (
		<select
			value={valueSelect}
			onChange={onChangeSelect}
			className="h-items text-center rounded-md py-1 border border-gray-300"
			style={{
				backgroundColor: listColor ? `${valueSelect}` : '',
				paddingInline: isSmall ? 15 : 8,
			}}
		>
			{listComponent.map((item) => (
				<option key={item.id} value={item.value}>
					{item.name}
				</option>
			))}
		</select>
	)
}

export default SelectSize
