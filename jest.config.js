module.exports = {
    preset: "@babel/preset-env",
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverageFrom: [
        "src/**/*.js",
        "!src/index.js"
    ],
    coverageReporters: [
        "text"
    ],
    transformIgnorePatterns: [
        "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$",
        "/node_modules/",
        "\\.pnp\\.[^\\\/]+$",
        "node_modules/(?!(antd)/)"
    ],
    transform: { "^.+\\.(ts|tsx|js|jsx)?$": "ts-jest" }
}