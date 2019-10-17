module.exports = {
  name: 'infrastructure-contracts',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/infrastructure-contracts',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
