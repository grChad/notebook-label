import { useState } from 'react'

// import Image
import Image from '../assets/matematica.webp'

export default function CoverImage() {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<button
			type="button"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{ ...styles.button, ...(isHovered && { borderColor: '#D3D3D3' }) }}
		>
			<img style={styles.image} src={Image} alt="cover" />
		</button>
	)
}

const styles = {
	button: {
		width: 270,
		height: 270,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
	},
}
