import { useEffect, useRef, useState } from 'react'

// import Image
import DEFAULT_LOGO from '../assets/scorza03.png'

export default function ViewLogo() {
	const inputRef = useRef<HTMLInputElement>(null)
	const [image, setImage] = useState('')

	const handleClick = () => inputRef.current?.click()

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target
		if (!files || files.length === 0) {
			throw new Error('Failed to find root element')
		}
		const file = files[0]
		const imageUrl = URL.createObjectURL(file)
		setImage(imageUrl)
	}

	useEffect(() => {
		return () => {
			// revocar URL, para evitar fuga de memoria.
			if (image) {
				URL.revokeObjectURL(image)
			}
		}
	}, [image])

	return (
		<button type="button" style={styles.button} onClick={handleClick}>
			{image ? (
				<img style={styles.image} src={image} alt="Logo" title="Logo" />
			) : (
				<img src={DEFAULT_LOGO} alt="Logo" title="Logo" />
			)}
			<input type="file" ref={inputRef} onChange={onChange} style={{ display: 'none' }} />
		</button>
	)
}

const styles = {
	button: {
		width: 80,
		height: 80,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
	},
}
