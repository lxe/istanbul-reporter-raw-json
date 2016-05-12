# istanbul-reporter-raw-json

Reporter for [istanbul](https://github.com/gotwarlost/istanbul) <1.0 that dumps collector.getFinalCoverage() into coverage.raw.json, just like [istanbul alpha](https://github.com/gotwarlost/istanbul/tree/v1.0.0-alpha.2).

Useful for tilities that produce coverage results through istanbul.

## Usage

Register the report using the istanbul Report factory:

```javascript
var rawJsonReporter = require('istanbul-reporter-raw-json');
var istanbul = require('istanbul');
istanbul.Report.register(rawJsonReporter);
```

Create a report after istanbul has collected coverage information:

```javascript
var report = require('istanbul').Report.create('raw-json');
```

## License

ISC