jQuery jcollapser
------------------
A collapse plugin

## Version

```
@version  2.0.0
@since    2010
@author   Eqdkp-Plus Dev Team
```

## Dependencies

+ jquery.js

## Usage
```html
<script src="jquery.jcollapser.js"></script>

<div id="collapser"></div>
```

```js
$('#collapser').jcollapser({ state: 'active', persistence:	'true'});
```

## Options

Name  | Values
------------- | -------- | ----------------------------------
state | active / inactive | init collapsed or uncollapsed
persistence | true / false | Use the localstorage to store the state of the collapser
