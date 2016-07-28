/**
 * Dom Ready
 */
var DOMReady = function(callback) {
    let b = document
    let c = 'addEventListener'
    b[c] ? b[c]('DocumentContentLoaded', callback) : window.attachEvent('onload', callback)
}

/**
 * BaseFun
 */

