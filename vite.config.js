const dependenciesRequiringNodeBuiltins = [
    "@ethersproject/random",
    "bn.js",
    "@ethersproject/web",
    "svite-typescript-minimal", // why ?
    "@ethersproject/providers",
    "ws",
    "brorand",
    "inherits"
]
module.exports = {
    optimizeDeps: {
        allowNodeBuiltins: {
            includes: (name) => dependenciesRequiringNodeBuiltins.indexOf(name) !== -1
        }
    },

    /*
[vite] Dep optimization failed with error:
[vite]: Rollup failed to resolve import "utf-8-validate" from "node_modules\@ethersproject\providers\node_modules\ws\lib\validation.js".
This is most likely unintended because it can break your application at runtime.
If you do want to externalize this module explicitly add it to
`rollupInputOptions.external`
    */
    rollupInputOptions: {
        external: ["utf-8-validate", "bufferutil"]
    }
  }