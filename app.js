var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt0307e22de402c426')
.setHost("test-stag-api.built.io")
.setProtocol("https")
.setMasterKey('blt9e8a0128934e71e9')

var extensionSDK = app.Extension({
	secret_key     : 'blt9b4ba508a72d39e6',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


