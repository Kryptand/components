module.exports = {
  name: 'patients',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/patients',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
