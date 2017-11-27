var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App1('blt2d31066205240aa3')
.setHost("test-stag-api.built.io")
.setProtocol("https")
.setMasterKey('bltcfadb1ee934a4681')

var extensionSDK = app.Extension({
	secret_key     : 'blt2027aaf39aeb589c',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


