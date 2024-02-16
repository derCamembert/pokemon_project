module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/test"], // test ist das verzeichnis
    testMatch: ["**/+.spec.ts", "**/*.test.ts"],
    transform: {
        "^.+\\.ts$":"ts-jest"
    },
    collectCoverage:true
}