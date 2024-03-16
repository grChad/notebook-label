import type { DateCurseDefault, ListFonts, ListColorText, ListSizeText } from './types'

export const dataCurseDefault: DateCurseDefault = {
	curse: 'Matemática',
	font: 'system-ui',
	color: '#0ea5e9',
	size: 70,
}
export const nameSlice: string = 'curse'

export const fontCurse: ListFonts[] = [
	{ name: 'system', font: 'system-ui' },
	{ name: 'Sans', font: 'sans-serif' },
	{ name: 'Asap', font: 'Asap' },
	{ name: 'Comic', font: 'ComicNeue' },
	{ name: 'Mono1', font: 'Liberation Mono' },
	{ name: 'Mono2', font: 'monospace' },
]

export const colorTextCurse: ListColorText[] = [
	{ id: crypto.randomUUID(), name: 'stone', color: '#78716c' },
	{ id: crypto.randomUUID(), name: 'red', color: '#ef4444' },
	{ id: crypto.randomUUID(), name: 'orange', color: '#f97316' },
	{ id: crypto.randomUUID(), name: 'amber', color: '#f59e0b' },
	{ id: crypto.randomUUID(), name: 'yellow', color: '#eab308' },
	{ id: crypto.randomUUID(), name: 'lime', color: '#84cc16' },
	{ id: crypto.randomUUID(), name: 'green', color: '#22c55e' },
	{ id: crypto.randomUUID(), name: 'esmerald', color: '#10b981' },
	{ id: crypto.randomUUID(), name: 'teal', color: '#14b8a6' },
	{ id: crypto.randomUUID(), name: 'cyan', color: '#06b6d4' },
	{ id: crypto.randomUUID(), name: 'sky', color: '#0ea5e9' },
	{ id: crypto.randomUUID(), name: 'blue', color: '#3b82f6' },
	{ id: crypto.randomUUID(), name: 'indigo', color: '#6366f1' },
	{ id: crypto.randomUUID(), name: 'violet', color: '#8b5cf6' },
	{ id: crypto.randomUUID(), name: 'purple', color: '#a855f7' },
	{ id: crypto.randomUUID(), name: 'fuchsia', color: '#d946ef' },
	{ id: crypto.randomUUID(), name: 'pink', color: '#ec4899' },
	{ id: crypto.randomUUID(), name: 'rose', color: '#f43f5e' },
]

export const sizeCurse: ListSizeText[] = [
	{ size: 50 },
	{ size: 55 },
	{ size: 60 },
	{ size: 65 },
	{ size: 70 },
	{ size: 75 },
	{ size: 80 },
	{ size: 85 },
]
