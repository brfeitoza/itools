module.exports = {
  extends: [
    'expo',
    'prettier',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: ['prettier', '@tanstack/query'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    '@typescript-eslint/no-explicit-any': 'error',
    'no-console': 'error',
  },
};
