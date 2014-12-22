var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":282,"id":1373,"methods":[{"el":57,"sc":2,"sl":55},{"el":66,"sc":2,"sl":63},{"el":75,"sc":2,"sl":72},{"el":87,"sc":2,"sl":84},{"el":100,"sc":2,"sl":96},{"el":111,"sc":2,"sl":109},{"el":120,"sc":2,"sl":118},{"el":129,"sc":2,"sl":127},{"el":141,"sc":2,"sl":139},{"el":150,"sc":2,"sl":148},{"el":174,"sc":2,"sl":152},{"el":202,"sc":2,"sl":176},{"el":222,"sc":2,"sl":205},{"el":254,"sc":2,"sl":225},{"el":278,"sc":2,"sl":258}],"name":"SignerInfo","sl":41}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":63},{"sl":118},{"sl":152}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":119},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160}]},"test_112":{"methods":[{"sl":55},{"sl":109},{"sl":152}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":56},{"sl":110},{"sl":154},{"sl":155},{"sl":156},{"sl":157}]},"test_12":{"methods":[{"sl":152}],"name":"Verify serialization","pass":true,"statements":[{"sl":154},{"sl":155},{"sl":156},{"sl":157}]},"test_122":{"methods":[{"sl":63},{"sl":72},{"sl":109},{"sl":118},{"sl":127},{"sl":152}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":73},{"sl":74},{"sl":110},{"sl":119},{"sl":128},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163}]},"test_125":{"methods":[{"sl":55},{"sl":72},{"sl":109},{"sl":127},{"sl":152}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":56},{"sl":73},{"sl":74},{"sl":110},{"sl":128},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163}]},"test_129":{"methods":[{"sl":55},{"sl":176}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":179},{"sl":180},{"sl":183},{"sl":184},{"sl":185},{"sl":186}]},"test_140":{"methods":[{"sl":152}],"name":"Verify serialization","pass":true,"statements":[{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160}]},"test_144":{"methods":[{"sl":63},{"sl":109},{"sl":118},{"sl":152}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":110},{"sl":119},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163}]},"test_145":{"methods":[{"sl":55},{"sl":176}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":179},{"sl":180},{"sl":181},{"sl":182}]},"test_149":{"methods":[{"sl":152}],"name":"Verify serialization","pass":true,"statements":[{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163}]},"test_15":{"methods":[{"sl":258}],"name":"Verify toString","pass":true,"statements":[{"sl":260},{"sl":261},{"sl":262}]},"test_173":{"methods":[{"sl":55},{"sl":72},{"sl":152},{"sl":176}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":56},{"sl":73},{"sl":74},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":179},{"sl":180},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_175":{"methods":[{"sl":258}],"name":"Verify toString","pass":true,"statements":[{"sl":260},{"sl":261},{"sl":262},{"sl":266},{"sl":267}]},"test_181":{"methods":[{"sl":72},{"sl":109},{"sl":127},{"sl":152}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":110},{"sl":128},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163}]},"test_184":{"methods":[{"sl":55},{"sl":109},{"sl":118},{"sl":127},{"sl":139},{"sl":148},{"sl":176}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":110},{"sl":119},{"sl":128},{"sl":140},{"sl":149},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":191},{"sl":192},{"sl":193},{"sl":194},{"sl":195},{"sl":196},{"sl":197},{"sl":198}]},"test_230":{"methods":[{"sl":72},{"sl":109},{"sl":127},{"sl":152}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":110},{"sl":128},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163}]},"test_231":{"methods":[{"sl":72}],"name":"Verify illegal subjec type no root ca and CA certificate null throws illegal argument exception","pass":true,"statements":[{"sl":73},{"sl":74}]},"test_235":{"methods":[{"sl":55},{"sl":152},{"sl":176}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":56},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_237":{"methods":[{"sl":109}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":110}]},"test_242":{"methods":[{"sl":55},{"sl":109},{"sl":152}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":56},{"sl":110},{"sl":154},{"sl":155},{"sl":156},{"sl":157}]},"test_25":{"methods":[{"sl":55},{"sl":72},{"sl":109},{"sl":127},{"sl":152}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":56},{"sl":73},{"sl":74},{"sl":110},{"sl":128},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163}]},"test_273":{"methods":[{"sl":55},{"sl":152},{"sl":176}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":56},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_277":{"methods":[{"sl":55},{"sl":176}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":56},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_306":{"methods":[{"sl":84},{"sl":109},{"sl":139},{"sl":152}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":110},{"sl":140},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":166}]},"test_323":{"methods":[{"sl":72},{"sl":127},{"sl":152}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":128},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163}]},"test_334":{"methods":[{"sl":109},{"sl":118},{"sl":127},{"sl":139},{"sl":148}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":110},{"sl":119},{"sl":128},{"sl":140},{"sl":149}]},"test_337":{"methods":[{"sl":63},{"sl":205},{"sl":225}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":213},{"sl":214},{"sl":215},{"sl":217},{"sl":219},{"sl":221},{"sl":227},{"sl":229},{"sl":231},{"sl":233},{"sl":234},{"sl":235},{"sl":236},{"sl":239},{"sl":240},{"sl":241},{"sl":244},{"sl":247},{"sl":248},{"sl":249},{"sl":251},{"sl":253}]},"test_359":{"methods":[{"sl":152}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160}]},"test_387":{"methods":[{"sl":258}],"name":"Verify toString","pass":true,"statements":[{"sl":260},{"sl":261},{"sl":262},{"sl":263},{"sl":264},{"sl":271},{"sl":272}]},"test_40":{"methods":[{"sl":84},{"sl":109},{"sl":139},{"sl":152}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":110},{"sl":140},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":166}]},"test_47":{"methods":[{"sl":152}],"name":"Verify serialization","pass":true,"statements":[{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":170}]},"test_51":{"methods":[{"sl":63},{"sl":109},{"sl":118},{"sl":152}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":110},{"sl":119},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163}]},"test_54":{"methods":[{"sl":55},{"sl":109},{"sl":176}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":110},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_66":{"methods":[{"sl":55},{"sl":72},{"sl":109},{"sl":127},{"sl":152},{"sl":176}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":56},{"sl":73},{"sl":74},{"sl":110},{"sl":128},{"sl":154},{"sl":155},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":179},{"sl":180},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_73":{"methods":[{"sl":258}],"name":"Verify toString","pass":true,"statements":[{"sl":260},{"sl":263},{"sl":264}]},"test_78":{"methods":[{"sl":55},{"sl":109},{"sl":152},{"sl":176}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":56},{"sl":110},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":179},{"sl":180},{"sl":181},{"sl":182},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190}]},"test_96":{"methods":[{"sl":152}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":161},{"sl":162},{"sl":163}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [129, 184, 277, 273, 173, 235, 66, 25, 145, 78, 125, 112, 242, 54], [129, 184, 277, 273, 173, 235, 66, 25, 145, 78, 125, 112, 242, 54], [], [], [], [], [], [], [122, 337, 144, 102, 51], [122, 337, 144, 102, 51], [122, 337, 144, 102, 51], [], [], [], [], [], [], [323, 122, 181, 173, 66, 230, 231, 25, 125], [323, 122, 181, 173, 66, 230, 231, 25, 125], [323, 122, 181, 173, 66, 230, 231, 25, 125], [], [], [], [], [], [], [], [], [], [306, 40], [306, 40], [306, 40], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [306, 184, 122, 181, 40, 66, 237, 230, 25, 78, 125, 334, 112, 242, 144, 54, 51], [306, 184, 122, 181, 40, 66, 237, 230, 25, 78, 125, 334, 112, 242, 144, 54, 51], [], [], [], [], [], [], [], [184, 122, 334, 144, 102, 51], [184, 122, 334, 144, 102, 51], [], [], [], [], [], [], [], [323, 184, 122, 181, 66, 230, 25, 125, 334], [323, 184, 122, 181, 66, 230, 25, 125, 334], [], [], [], [], [], [], [], [], [], [], [306, 184, 40, 334], [306, 184, 40, 334], [], [], [], [], [], [], [], [184, 334], [184, 334], [], [], [12, 306, 323, 122, 181, 273, 173, 235, 96, 40, 66, 230, 359, 25, 149, 47, 78, 125, 140, 112, 242, 144, 102, 51], [], [12, 306, 323, 122, 181, 273, 173, 235, 96, 40, 66, 230, 359, 25, 149, 47, 78, 125, 140, 112, 242, 144, 102, 51], [12, 306, 323, 122, 181, 273, 173, 235, 96, 40, 66, 230, 359, 25, 149, 47, 78, 125, 140, 112, 242, 144, 102, 51], [12, 306, 181, 273, 235, 96, 40, 230, 25, 149, 47, 78, 125, 112, 242, 144, 51], [12, 306, 181, 273, 235, 96, 40, 230, 25, 149, 47, 78, 125, 112, 242, 144, 51], [323, 122, 273, 173, 235, 66, 359, 47, 78, 140, 144, 102, 51], [323, 122, 273, 173, 235, 66, 359, 47, 78, 140, 144, 102, 51], [323, 122, 273, 173, 235, 66, 359, 47, 78, 140, 144, 102, 51], [306, 323, 122, 181, 273, 173, 235, 96, 40, 66, 230, 25, 149, 47, 125, 144, 51], [306, 323, 122, 181, 273, 173, 235, 96, 40, 66, 230, 25, 149, 47, 125, 144, 51], [306, 323, 122, 181, 273, 173, 235, 96, 40, 66, 230, 25, 149, 47, 125, 144, 51], [306, 40, 47], [306, 40, 47], [306, 40, 47], [47], [47], [47], [47], [], [], [], [], [], [129, 184, 277, 273, 173, 235, 66, 145, 78, 54], [], [], [129, 184, 277, 273, 173, 235, 66, 145, 78, 54], [129, 184, 277, 273, 173, 235, 66, 145, 78, 54], [184, 277, 273, 235, 145, 78, 54], [184, 277, 273, 235, 145, 78, 54], [129, 184, 277, 273, 173, 235, 66, 78], [129, 184, 277, 273, 173, 235, 66, 78], [129, 184, 277, 273, 173, 235, 66, 78], [129, 184, 277, 273, 173, 235, 66, 78], [184, 277, 273, 173, 235, 66, 78, 54], [184, 277, 273, 173, 235, 66, 78, 54], [184, 277, 273, 173, 235, 66, 78, 54], [184, 277, 273, 173, 235, 66, 78, 54], [184], [184], [184], [184], [184], [184], [184], [184], [], [], [], [], [], [], [337], [], [337], [337], [337], [337], [337], [], [337], [337], [337], [], [337], [], [337], [], [337], [], [], [], [337], [], [337], [], [337], [], [337], [], [337], [337], [337], [337], [], [], [337], [337], [337], [], [], [337], [], [], [337], [337], [337], [], [337], [], [337], [], [], [], [], [175, 387, 15, 73], [], [175, 387, 15, 73], [175, 387, 15], [175, 387, 15], [387, 73], [387, 73], [], [175], [175], [], [], [], [387], [387], [], [], [], [], [], [], [], [], [], []]
