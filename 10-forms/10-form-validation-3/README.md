# 10-form-validation-3

## Firebase setup

```js
{
  "rules": {
    ".read": true,
    ".write": true,
    "users": {
      ".indexOn": ["email"]
    }
  }
}
```
