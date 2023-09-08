module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    ignorePatterns: ['app/modules/graphql/generated.ts', '.eslintrc.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: './'
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'simple-import-sort'],
    settings: {
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {}
        }
    },
    rules: {
        'comma-dangle': ['error', 'never'],
        // Indent with 4 spaces
        indent: ['error', 4, { SwitchCase: 1 }],
        'import/extensions': 'off',
        'import/order': 'off',
        'import/prefer-default-export': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'linebreak-style': ['error', 'unix'],
        'max-len': ['error', { code: 120 }],
        'no-console': ['error'],
        'no-param-reassign': 'off',
        'no-use-before-define': ['error', { functions: true, classes: true, variables: false }], // disable the rule for variables, but enable it for functions and classes
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/prop-types': 'off',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Node.js builtins. You could also generate this regex if you use a `.js` config.
                    // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
                    [
                        '^(assert|buffer|child_process|cluster|console|constants|crypto|' +
                            'dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|' +
                            'readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|' +
                            'v8|process|async_hooks|http2|perf_hooks)(/.*|$)'
                    ],
                    // Packages. `react` related packages come first.
                    ['^react', '^@?\\w'],
                    // Internal packages.
                    ['^(app|assets)(/.*|$)'],
                    // Side effect imports.
                    ['^\\u0000'],
                    // Parent imports. Put `..` last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    // Style imports.
                    ['^.+\\.s?css$']
                ]
            }
        ],
        'sort-imports': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-use-before-define': 0
    }
};
