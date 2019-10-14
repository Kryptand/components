module.exports = {
  name: 'common-data-salutation',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common-data/salutation',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
