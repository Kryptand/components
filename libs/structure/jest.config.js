module.exports = {
  name: 'structure',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/structure',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
