var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":115,"id":1105,"methods":[{"el":51,"sc":2,"sl":46},{"el":59,"sc":2,"sl":58},{"el":67,"sc":2,"sl":65},{"el":73,"sc":2,"sl":70},{"el":79,"sc":2,"sl":75},{"el":88,"sc":2,"sl":82},{"el":106,"sc":2,"sl":91},{"el":112,"sc":2,"sl":109}],"name":"PolygonalRegion","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_141":{"methods":[{"sl":46},{"sl":109}],"name":"Verify toString","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":111}]},"test_173":{"methods":[{"sl":58},{"sl":75}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":78}]},"test_213":{"methods":[{"sl":109}],"name":"Verify toString","pass":true,"statements":[{"sl":111}]},"test_221":{"methods":[{"sl":58},{"sl":65},{"sl":75}],"name":"Verify deserialization","pass":true,"statements":[{"sl":66},{"sl":78}]},"test_235":{"methods":[{"sl":58},{"sl":70},{"sl":75}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":72},{"sl":78}]},"test_244":{"methods":[{"sl":58},{"sl":75}],"name":"Verify deserialization","pass":true,"statements":[{"sl":78}]},"test_248":{"methods":[{"sl":82}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":84},{"sl":85},{"sl":86},{"sl":87}]},"test_273":{"methods":[{"sl":58},{"sl":70},{"sl":75}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":72},{"sl":78}]},"test_277":{"methods":[{"sl":58},{"sl":75}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":78}]},"test_315":{"methods":[{"sl":46},{"sl":70}],"name":"Verify serialization","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":72}]},"test_43":{"methods":[{"sl":70}],"name":"Verify serialization","pass":true,"statements":[{"sl":72}]},"test_66":{"methods":[{"sl":58},{"sl":75}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":78}]},"test_78":{"methods":[{"sl":58},{"sl":70},{"sl":75}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":72},{"sl":78}]},"test_8":{"methods":[{"sl":46},{"sl":65}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":50},{"sl":66}]},"test_95":{"methods":[{"sl":46},{"sl":82},{"sl":91}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":47},{"sl":50},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":93},{"sl":95},{"sl":97},{"sl":99},{"sl":100},{"sl":103},{"sl":104},{"sl":105}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [8, 95, 141, 315], [8, 95, 141, 315], [8], [], [8, 95, 141, 315], [], [], [], [], [], [], [], [221, 277, 273, 173, 235, 66, 78, 244], [], [], [], [], [], [], [221, 8], [221, 8], [], [], [], [273, 235, 43, 78, 315], [], [273, 235, 43, 78, 315], [], [], [221, 277, 273, 173, 235, 66, 78, 244], [], [], [221, 277, 273, 173, 235, 66, 78, 244], [], [], [], [95, 248], [], [95, 248], [95, 248], [95, 248], [95, 248], [], [], [], [95], [], [95], [], [95], [], [95], [], [95], [95], [], [], [95], [95], [95], [], [], [], [141, 213], [], [141, 213], [], [], [], []]
