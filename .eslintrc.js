module.exports = {
    env: {
        node: true,
        es6: true,
        jest: true
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: { modules: true }
    },
    rules: {
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"]
        //semi: ["error", "always"]
    }
};
