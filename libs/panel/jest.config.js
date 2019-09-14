module.exports = {
  name: 'panel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/panel',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
