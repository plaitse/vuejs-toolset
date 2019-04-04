# vuejs-toolset

## Firebase setup

From folders 18 and above, set Firebase rules to:
```js
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```
Otherwise:
```js
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```