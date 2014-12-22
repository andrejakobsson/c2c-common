var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":70,"id":2788,"methods":[{"el":52,"sc":2,"sl":50},{"el":56,"sc":2,"sl":54},{"el":68,"sc":2,"sl":61}],"name":"HeaderFieldType","sl":37}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":54}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":55}]},"test_103":{"methods":[{"sl":54}],"name":"Verify that generation_time_confidence has bytevalue 1","pass":true,"statements":[{"sl":55}]},"test_12":{"methods":[{"sl":54}],"name":"Verify serialization","pass":true,"statements":[{"sl":55}]},"test_122":{"methods":[{"sl":54}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":55}]},"test_123":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns expiration for 2","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_124":{"methods":[{"sl":54}],"name":"Verify that generation_time has bytevalue 0","pass":true,"statements":[{"sl":55}]},"test_129":{"methods":[{"sl":61}],"name":"Verify deserialization","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_140":{"methods":[{"sl":54}],"name":"Verify serialization","pass":true,"statements":[{"sl":55}]},"test_145":{"methods":[{"sl":61}],"name":"Verify deserialization","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_152":{"methods":[{"sl":54}],"name":"Verify that request_unrecognized_certificate has bytevalue 4","pass":true,"statements":[{"sl":55}]},"test_173":{"methods":[{"sl":54},{"sl":61}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":55},{"sl":62},{"sl":63},{"sl":64}]},"test_183":{"methods":[{"sl":54}],"name":"Verify that generation_location has bytevalue 3","pass":true,"statements":[{"sl":55}]},"test_234":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns generation_time for 0","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_260":{"methods":[{"sl":54}],"name":"Verify that expiration has bytevalue 2","pass":true,"statements":[{"sl":55}]},"test_289":{"methods":[{"sl":54}],"name":"Verify that signer_info has bytevalue 128","pass":true,"statements":[{"sl":55}]},"test_290":{"methods":[{"sl":54}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":55}]},"test_323":{"methods":[{"sl":54}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":55}]},"test_325":{"methods":[{"sl":54}],"name":"Verify that recipient_info has bytevalue 129","pass":true,"statements":[{"sl":55}]},"test_329":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns encryption_parameters for 130","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_347":{"methods":[{"sl":54}],"name":"Verify that encryption_parameters has bytevalue 130","pass":true,"statements":[{"sl":55}]},"test_35":{"methods":[{"sl":54}],"name":"Verify that message_type has bytevalue 5","pass":true,"statements":[{"sl":55}]},"test_359":{"methods":[{"sl":54}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":55}]},"test_371":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns signer_info for 128","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_390":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns request_unrecognized_certificate for 4","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_391":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns generation_time_confidence for 1","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_59":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns message_type for 5","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_66":{"methods":[{"sl":54},{"sl":61}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":55},{"sl":62},{"sl":63},{"sl":64}]},"test_88":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns generation_location for 3","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]},"test_97":{"methods":[{"sl":61}],"name":"Verify that TrailerFieldType.getByValue returns recipient_info for 129","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [12, 260, 323, 289, 122, 347, 173, 103, 66, 152, 290, 359, 124, 140, 35, 183, 325, 102], [12, 260, 323, 289, 122, 347, 173, 103, 66, 152, 290, 359, 124, 140, 35, 183, 325, 102], [], [], [], [], [], [391, 129, 97, 88, 390, 329, 234, 123, 173, 66, 145, 371, 59], [391, 129, 97, 88, 390, 329, 234, 123, 173, 66, 145, 371, 59], [391, 129, 97, 88, 390, 329, 234, 123, 173, 66, 145, 371, 59], [391, 129, 97, 88, 390, 329, 234, 123, 173, 66, 145, 371, 59], [], [], [], [], [], []]
