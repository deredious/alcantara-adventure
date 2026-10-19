import js from '@eslint/js';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        files: ['src/test-data/**/*.js'],
        plugins: { js },
        extends: ['js/recommended'],
    },
]);
