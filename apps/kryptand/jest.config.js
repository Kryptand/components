module.exports = {
  name: 'kryptand',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/kryptand',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
