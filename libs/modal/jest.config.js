module.exports = {
  name: 'modal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/modal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
