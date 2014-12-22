var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":62,"id":2849,"methods":[{"el":44,"sc":2,"sl":42},{"el":48,"sc":2,"sl":46},{"el":60,"sc":2,"sl":53}],"name":"PayloadType","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":46}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":47}]},"test_105":{"methods":[{"sl":46}],"name":"Verify serialization","pass":true,"statements":[{"sl":47}]},"test_122":{"methods":[{"sl":46}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":47}]},"test_129":{"methods":[{"sl":53}],"name":"Verify deserialization","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_140":{"methods":[{"sl":46}],"name":"Verify serialization","pass":true,"statements":[{"sl":47}]},"test_173":{"methods":[{"sl":46},{"sl":53}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_178":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns signed for 1","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_217":{"methods":[{"sl":46}],"name":"Verify serializeTotalPayload calculates signature payload fields correctly","pass":true,"statements":[{"sl":47}]},"test_229":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns encrypted for 2","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_258":{"methods":[{"sl":46}],"name":"Verify that encrypted has bytevalue 2","pass":true,"statements":[{"sl":47}]},"test_290":{"methods":[{"sl":46}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":47}]},"test_323":{"methods":[{"sl":46}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":47}]},"test_345":{"methods":[{"sl":46}],"name":"Verify that unsecured has bytevalue 0","pass":true,"statements":[{"sl":47}]},"test_359":{"methods":[{"sl":46}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":47}]},"test_365":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns signed_and_encrypted for 4","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_375":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns unsecured for 0","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_380":{"methods":[{"sl":46}],"name":"Verify that signed_external has bytevalue 3","pass":true,"statements":[{"sl":47}]},"test_53":{"methods":[{"sl":53}],"name":"Verify that TrailerFieldType.getByValue returns signed_external for 3","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]},"test_66":{"methods":[{"sl":46},{"sl":53}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":47},{"sl":54},{"sl":55},{"sl":56}]},"test_68":{"methods":[{"sl":46}],"name":"Verify that signed has bytevalue 1","pass":true,"statements":[{"sl":47}]},"test_80":{"methods":[{"sl":46}],"name":"Verify that signed_and_encrypted has bytevalue 4","pass":true,"statements":[{"sl":47}]},"test_90":{"methods":[{"sl":53}],"name":"Verify deserialization","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [258, 323, 68, 345, 80, 122, 217, 173, 66, 290, 359, 380, 140, 105, 102], [258, 323, 68, 345, 80, 122, 217, 173, 66, 290, 359, 380, 140, 105, 102], [], [], [], [], [], [375, 129, 229, 178, 53, 173, 66, 90, 365], [375, 129, 229, 178, 53, 173, 66, 90, 365], [375, 129, 229, 178, 53, 173, 66, 90, 365], [375, 129, 229, 178, 53, 173, 66, 90, 365], [], [], [], [], [], []]
