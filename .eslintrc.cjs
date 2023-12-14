module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'prettier',
    ],

    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },

    root: true,

    rules: {
        semi: 'error',
        // 'no-console': 'error',
    },
};
