import type { DataNamesDefault, ListFonts, ListColors, ListSizes } from './types'

export const dataNamesDefault: DataNamesDefault = {
	names: 'Juan Carlos',
	surnames: 'García Rodríguez',
	font: 'system-ui',
	background: '#7dd3fc88',
	size: 26,
}
export const nameSlice: string = 'names'

export const fontName: ListFonts[] = [
	{ id: 'system', name: 'system', value: 'system-ui' },
	{ id: 'Sans', name: 'Sans', value: 'sans-serif' },
	{ id: 'Asap', name: 'Asap', value: 'Asap' },
	{ id: 'Comic', name: 'Comic', value: 'ComicNeue' },
	{ id: 'Mono1', name: 'Mono1', value: 'Liberation Mono' },
	{ id: 'Mono2', name: 'Mono2', value: 'monospace' },
]

export const backgroundNames: ListColors[] = [
	{ id: 'stone', name: 'stone', value: '#d6d3d188' },
	{ id: 'red', name: 'red', value: '#fca5a588' },
	{ id: 'orange', name: 'orange', value: '#fdba7488' },
	{ id: 'yellow', name: 'yellow', value: '#fde04788' },
	{ id: 'lime', name: 'lime', value: '#bef26488' },
	{ id: 'green', name: 'green', value: '#86efac88' },
	{ id: 'teal', name: 'teal', value: '#5eead488' },
	{ id: 'sky', name: 'sky', value: '#7dd3fc88' },
	{ id: 'cyan', name: 'cyan', value: '#67e8f988' },
	{ id: 'indigo', name: 'indigo', value: '#a5b4fc88' },
	{ id: 'fuchsia', name: 'fuchsia', value: '#f0abfc88' },
	{ id: 'pink', name: 'pink', value: '#f9a8d488' },
	{ id: 'rose', name: 'rose', value: '#fda4af88' },
]

export const sizeNames: ListSizes[] = [
	{ id: '22', name: '22', value: 22 },
	{ id: '24', name: '24', value: 24 },
	{ id: '26', name: '26', value: 26 },
	{ id: '28', name: '28', value: 28 },
	{ id: '30', name: '30', value: 30 },
	{ id: '32', name: '32', value: 32 },
	{ id: '34', name: '34', value: 34 },
]
