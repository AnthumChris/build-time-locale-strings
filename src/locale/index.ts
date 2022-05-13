import en from './strings/english'
import es from './strings/spanish'
import de from './strings/german'
import untranslated from './strings/pending-translation'

const locales = { en, es, de }

type Locale = keyof typeof locales
type UntranslatedId = keyof typeof untranslated
type TranslatedId = keyof (
  | typeof en
  | typeof es
  | typeof de
  & typeof untranslated
)
type StringId = UntranslatedId | TranslatedId

// simulates browser-provided locale code
let currentLocale: Locale = 'en'

// util to be provided in dev API. Use untranslated values (if exists) first
function str(id: StringId) {
  return untranslated[id as UntranslatedId] ?? locales[currentLocale][id as TranslatedId]
}

// example function for simulating browser-provided Locale
function tmpSetBrowserLocale(locale: Locale) {
  currentLocale = locale
}

export {
  str,
  tmpSetBrowserLocale,
}

