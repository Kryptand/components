module.exports = {
  name: 'delayed-http-operations',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/delayed-http-operations',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
