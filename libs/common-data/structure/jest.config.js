module.exports = {
  name: 'common-data-structure',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common-data/structure',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
