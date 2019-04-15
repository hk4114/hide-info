# hide-info

## How to use?

1. install package
```bash
npm i hide-info -D
```
2. usage
```js
const HIDE = require('hide-info');
const f = '1234567898765'
const b = HIDE(f,3,3)
console.log(b) // 123*******765
```