var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt5be4e4d0596ae184')
.setHost("test-stag-api.built.io")
.setProtocol("https")
.setMasterKey('bltd0673980320fcb4a')

var extensionSDK = app.Extension({
	secret_key     : 'blt2027aaf39aeb589c',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


