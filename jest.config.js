module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy'
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'cssm',
    'json',
    'node'
  ]
}
