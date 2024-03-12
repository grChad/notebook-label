export const capitalize = (str: string): string => {
	// Dividir el string en palabras separadas por espacios
	const words = str.split(' ')

	// Iterar sobre cada palabra
	const capitalizedWords = words.map((word) => {
		// Convertir la primera letra de cada palabra en mayúscula
		const capitalizedFirstLetter = word.charAt(0).toUpperCase()

		// Convertir el resto de la palabra en minúsculas
		const lowercaseRest = word.slice(1).toLowerCase()

		// Combinar la letra mayúscula y el resto de la palabra
		return capitalizedFirstLetter + lowercaseRest
	})

	// Unir las palabras en un solo string nuevamente
	const result = capitalizedWords.join(' ')

	return result
}
