const { defineConfig } = require('eslint/config');
const js = require('@eslint/js');

module.exports = defineConfig([
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
        },
        files: ['src/test-data/**/*.js'],
        plugins: { js },
        extends: ['js/recommended'],
    },
]);
