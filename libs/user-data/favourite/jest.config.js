module.exports = {
  name: 'user-data-favourite',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/user-data/favourite',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
