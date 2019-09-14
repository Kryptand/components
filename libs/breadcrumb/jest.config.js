module.exports = {
  name: 'breadcrumb',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/breadcrumb',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
