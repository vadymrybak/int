module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', 
    '!src/tests/**',
    '!src/**/*.d.ts',
    '!src/**/kafka.ts',
    '!src/**/UpdatePortfolioItem.ts',
    '!src/**/DeletePortfolioItems.ts',
    '!src/**/KafkaSimulator.ts'
  ],
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
};