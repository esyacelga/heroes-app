module.exports = {
    //testMatch: ['**/__tests__/**/*.js'],
    testEnvironment: 'jest-environment-jsdom',
    //setupFiles: ['./jest.setup.js']
    transform: {
        '^.+\\.js$': 'babel-jest'
    }
}