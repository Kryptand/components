module.exports = {
  name: 'cards',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/cards',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
