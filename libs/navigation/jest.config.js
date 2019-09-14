module.exports = {
  name: 'navigation',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/navigation',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
