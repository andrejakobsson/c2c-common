var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":311,"id":2121,"methods":[{"el":74,"sc":2,"sl":68},{"el":85,"sc":2,"sl":80},{"el":94,"sc":2,"sl":91},{"el":116,"sc":2,"sl":107},{"el":125,"sc":2,"sl":124},{"el":133,"sc":2,"sl":131},{"el":141,"sc":2,"sl":139},{"el":149,"sc":2,"sl":147},{"el":157,"sc":2,"sl":155},{"el":170,"sc":2,"sl":168},{"el":195,"sc":2,"sl":172},{"el":230,"sc":2,"sl":197},{"el":247,"sc":2,"sl":232},{"el":281,"sc":2,"sl":249},{"el":306,"sc":2,"sl":283}],"name":"SubjectAttribute","sl":54}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":131},{"sl":139},{"sl":172}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":132},{"sl":140},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185}]},"test_112":{"methods":[{"sl":68},{"sl":91},{"sl":131},{"sl":139},{"sl":155},{"sl":172}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":73},{"sl":92},{"sl":93},{"sl":132},{"sl":140},{"sl":156},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185}]},"test_122":{"methods":[{"sl":131},{"sl":139},{"sl":172}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":132},{"sl":140},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185}]},"test_125":{"methods":[{"sl":68},{"sl":91},{"sl":131},{"sl":139},{"sl":155},{"sl":172}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":73},{"sl":92},{"sl":93},{"sl":132},{"sl":140},{"sl":156},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185}]},"test_144":{"methods":[{"sl":68},{"sl":91},{"sl":131},{"sl":139},{"sl":155},{"sl":172}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":73},{"sl":92},{"sl":93},{"sl":132},{"sl":140},{"sl":156},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185}]},"test_149":{"methods":[{"sl":172}],"name":"Verify serialization","pass":true,"statements":[{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185},{"sl":187},{"sl":190},{"sl":191}]},"test_16":{"methods":[{"sl":68},{"sl":232},{"sl":249}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":73},{"sl":234},{"sl":235},{"sl":236},{"sl":237},{"sl":238},{"sl":239},{"sl":240},{"sl":241},{"sl":242},{"sl":246},{"sl":251},{"sl":253},{"sl":255},{"sl":257},{"sl":258},{"sl":259},{"sl":260},{"sl":263},{"sl":264},{"sl":265},{"sl":268},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":278},{"sl":280}]},"test_173":{"methods":[{"sl":124},{"sl":131},{"sl":139},{"sl":172},{"sl":197}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":132},{"sl":140},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":206},{"sl":211},{"sl":212},{"sl":213},{"sl":214},{"sl":218},{"sl":219},{"sl":220}]},"test_175":{"methods":[{"sl":283}],"name":"Verify toString","pass":true,"statements":[{"sl":285},{"sl":286},{"sl":288},{"sl":293},{"sl":294},{"sl":297},{"sl":300}]},"test_181":{"methods":[{"sl":68},{"sl":91},{"sl":131},{"sl":139},{"sl":155},{"sl":172}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":73},{"sl":92},{"sl":93},{"sl":132},{"sl":140},{"sl":156},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185}]},"test_184":{"methods":[{"sl":124},{"sl":197}],"name":"Verify deserialization","pass":true,"statements":[{"sl":200},{"sl":201},{"sl":202},{"sl":204},{"sl":205},{"sl":206},{"sl":211},{"sl":212},{"sl":213},{"sl":214},{"sl":218},{"sl":219},{"sl":220}]},"test_201":{"methods":[{"sl":68},{"sl":107},{"sl":131},{"sl":139},{"sl":168}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":69},{"sl":70},{"sl":108},{"sl":112},{"sl":132},{"sl":140},{"sl":169}]},"test_230":{"methods":[{"sl":68},{"sl":91},{"sl":131},{"sl":139},{"sl":155},{"sl":172}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":73},{"sl":92},{"sl":93},{"sl":132},{"sl":140},{"sl":156},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185}]},"test_232":{"methods":[{"sl":124},{"sl":131},{"sl":139},{"sl":168},{"sl":197}],"name":"Verify deserialization","pass":true,"statements":[{"sl":132},{"sl":140},{"sl":169},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":206},{"sl":211},{"sl":212},{"sl":213},{"sl":214},{"sl":215},{"sl":216},{"sl":217},{"sl":218},{"sl":219},{"sl":220},{"sl":221},{"sl":222},{"sl":223},{"sl":224},{"sl":225},{"sl":226}]},"test_235":{"methods":[{"sl":124},{"sl":172},{"sl":197}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":190},{"sl":191},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":206},{"sl":211},{"sl":212},{"sl":213},{"sl":214},{"sl":215},{"sl":216},{"sl":217},{"sl":218},{"sl":219},{"sl":220}]},"test_237":{"methods":[{"sl":131}],"name":"Verify the constructors and getters","pass":true,"statements":[{"sl":132}]},"test_242":{"methods":[{"sl":68},{"sl":91},{"sl":131},{"sl":139},{"sl":155},{"sl":172}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":73},{"sl":92},{"sl":93},{"sl":132},{"sl":140},{"sl":156},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185}]},"test_25":{"methods":[{"sl":68},{"sl":91},{"sl":131},{"sl":139},{"sl":155},{"sl":172}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":73},{"sl":92},{"sl":93},{"sl":132},{"sl":140},{"sl":156},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185}]},"test_273":{"methods":[{"sl":124},{"sl":172},{"sl":197}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":190},{"sl":191},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":206},{"sl":211},{"sl":212},{"sl":213},{"sl":214},{"sl":215},{"sl":216},{"sl":217},{"sl":218},{"sl":219},{"sl":220}]},"test_277":{"methods":[{"sl":124},{"sl":131},{"sl":139},{"sl":197}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":132},{"sl":140},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":206},{"sl":211},{"sl":212},{"sl":213},{"sl":214},{"sl":215},{"sl":216},{"sl":217},{"sl":218},{"sl":219},{"sl":220}]},"test_306":{"methods":[{"sl":68},{"sl":91},{"sl":131},{"sl":139},{"sl":155},{"sl":172}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":73},{"sl":92},{"sl":93},{"sl":132},{"sl":140},{"sl":156},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185}]},"test_323":{"methods":[{"sl":131},{"sl":139},{"sl":172}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":132},{"sl":140},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185}]},"test_372":{"methods":[{"sl":172}],"name":"Verify serialization","pass":true,"statements":[{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":191}]},"test_385":{"methods":[{"sl":283}],"name":"Verify toString","pass":true,"statements":[{"sl":285},{"sl":286},{"sl":287},{"sl":288},{"sl":293},{"sl":294},{"sl":296},{"sl":297},{"sl":298},{"sl":299},{"sl":300}]},"test_40":{"methods":[{"sl":68},{"sl":91},{"sl":131},{"sl":139},{"sl":155},{"sl":172}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":73},{"sl":92},{"sl":93},{"sl":132},{"sl":140},{"sl":156},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185}]},"test_47":{"methods":[{"sl":172}],"name":"Verify serialization","pass":true,"statements":[{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185},{"sl":187},{"sl":190},{"sl":191}]},"test_51":{"methods":[{"sl":68},{"sl":91},{"sl":131},{"sl":139},{"sl":155},{"sl":172}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":69},{"sl":72},{"sl":73},{"sl":92},{"sl":93},{"sl":132},{"sl":140},{"sl":156},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185}]},"test_54":{"methods":[{"sl":124},{"sl":131},{"sl":197}],"name":"Verify deserialization","pass":true,"statements":[{"sl":132},{"sl":200},{"sl":201},{"sl":202},{"sl":204},{"sl":205},{"sl":206},{"sl":211},{"sl":212},{"sl":213},{"sl":214},{"sl":218},{"sl":219},{"sl":220}]},"test_66":{"methods":[{"sl":124},{"sl":131},{"sl":139},{"sl":172},{"sl":197}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":132},{"sl":140},{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":206},{"sl":211},{"sl":212},{"sl":213},{"sl":214},{"sl":218},{"sl":219},{"sl":220}]},"test_78":{"methods":[{"sl":124},{"sl":131},{"sl":139},{"sl":172},{"sl":197}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":132},{"sl":140},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":190},{"sl":191},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":206},{"sl":211},{"sl":212},{"sl":213},{"sl":214},{"sl":215},{"sl":216},{"sl":217},{"sl":218},{"sl":219},{"sl":220}]},"test_96":{"methods":[{"sl":172}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":174},{"sl":175},{"sl":176},{"sl":178},{"sl":179},{"sl":183},{"sl":184},{"sl":185},{"sl":187},{"sl":190},{"sl":191}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [306, 16, 181, 40, 230, 201, 25, 125, 112, 242, 144, 51], [306, 16, 181, 40, 230, 201, 25, 125, 112, 242, 144, 51], [201], [], [306, 16, 181, 40, 230, 25, 125, 112, 242, 144, 51], [306, 16, 181, 40, 230, 25, 125, 112, 242, 144, 51], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [306, 181, 40, 230, 25, 125, 112, 242, 144, 51], [306, 181, 40, 230, 25, 125, 112, 242, 144, 51], [306, 181, 40, 230, 25, 125, 112, 242, 144, 51], [], [], [], [], [], [], [], [], [], [], [], [], [], [201], [201], [], [], [], [201], [], [], [], [], [], [], [], [], [], [], [], [232, 184, 277, 273, 173, 235, 66, 78, 54], [], [], [], [], [], [], [306, 232, 323, 277, 122, 181, 173, 40, 66, 237, 230, 201, 25, 78, 125, 112, 242, 144, 54, 102, 51], [306, 232, 323, 277, 122, 181, 173, 40, 66, 237, 230, 201, 25, 78, 125, 112, 242, 144, 54, 102, 51], [], [], [], [], [], [], [306, 232, 323, 277, 122, 181, 173, 40, 66, 230, 201, 25, 78, 125, 112, 242, 144, 102, 51], [306, 232, 323, 277, 122, 181, 173, 40, 66, 230, 201, 25, 78, 125, 112, 242, 144, 102, 51], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [306, 181, 40, 230, 25, 125, 112, 242, 144, 51], [306, 181, 40, 230, 25, 125, 112, 242, 144, 51], [], [], [], [], [], [], [], [], [], [], [], [232, 201], [232, 201], [], [], [306, 323, 122, 372, 181, 273, 173, 235, 40, 96, 66, 230, 25, 149, 47, 78, 125, 112, 242, 144, 102, 51], [], [306, 323, 122, 372, 181, 273, 173, 235, 40, 96, 66, 230, 25, 149, 47, 78, 125, 112, 242, 144, 102, 51], [306, 323, 122, 372, 181, 273, 173, 235, 40, 96, 66, 230, 25, 149, 47, 78, 125, 112, 242, 144, 102, 51], [306, 323, 122, 372, 181, 273, 173, 235, 40, 96, 66, 230, 25, 149, 47, 78, 125, 112, 242, 144, 102, 51], [372, 273, 235, 78, 112], [306, 323, 122, 372, 181, 273, 173, 235, 40, 96, 66, 230, 25, 149, 47, 78, 125, 112, 242, 144, 102, 51], [306, 323, 122, 372, 181, 273, 173, 235, 40, 96, 66, 230, 25, 149, 47, 78, 125, 112, 242, 144, 102, 51], [], [], [], [306, 323, 122, 372, 181, 273, 173, 235, 40, 96, 66, 230, 25, 149, 47, 78, 125, 112, 242, 144, 102, 51], [306, 323, 122, 372, 181, 273, 173, 235, 40, 96, 66, 230, 25, 149, 47, 78, 125, 112, 242, 144, 102, 51], [306, 323, 122, 372, 181, 273, 173, 235, 40, 96, 66, 230, 25, 149, 47, 78, 125, 112, 242, 144, 102, 51], [372, 273, 235, 78], [372, 273, 235, 96, 149, 47, 78], [372], [372], [372, 273, 235, 96, 149, 47, 78], [372, 273, 235, 96, 149, 47, 78], [], [], [], [], [], [232, 184, 277, 273, 173, 235, 66, 78, 54], [], [], [232, 184, 277, 273, 173, 235, 66, 78, 54], [232, 184, 277, 273, 173, 235, 66, 78, 54], [232, 184, 277, 273, 173, 235, 66, 78, 54], [232, 277, 273, 173, 235, 66, 78], [232, 184, 277, 273, 173, 235, 66, 78, 54], [232, 184, 277, 273, 173, 235, 66, 78, 54], [232, 184, 277, 273, 173, 235, 66, 78, 54], [], [], [], [], [232, 184, 277, 273, 173, 235, 66, 78, 54], [232, 184, 277, 273, 173, 235, 66, 78, 54], [232, 184, 277, 273, 173, 235, 66, 78, 54], [232, 184, 277, 273, 173, 235, 66, 78, 54], [232, 277, 273, 235, 78], [232, 277, 273, 235, 78], [232, 277, 273, 235, 78], [232, 184, 277, 273, 173, 235, 66, 78, 54], [232, 184, 277, 273, 173, 235, 66, 78, 54], [232, 184, 277, 273, 173, 235, 66, 78, 54], [232], [232], [232], [232], [232], [232], [], [], [], [], [], [16], [], [16], [16], [16], [16], [16], [16], [16], [16], [16], [], [], [], [16], [], [], [16], [], [16], [], [16], [], [16], [], [16], [16], [16], [16], [], [], [16], [16], [16], [], [], [16], [], [], [16], [16], [16], [16], [], [], [], [16], [], [16], [], [], [175, 385], [], [175, 385], [175, 385], [385], [175, 385], [], [], [], [], [175, 385], [175, 385], [], [385], [175, 385], [385], [385], [175, 385], [], [], [], [], [], [], [], [], [], [], []]
