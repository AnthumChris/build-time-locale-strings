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
)
type LocaleStringId = UntranslatedId | TranslatedId

// simulates browser-provided locale code
let currentLocale: Locale = 'en'
function setBrowserLocale(locale: Locale) {
  currentLocale = locale
}

// util to be provided in dev API. Use untranslated values (if exists) first
function str(id: LocaleStringId) {
  return untranslated[id as UntranslatedId] ?? locales[currentLocale][id as TranslatedId]
}

export {
  setBrowserLocale,
  str,
}

