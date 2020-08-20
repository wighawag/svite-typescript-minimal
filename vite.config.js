import builtins from 'rollup-plugin-node-builtins';

module.exports = {
    rollupInputOptions: {
        plugins: [
            builtins({crypto: true})
        ]
    }
  }