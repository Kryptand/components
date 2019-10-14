module.exports = {
  name: 'common-data-gender',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common-data/gender',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
