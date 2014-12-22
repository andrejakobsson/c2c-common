var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":54,"id":3027,"methods":[{"el":36,"sc":2,"sl":34},{"el":40,"sc":2,"sl":38},{"el":52,"sc":2,"sl":45}],"name":"TrailerFieldType","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_129":{"methods":[{"sl":45}],"name":"Verify deserialization","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48}]},"test_140":{"methods":[{"sl":38}],"name":"Verify serialization","pass":true,"statements":[{"sl":39}]},"test_173":{"methods":[{"sl":38},{"sl":45}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":39},{"sl":46},{"sl":47},{"sl":48}]},"test_261":{"methods":[{"sl":38}],"name":"Verify that signature has bytevalue 1","pass":true,"statements":[{"sl":39}]},"test_356":{"methods":[{"sl":45}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48}]},"test_359":{"methods":[{"sl":38}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":39}]},"test_382":{"methods":[{"sl":45}],"name":"Verify that TrailerFieldType.getByValue returns signature for 1","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48}]},"test_4":{"methods":[{"sl":38}],"name":"Verify serialization of RecipientInfo","pass":true,"statements":[{"sl":39}]},"test_66":{"methods":[{"sl":38},{"sl":45}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":39},{"sl":46},{"sl":47},{"sl":48}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [66, 359, 261, 140, 4, 173], [66, 359, 261, 140, 4, 173], [], [], [], [], [], [382, 66, 129, 356, 173], [382, 66, 129, 356, 173], [382, 66, 129, 356, 173], [382, 66, 129, 356, 173], [], [], [], [], [], []]