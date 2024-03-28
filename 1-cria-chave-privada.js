var CryptoJS = require('cryptojs').Crypto

// passo 1 = criar uma variavel com 32 bytes randomicos

var chavePrivada = CryptoJS.util.randomBytes(32)

var chavePrivadaHex = CryptoJS.util.bytesToHex(chavePrivada).toUpperCase()
console.log(chavePrivadaHex)
