import type { DataNamesDefault, ListFonts, ListColorText, ListSizeText } from './types'

export const dataNamesDefault: DataNamesDefault = {
	names: 'Juan Carlos',
	surnames: 'García Rodríguez',
	font: 'system-ui',
	background: '#7dd3fc88',
	size: 26,
}
export const nameSlice: string = 'names'

export const fontName: ListFonts[] = [
	{ name: 'system', font: 'system-ui' },
	{ name: 'Sans', font: 'sans-serif' },
	{ name: 'Asap', font: 'Asap' },
	{ name: 'Comic', font: 'ComicNeue' },
	{ name: 'Mono1', font: 'Liberation Mono' },
	{ name: 'Mono2', font: 'monospace' },
]

export const backgroundNames: ListColorText[] = [
	{ id: crypto.randomUUID(), name: 'stone', color: '#d6d3d188' },
	{ id: crypto.randomUUID(), name: 'red', color: '#fca5a588' },
	{ id: crypto.randomUUID(), name: 'orange', color: '#fdba7488' },
	{ id: crypto.randomUUID(), name: 'yellow', color: '#fde04788' },
	{ id: crypto.randomUUID(), name: 'lime', color: '#bef26488' },
	{ id: crypto.randomUUID(), name: 'green', color: '#86efac88' },
	{ id: crypto.randomUUID(), name: 'teal', color: '#5eead488' },
	{ id: crypto.randomUUID(), name: 'sky', color: '#7dd3fc88' },
	{ id: crypto.randomUUID(), name: 'cyan', color: '#67e8f988' },
	{ id: crypto.randomUUID(), name: 'indigo', color: '#a5b4fc88' },
	{ id: crypto.randomUUID(), name: 'fuchsia', color: '#f0abfc88' },
	{ id: crypto.randomUUID(), name: 'pink', color: '#f9a8d488' },
	{ id: crypto.randomUUID(), name: 'rose', color: '#fda4af88' },
]

export const sizeNames: ListSizeText[] = [
	{ size: 22 },
	{ size: 24 },
	{ size: 26 },
	{ size: 28 },
	{ size: 30 },
	{ size: 32 },
	{ size: 34 },
]
