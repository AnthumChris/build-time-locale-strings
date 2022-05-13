import { str, setBrowserLocale } from './locale'

setBrowserLocale('en')
str('foo')
str('bar')
// str('baz')  // fails, key not present in all language files

setBrowserLocale('es')
str('foo')
str('bar')
// str('baz')  // fails, key not present in all language files

setBrowserLocale('de')
str('foo')
str('bar')
// str('baz')  // fails, key not present in all language files

str('item.create.header') // awaiting translation
