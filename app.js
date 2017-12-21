var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('bltc4f7ed1f03053fe8')
.setHost("test-stag-api.built.io")
.setProtocol("https")
.setMasterKey('bltc88f3d42ad8a728c')

// e3ac0e0e1a8feb917676e4b750b7b072970304e7 - access token
// bltc88f3d42ad8a728c - secret key
// blt_ext_default_test - extension key
// web hook url - https://test-stag-api.built.io/v1/extensions/blt_ext_default/redeploy?application_api_key=bltc4f7ed1f03053fe8

var extensionSDK = app.Extension({
	secret_key     : 'bltc88f3d42ad8a728c',
	extension_key  : 'blt_ext_default_test',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)