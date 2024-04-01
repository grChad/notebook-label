import type { DateCurseDefault, ListFonts, ListColors, ListSizes } from './types'

export const dataCurseDefault: DateCurseDefault = {
	curse: 'Matemática',
	font: 'system-ui',
	color: '#0ea5e9',
	size: 70,
}
export const nameSlice: string = 'curse'

export const fontCurse: ListFonts[] = [
	{ id: 'system', name: 'system', value: 'system-ui' },
	{ id: 'Sans', name: 'Sans', value: 'sans-serif' },
	{ id: 'Asap', name: 'Asap', value: 'Asap' },
	{ id: 'Comic', name: 'Comic', value: 'ComicNeue' },
	{ id: 'Mono1', name: 'Mono1', value: 'Liberation Mono' },
	{ id: 'Mono2', name: 'Mono2', value: 'monospace' },
]

export const colorTextCurse: ListColors[] = [
	{ id: 'stone', name: 'stone', value: '#78716c' },
	{ id: 'red', name: 'red', value: '#ef4444' },
	{ id: 'orange', name: 'orange', value: '#f97316' },
	{ id: 'amber', name: 'amber', value: '#f59e0b' },
	{ id: 'yellow', name: 'yellow', value: '#eab308' },
	{ id: 'lime', name: 'lime', value: '#84cc16' },
	{ id: 'green', name: 'green', value: '#22c55e' },
	{ id: 'esmerald', name: 'esmerald', value: '#10b981' },
	{ id: 'teal', name: 'teal', value: '#14b8a6' },
	{ id: 'cyan', name: 'cyan', value: '#06b6d4' },
	{ id: 'sky', name: 'sky', value: '#0ea5e9' },
	{ id: 'blue', name: 'blue', value: '#3b82f6' },
	{ id: 'indigo', name: 'indigo', value: '#6366f1' },
	{ id: 'violet', name: 'violet', value: '#8b5cf6' },
	{ id: 'purple', name: 'purple', value: '#a855f7' },
	{ id: 'fuchsia', name: 'fuchsia', value: '#d946ef' },
	{ id: 'pink', name: 'pink', value: '#ec4899' },
	{ id: 'rose', name: 'rose', value: '#f43f5e' },
]

export const sizeCurse: ListSizes[] = [
	{ id: '50', name: '50', value: 50 },
	{ id: '55', name: '55', value: 55 },
	{ id: '60', name: '60', value: 60 },
	{ id: '65', name: '65', value: 65 },
	{ id: '70', name: '70', value: 70 },
	{ id: '75', name: '75', value: 75 },
	{ id: '80', name: '80', value: 80 },
	{ id: '85', name: '85', value: 85 },
]
