var CryptoJS = require('cryptojs').Crypto
var bs58 = require('bs58')
var bitcoin = require('bitcoinjs-lib')

// P2PKH na rede principal é 0x00, P2PKH na rede de testes é 0x6F
// P2SH na rede principal é 0x05, P2sh na rede de testes é 0xC4
// lista completa em https://en.bitcoin.it/wiki/List_of_address_prefixes
var versao = '00'

// coloca o segundo argumento da linha de comando na variavel chavePublica
var chavePublica = process.argv[2]

// passo 1
var chavePublicaBytes = CryptoJS.util.hexToBytes(chavePublica)

// passo 2
var chavePublicaSHA256 = CryptoJS.SHA256(chavePublicaBytes)

// passo 3
var hash160 = bitcoin.crypto.ripemd160(Buffer.from(CryptoJS.util.hexToBytes(chavePublicaSHA256)))

// passo 4 - adicionar versao na frente
var hashEBytes = Array.prototype.slice.call(hash160, 0)
hashEBytes.unshift(CryptoJS.util.hexToBytes(versao))

// passo 5 - primeiro hash sha256 do passo 4
var primeiroSHA = CryptoJS.SHA256(hashEBytes)

// passo 6 - hahs sha256 do passo 5
var segundoSHA = CryptoJS.SHA256(CryptoJS.util.hexToBytes(primeiroSHA))

// 7 - extrai os 4 primeiros bytes para utilizar como checksum
var checksum = segundoSHA.substr(0,8)

// 8 - versão + passo 3 + passo 7
var endereco = versao + CryptoJS.util.bytesToHex(hash160) + checksum

// passo 9 - codificar resultado do passo 8 em base58
var enderecoFinal = bs58.encode(CryptoJS.util.hexToBytes(endereco))

console.log(enderecoFinal)



