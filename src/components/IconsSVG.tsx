interface Props {
	size?: number
}

export const IconPainText: React.FC<Props> = ({ size = 20 }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 576 512" fill="var(--color-surface)">
			<title>color de texto</title>
			<path d="M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S517.7-4.4 499.1 9.6L262.4 187.2c-24 18-38.2 46.1-38.4 76.1L339.3 367.1zm-19.6 25.4l-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9 .2 7.8 .6 11.6C98.4 429.1 86.4 448 68.8 448H64c-17.7 0-32 14.3-32 32s14.3 32 32 32H208c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z" />
		</svg>
	)
}

export const IconBrush: React.FC<Props> = ({ size = 20 }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 384 512" fill="var(--color-surface)">
			<title>color de fondo</title>
			<path d="M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
		</svg>
	)
}

export const IconFont: React.FC<Props> = ({ size = 20 }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 448 512" fill="var(--color-surface)">
			<title>Renombrar</title>
			<path d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z" />
		</svg>
	)
}

export const IconText: React.FC<Props> = ({ size = 20 }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 448 512" fill="var(--color-surface)">
			<title>curso</title>
			<path d="M64 96v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V80C0 53.5 21.5 32 48 32H224 400c26.5 0 48 21.5 48 48v48c0 17.7-14.3 32-32 32s-32-14.3-32-32V96H256l0 320h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H144c-17.7 0-32-14.3-32-32s14.3-32 32-32h48l0-320H64z" />
		</svg>
	)
}

export const IconTextSize: React.FC<Props> = ({ size = 20 }) => {
	return (
		<svg
			width={size}
			height={size * 0.8}
			viewBox="0 0 640 512"
			fill="var(--color-surface)"
		>
			<title>Tamano de texto</title>
			<path d="M64 128V96h96l0 320H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H256c17.7 0 32-14.3 32-32s-14.3-32-32-32H224l0-320h96v32c0 17.7 14.3 32 32 32s32-14.3 32-32V80c0-26.5-21.5-48-48-48H192 48C21.5 32 0 53.5 0 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32zM384 304V288h64l0 128H432c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H512l0-128h64v16c0 17.7 14.3 32 32 32s32-14.3 32-32V272c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v32c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
		</svg>
	)
}
