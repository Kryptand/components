module.exports = {
  name: 'common-data-title',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common-data/title',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
