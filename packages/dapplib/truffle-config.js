require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remind pulse hover enter onion seek'; 
let testAccounts = [
"0x8ff734512e129088e4de99e2f1b69daef9d9c71393a5b4990ae6ad8a41223d8e",
"0xdd5c5c8f35405f7bbf9f72cc5bbe97f032bc9f00c2254efa3ad6f60f44f1bcaa",
"0x81b1ad670ff806d570060b52b5dc5944349862364a35e87d60c4979fe8baa0f8",
"0xba348037591b446353b99e70b727eb74c428413cf104787b048d1b6816d7df03",
"0x20a31dd4f224a228702bf06cfe248b29c568d044077297c1a954b0379c82c605",
"0x53e6df46a520470beedf63e825a7dbceef24036505498062dbfd470f8be274c0",
"0xb93504f27c0db5a1bf02de5974c91fa46086dbb4ffd2f94f30633e74988c3323",
"0x0414a072a8845a346ba4d6613246f81e6df18c83725337022e5fdc4b8b8851ce",
"0x35e79237cbc4d0cc64d82dfc7fa29d203e97c9a9f36989447406ba982731d923",
"0xce3fde2746aee4d90db3b5afabbccc383d04dbc1833d709db0739169cd2cd4cb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
