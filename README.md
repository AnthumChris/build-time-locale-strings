This example demonstrates a design pattern for build-time validation of Locale strings.

1. All keys must be present in *every* language file to be used by `str()`
1. `pending-translation.ts` values are always used first if they exist.
1. `str()` requires valid keys that exist in either:
    1. pending-translation
    1. One of the translated files

### Dev installation

```sh
$ npm install
$ npm run dev
```
