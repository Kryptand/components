module.exports = {
  name: 'message',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/message',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
