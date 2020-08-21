const dependenciesRequiringNodeBuiltins = ["node-gyp-build", "svite-typescript-minimal", "bn.js"];
module.exports = {
    optimizeDeps: {
        allowNodeBuiltins: {
            includes: (name) => dependenciesRequiringNodeBuiltins.indexOf(name) !== -1
        }
    },
};
