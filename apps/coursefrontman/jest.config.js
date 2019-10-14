module.exports = {
  name: 'coursefrontman',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/coursefrontman',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
