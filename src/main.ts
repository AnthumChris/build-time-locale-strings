import { str, tmpSetBrowserLocale } from './locale'

tmpSetBrowserLocale('en')
console.log(str('foo'))
console.log(str('bar'))
// console.log(str('baz'))  // fails, key not present in all language files

tmpSetBrowserLocale('es')
console.log(str('foo'))
console.log(str('bar'))
// console.log(str('baz'))  // fails, key not present in all language files

tmpSetBrowserLocale('de')
console.log(str('foo'))
console.log(str('bar'))
// console.log(str('baz'))  // fails, key not present in all language files

console.log(str('item.create.header')) // awaiting translation
