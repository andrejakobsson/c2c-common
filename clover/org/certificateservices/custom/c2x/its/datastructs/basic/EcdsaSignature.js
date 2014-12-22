var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":105,"id":675,"methods":[{"el":52,"sc":2,"sl":45},{"el":63,"sc":2,"sl":61},{"el":70,"sc":2,"sl":68},{"el":77,"sc":2,"sl":75},{"el":84,"sc":2,"sl":80},{"el":92,"sc":2,"sl":86},{"el":102,"sc":2,"sl":97}],"name":"EcdsaSignature","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_112":{"methods":[{"sl":45},{"sl":68},{"sl":75}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76}]},"test_118":{"methods":[{"sl":45},{"sl":68},{"sl":75}],"name":"Test to generate ECDSA Signature and then verify the signature for algorithm: ecdsa_nistp256_with_sha256","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76}]},"test_119":{"methods":[{"sl":68}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with compressed_lsb_y_1 ecc point","pass":true,"statements":[{"sl":69}]},"test_122":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_125":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_129":{"methods":[{"sl":61},{"sl":86}],"name":"Verify deserialization","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_140":{"methods":[{"sl":80}],"name":"Verify serialization","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_144":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_149":{"methods":[{"sl":80}],"name":"Verify serialization","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_173":{"methods":[{"sl":45},{"sl":61},{"sl":68},{"sl":75},{"sl":80},{"sl":86}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":62},{"sl":69},{"sl":76},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_175":{"methods":[{"sl":97}],"name":"Verify toString","pass":true,"statements":[{"sl":99}]},"test_181":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_184":{"methods":[{"sl":61},{"sl":86}],"name":"Verify deserialization","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_19":{"methods":[{"sl":61},{"sl":68},{"sl":75},{"sl":86}],"name":"Verify deserialization ofSignature","pass":true,"statements":[{"sl":62},{"sl":69},{"sl":76},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_196":{"methods":[{"sl":45},{"sl":80}],"name":"Verify serialization of Signature","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":82},{"sl":83}]},"test_230":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_235":{"methods":[{"sl":61},{"sl":80},{"sl":86}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":62},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_238":{"methods":[{"sl":61},{"sl":68}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType x_coordinate_only","pass":true,"statements":[{"sl":62},{"sl":69}]},"test_24":{"methods":[{"sl":61}],"name":"Verify constructors and getters and setters","pass":true,"statements":[{"sl":62}]},"test_242":{"methods":[{"sl":45},{"sl":68},{"sl":75}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76}]},"test_25":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_273":{"methods":[{"sl":61},{"sl":80},{"sl":86}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":62},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_277":{"methods":[{"sl":61},{"sl":86}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_287":{"methods":[{"sl":61},{"sl":68},{"sl":75},{"sl":86}],"name":"Verify deserialization of EcdsaSignature","pass":true,"statements":[{"sl":62},{"sl":69},{"sl":76},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_290":{"methods":[{"sl":61},{"sl":68}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":62},{"sl":69}]},"test_292":{"methods":[{"sl":61},{"sl":68}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType compressed_lsb_y_1","pass":true,"statements":[{"sl":62},{"sl":69}]},"test_306":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_323":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_330":{"methods":[{"sl":97}],"name":"Verify toString","pass":true,"statements":[{"sl":99}]},"test_356":{"methods":[{"sl":61},{"sl":86}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_358":{"methods":[{"sl":45},{"sl":80}],"name":"Verify serialization of EcdsaSignature","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":82},{"sl":83}]},"test_359":{"methods":[{"sl":80}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_379":{"methods":[{"sl":45},{"sl":97}],"name":"Verify toString","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":99}]},"test_4":{"methods":[{"sl":80}],"name":"Verify serialization of RecipientInfo","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_40":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_42":{"methods":[{"sl":61},{"sl":68}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType compressed_lsb_y_0","pass":true,"statements":[{"sl":62},{"sl":69}]},"test_47":{"methods":[{"sl":80}],"name":"Verify serialization","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_50":{"methods":[{"sl":61},{"sl":68}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType uncompressed","pass":true,"statements":[{"sl":62},{"sl":69}]},"test_51":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_54":{"methods":[{"sl":61},{"sl":86}],"name":"Verify deserialization","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_55":{"methods":[{"sl":45},{"sl":61},{"sl":68},{"sl":75}],"name":"Verify constructors and getters and setters","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":51},{"sl":62},{"sl":69},{"sl":76}]},"test_61":{"methods":[{"sl":68}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with compressed_lsb_y_0 ecc point","pass":true,"statements":[{"sl":69}]},"test_66":{"methods":[{"sl":45},{"sl":61},{"sl":68},{"sl":75},{"sl":80},{"sl":86}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":62},{"sl":69},{"sl":76},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_71":{"methods":[{"sl":68}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly no signature trailer field","pass":true,"statements":[{"sl":69}]},"test_72":{"methods":[{"sl":68}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with x_coordinate_only ecc point","pass":true,"statements":[{"sl":69}]},"test_73":{"methods":[{"sl":97}],"name":"Verify toString","pass":true,"statements":[{"sl":99}]},"test_78":{"methods":[{"sl":61},{"sl":68},{"sl":75},{"sl":86}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":62},{"sl":69},{"sl":76},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_83":{"methods":[{"sl":45},{"sl":97}],"name":"Verify toString","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":99}]},"test_84":{"methods":[{"sl":68}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with uncompressed ecc point","pass":true,"statements":[{"sl":69}]},"test_96":{"methods":[{"sl":80}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":82},{"sl":83}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [306, 379, 55, 181, 40, 83, 196, 230, 112, 242, 144, 323, 122, 118, 358, 173, 66, 25, 125, 102, 51], [306, 379, 55, 181, 40, 83, 196, 230, 112, 242, 144, 323, 122, 118, 358, 173, 66, 25, 125, 102, 51], [306, 379, 55, 181, 40, 83, 196, 230, 112, 242, 144, 323, 122, 118, 358, 173, 66, 25, 125, 102, 51], [306, 379, 55, 181, 40, 83, 196, 230, 112, 242, 144, 323, 122, 118, 358, 173, 66, 25, 125, 102, 51], [55], [], [306, 379, 55, 181, 40, 83, 196, 230, 112, 242, 144, 323, 122, 118, 358, 173, 66, 25, 125, 102, 51], [], [], [], [], [], [], [], [], [], [129, 277, 55, 273, 235, 290, 356, 24, 50, 292, 54, 238, 184, 287, 173, 66, 42, 19, 78], [129, 277, 55, 273, 235, 290, 356, 24, 50, 292, 54, 238, 184, 287, 173, 66, 42, 19, 78], [], [], [], [], [], [306, 55, 181, 84, 40, 72, 290, 230, 112, 242, 50, 292, 144, 238, 323, 122, 119, 118, 287, 173, 66, 42, 19, 25, 78, 125, 61, 71, 102, 51], [306, 55, 181, 84, 40, 72, 290, 230, 112, 242, 50, 292, 144, 238, 323, 122, 119, 118, 287, 173, 66, 42, 19, 25, 78, 125, 61, 71, 102, 51], [], [], [], [], [], [306, 55, 181, 40, 230, 112, 242, 144, 323, 122, 118, 287, 173, 66, 19, 25, 78, 125, 102, 51], [306, 55, 181, 40, 230, 112, 242, 144, 323, 122, 118, 287, 173, 66, 19, 25, 78, 125, 102, 51], [], [], [], [306, 273, 181, 235, 40, 96, 196, 230, 359, 144, 323, 122, 358, 173, 66, 25, 149, 47, 125, 140, 4, 102, 51], [], [306, 273, 181, 235, 40, 96, 196, 230, 359, 144, 323, 122, 358, 173, 66, 25, 149, 47, 125, 140, 4, 102, 51], [306, 273, 181, 235, 40, 96, 196, 230, 359, 144, 323, 122, 358, 173, 66, 25, 149, 47, 125, 140, 4, 102, 51], [], [], [129, 277, 273, 235, 356, 54, 184, 287, 173, 66, 19, 78], [], [129, 277, 273, 235, 356, 54, 184, 287, 173, 66, 19, 78], [129, 277, 273, 235, 356, 54, 184, 287, 173, 66, 19, 78], [129, 277, 273, 235, 356, 54, 184, 287, 173, 66, 19, 78], [129, 277, 273, 235, 356, 54, 184, 287, 173, 66, 19, 78], [], [], [], [], [], [175, 379, 83, 330, 73], [], [175, 379, 83, 330, 73], [], [], [], [], [], []]
