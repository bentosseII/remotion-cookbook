import type {CodexThemeName, CodexThemeTokens} from './tokens'

export type CodexFileTreeItem = {
	id: string
	label: string
	indent?: number
	active?: boolean
	kind?: 'file' | 'folder'
}

export type CodexEditorTab = {
	id: string
	label: string
	active?: boolean
	modified?: boolean
}

export type CodexToolRun = {
	id: string
	label: string
	status: 'idle' | 'running' | 'success' | 'warning'
}

export type CodexAssistantBlock = {
	id: string
	title: string
	body: string
}

export type CodexTerminalLine = {
	id: string
	text: string
	tone?: 'default' | 'success' | 'warning' | 'muted'
}

export type CodexShellProps = {
	title: string
	prompt: string
	promptInput?: string
	fileTree: readonly CodexFileTreeItem[]
	editorTabs: readonly CodexEditorTab[]
	codeLines: readonly string[]
	toolRuns: readonly CodexToolRun[]
	assistantBlocks: readonly CodexAssistantBlock[]
	terminalLines: readonly CodexTerminalLine[]
	diffTitle?: string
	diffFiles?: readonly string[]
	applyStatus?: string
	statusBarText?: string
	branchName?: string
	theme?: CodexThemeName | CodexThemeTokens
	minHeight?: number
	maxWidth?: number | string
}
