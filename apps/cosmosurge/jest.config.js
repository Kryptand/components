module.exports = {
  name: 'cosmosurge',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cosmosurge',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
