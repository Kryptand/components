module.exports = {
  name: 'master-data-company',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/master-data/company',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
