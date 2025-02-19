export default logger = {
    log: function(...args) {
        console.log(`PTU | Log: `, ...args)
    },
    debug: function(...args) {
        const r = foundry.utils.randomID();
        console.debug(`PTU | Debug (${r}): `, ...args)
        // console.trace(`PTU | Debug (${r}): `)
    },
    warn: function(...args) {
        const r = foundry.utils.randomID();
        console.warn(`PTU | Warning (${r}): `, ...args)
        console.trace(`PTU | Warning (${r}): `)
    },
    error: function(...args) {
        const r = foundry.utils.randomID();
        console.error(`PTU | Error (${r}): `, ...args)
        console.trace(`PTU | Error (${r}): `)
    },
}