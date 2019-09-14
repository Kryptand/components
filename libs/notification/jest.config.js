module.exports = {
  name: 'notification',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/notification',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
