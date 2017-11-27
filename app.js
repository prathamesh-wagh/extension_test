var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('bltf3a6ab5171abc64d')
.setHost("test-stag-api.built.io")
.setProtocol("https")
.setMasterKey('blt13a96080e764d20b')

var extensionSDK = app.Extension({
	secret_key     : 'blt2027aaf39aeb589c',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


