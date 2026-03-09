import React from 'react'
import {TerminalScene} from '../cookbook-templates'

export const V20aBadVsGoodPromptTerminal: React.FC = () => {
  return (
    <TerminalScene
      title='mini@mac-mini: ~/repos/prompts'
      command={`$ compare-prompts bad.txt good.txt`}
      lines={[
        {"segments":[{"text":"BAD: \"build me an ai app\""}]},
        {"segments":[{"text":"→ ","color":"#d29922","weight":500},{"text":"output: generic scaffold, unclear scope"}]},
        {"segments":[{"text":""}]},
        {"segments":[{"text":"GOOD: \"build todo app from todo.md with done checks\""}]},
        {"segments":[{"text":"→ ","color":"#d29922","weight":500},{"text":"output: clear plan, small steps, testable result"}]},
        {"segments":[{"text":""}]},
        {"segments":[{"text":"Tip: include goal, constraints, and definition of done."}]}
      ]}
      outroLabel='Prompt quality matters'
      outroSublabel='Specific beats vague'
    />
  )
}
