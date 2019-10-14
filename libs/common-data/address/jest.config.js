module.exports = {
  name: 'common-data-address',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common-data/address',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
