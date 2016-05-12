'use strict';

var util = require('util');
var path = require('path');
var istanbul = require('istanbul');

var Report = istanbul.Report;
var FileWriter = istanbul.FileWriter;

function RawJsonReporter(opts) {
  this.opts = opts || {};
  this.opts.dir = this.opts.dir || process.cwd();
  this.opts.file = this.opts.file || this.getDefaultConfig().file;
  this.opts.writer = this.opts.writer || null;
}

RawJsonReporter.TYPE = 'raw-json';
util.inherits(RawJsonReporter, Report);

Report.mix(RawJsonReporter, {
  synopsis: function() {
    return '' +
      'prints the raw coverage object as JSON to a file. ' +
      'Just like babel 1.0 coverage.raw.json';
  },

  getDefaultConfig: function() {
    return {
      file: 'coverage.raw.json'
    };
  },

  writeReport: function(collector, sync) {
    var outputFile = path.resolve(this.opts.dir, this.opts.file),
      writer = this.opts.writer || new FileWriter(sync),
      that = this;

    writer.on('done', function() {
      that.emit('done');
    });

    writer.writeFile(outputFile, function(contentWriter) {
      contentWriter.write(JSON.stringify(collector.getFinalCoverage()));
    });

    writer.done();
  }
});

module.exports = RawJsonReporter;
