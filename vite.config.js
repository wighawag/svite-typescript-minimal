const dependenciesRequiringNodeBuiltins = ["bn.js"]; // TODO check if it works
module.exports = {
    optimizeDeps: {
        allowNodeBuiltins: {
            includes: (name) => dependenciesRequiringNodeBuiltins.indexOf(name) !== -1
        }
    },
};
