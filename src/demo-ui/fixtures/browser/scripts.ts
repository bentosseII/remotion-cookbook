import type {DemoScript} from '../../script'
import type {BrowserScriptBaseState} from '../../apps/browser'
import {
  BROWSER_VIEWPORT_TARGET,
  getBrowserButtonTarget,
  getBrowserCheckboxTarget,
  getBrowserFieldTarget,
} from '../../apps/browser'

import {chromePreviewTabs} from './chrome-preview'

export const browserFormBaseState: BrowserScriptBaseState = {
  url: 'https://app.demo/sign-in',
  tabs: [{...chromePreviewTabs[0], title: 'Sign in', active: true}],
  fields: {
    email: '',
    password: '',
  },
  checkboxValues: {
    remember: false,
  },
}

export const browserFormScript: DemoScript = [
  {
    at: 0.4,
    type: 'focus',
    target: getBrowserFieldTarget('email'),
  },
  {
    at: 0.5,
    type: 'type',
    target: getBrowserFieldTarget('email'),
    text: 'hello@bentossell.com',
    cadence: 'human',
  },
  {
    at: 2.1,
    type: 'focus',
    target: getBrowserFieldTarget('password'),
  },
  {
    at: 2.2,
    type: 'type',
    target: getBrowserFieldTarget('password'),
    text: 'great-demo-flow',
    cadence: 'fast',
  },
  {
    at: 3.45,
    type: 'hover',
    target: getBrowserCheckboxTarget('remember'),
  },
  {
    at: 3.58,
    type: 'click',
    target: getBrowserCheckboxTarget('remember'),
  },
  {
    at: 4.1,
    type: 'hover',
    target: getBrowserButtonTarget('submit'),
  },
  {
    at: 4.4,
    type: 'click',
    target: getBrowserButtonTarget('submit'),
  },
]

export const browserDocsBaseState: BrowserScriptBaseState = {
  url: 'https://docs.demo/browser-shell',
  tabs: [{...chromePreviewTabs[0], title: 'Browser viewport movement', active: true}],
  pageTitle: 'Docs preview',
  scrollY: 0,
}

export const browserDocsScrollScript: DemoScript = [
  {
    at: 0.6,
    type: 'scroll',
    target: BROWSER_VIEWPORT_TARGET,
    deltaY: 180,
    duration: 0.85,
    inertia: true,
  },
  {
    at: 1.8,
    type: 'scroll',
    target: BROWSER_VIEWPORT_TARGET,
    deltaY: 240,
    duration: 0.95,
    inertia: true,
  },
]
