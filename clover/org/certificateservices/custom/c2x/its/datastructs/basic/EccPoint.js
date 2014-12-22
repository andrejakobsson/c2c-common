var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":263,"id":506,"methods":[{"el":62,"sc":2,"sl":60},{"el":83,"sc":2,"sl":71},{"el":98,"sc":2,"sl":93},{"el":109,"sc":2,"sl":107},{"el":117,"sc":2,"sl":115},{"el":127,"sc":2,"sl":122},{"el":137,"sc":2,"sl":132},{"el":146,"sc":2,"sl":141},{"el":161,"sc":2,"sl":149},{"el":181,"sc":2,"sl":163},{"el":185,"sc":2,"sl":183},{"el":189,"sc":2,"sl":187},{"el":211,"sc":2,"sl":197},{"el":242,"sc":2,"sl":216},{"el":259,"sc":2,"sl":244}],"name":"EccPoint","sl":45}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":60},{"sl":93},{"sl":115},{"sl":122},{"sl":141},{"sl":149},{"sl":183}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":61},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_106":{"methods":[{"sl":71},{"sl":93},{"sl":197},{"sl":216}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":204},{"sl":208},{"sl":209},{"sl":210},{"sl":218},{"sl":220},{"sl":222},{"sl":224},{"sl":225},{"sl":226},{"sl":227},{"sl":228},{"sl":229},{"sl":230},{"sl":231},{"sl":234},{"sl":235},{"sl":236},{"sl":239},{"sl":240},{"sl":241}]},"test_112":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":115},{"sl":122},{"sl":141},{"sl":149}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":80},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":158}]},"test_118":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":115},{"sl":122},{"sl":141}],"name":"Test to generate ECDSA Signature and then verify the signature for algorithm: ecdsa_nistp256_with_sha256","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145}]},"test_119":{"methods":[{"sl":115}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with compressed_lsb_y_1 ecc point","pass":true,"statements":[{"sl":116}]},"test_12":{"methods":[{"sl":149},{"sl":183}],"name":"Verify serialization","pass":true,"statements":[{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_122":{"methods":[{"sl":60},{"sl":93},{"sl":115},{"sl":122},{"sl":141},{"sl":149},{"sl":183}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":61},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_125":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":115},{"sl":122},{"sl":141},{"sl":149},{"sl":183}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":80},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_129":{"methods":[{"sl":107},{"sl":163}],"name":"Verify deserialization","pass":true,"statements":[{"sl":108},{"sl":165},{"sl":166},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":178}]},"test_138":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":149},{"sl":183}],"name":"Verify serialization of EccPoint","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":156},{"sl":158},{"sl":159},{"sl":184}]},"test_140":{"methods":[{"sl":149},{"sl":183}],"name":"Verify serialization","pass":true,"statements":[{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_144":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":115},{"sl":122},{"sl":141},{"sl":149},{"sl":183}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_145":{"methods":[{"sl":107},{"sl":163},{"sl":187}],"name":"Verify deserialization","pass":true,"statements":[{"sl":108},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":178},{"sl":188}]},"test_146":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":115},{"sl":122},{"sl":132},{"sl":141}],"name":"Verify that encodeEccPoint encodes ec public keys properly for algorithm: ecies_nistp256","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":133},{"sl":136},{"sl":142},{"sl":145}]},"test_149":{"methods":[{"sl":149},{"sl":183}],"name":"Verify serialization","pass":true,"statements":[{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_15":{"methods":[{"sl":244}],"name":"Verify toString","pass":true,"statements":[{"sl":246},{"sl":247},{"sl":248}]},"test_151":{"methods":[{"sl":107},{"sl":115},{"sl":122},{"sl":132},{"sl":141},{"sl":163},{"sl":187}],"name":"Verify deserialization of EccPoint","pass":true,"statements":[{"sl":108},{"sl":116},{"sl":123},{"sl":124},{"sl":126},{"sl":133},{"sl":134},{"sl":136},{"sl":142},{"sl":145},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":178},{"sl":179},{"sl":188}]},"test_159":{"methods":[{"sl":107},{"sl":115},{"sl":122},{"sl":163},{"sl":187}],"name":"Verify deserialization of PublicKey","pass":true,"statements":[{"sl":108},{"sl":116},{"sl":123},{"sl":126},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":178},{"sl":188}]},"test_16":{"methods":[{"sl":197},{"sl":216}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":204},{"sl":208},{"sl":209},{"sl":210},{"sl":218},{"sl":220},{"sl":222},{"sl":224},{"sl":225},{"sl":227},{"sl":229},{"sl":231},{"sl":234},{"sl":235}]},"test_160":{"methods":[{"sl":107},{"sl":183}],"name":"Verify that writeFixedFieldSizeKey writes to byte array with correct fieldsize[3]","pass":true,"statements":[{"sl":108},{"sl":184}]},"test_171":{"methods":[{"sl":107},{"sl":122},{"sl":163},{"sl":187}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":108},{"sl":123},{"sl":126},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":178},{"sl":188}]},"test_173":{"methods":[{"sl":60},{"sl":93},{"sl":107},{"sl":115},{"sl":122},{"sl":132},{"sl":141},{"sl":149},{"sl":163},{"sl":183},{"sl":187}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":61},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":108},{"sl":116},{"sl":123},{"sl":126},{"sl":133},{"sl":136},{"sl":142},{"sl":145},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":156},{"sl":158},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":178},{"sl":179},{"sl":184},{"sl":188}]},"test_175":{"methods":[{"sl":244}],"name":"Verify toString","pass":true,"statements":[{"sl":246},{"sl":247},{"sl":248}]},"test_181":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":115},{"sl":122},{"sl":141},{"sl":149},{"sl":183}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_184":{"methods":[{"sl":107},{"sl":163},{"sl":187}],"name":"Verify deserialization","pass":true,"statements":[{"sl":108},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":178},{"sl":188}]},"test_187":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":115},{"sl":122},{"sl":132},{"sl":141}],"name":"Verify that encodeEccPoint encodes ec public keys properly for algorithm: ecdsa_nistp256_with_sha256","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":133},{"sl":136},{"sl":142},{"sl":145}]},"test_19":{"methods":[{"sl":107},{"sl":115},{"sl":141},{"sl":163}],"name":"Verify deserialization ofSignature","pass":true,"statements":[{"sl":108},{"sl":116},{"sl":142},{"sl":145},{"sl":165},{"sl":166},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":178}]},"test_196":{"methods":[{"sl":60},{"sl":93},{"sl":149},{"sl":183}],"name":"Verify serialization of Signature","pass":true,"statements":[{"sl":61},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_206":{"methods":[{"sl":107},{"sl":187}],"name":"Verify that readFixedFieldSizeKey reads from byte array with correct fieldsize[1]","pass":true,"statements":[{"sl":108},{"sl":188}]},"test_219":{"methods":[{"sl":107},{"sl":187}],"name":"Verify that readFixedFieldSizeKey reads from byte array with correct fieldsize[0]","pass":true,"statements":[{"sl":108},{"sl":188}]},"test_225":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":115},{"sl":122},{"sl":141}],"name":"Verify that decodeEccPoint decodes the EccPoints correctly for public key scheme: ecdsa_nistp256_with_sha256","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":80},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145}]},"test_230":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":115},{"sl":122},{"sl":141},{"sl":149},{"sl":183}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":79},{"sl":80},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_232":{"methods":[{"sl":107},{"sl":122},{"sl":163},{"sl":187}],"name":"Verify deserialization","pass":true,"statements":[{"sl":108},{"sl":123},{"sl":126},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":178},{"sl":188}]},"test_235":{"methods":[{"sl":107},{"sl":149},{"sl":163},{"sl":183},{"sl":187}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":108},{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":159},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":178},{"sl":179},{"sl":184},{"sl":188}]},"test_238":{"methods":[{"sl":107},{"sl":115}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType x_coordinate_only","pass":true,"statements":[{"sl":108},{"sl":116}]},"test_242":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":115},{"sl":122},{"sl":141},{"sl":149}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":158}]},"test_25":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":115},{"sl":122},{"sl":141},{"sl":149},{"sl":183}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":80},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_265":{"methods":[{"sl":122}],"name":"Verify constructors and getters and setters","pass":true,"statements":[{"sl":123},{"sl":126}]},"test_273":{"methods":[{"sl":107},{"sl":149},{"sl":163},{"sl":183},{"sl":187}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":108},{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":159},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":178},{"sl":179},{"sl":184},{"sl":188}]},"test_277":{"methods":[{"sl":107},{"sl":163},{"sl":187}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":108},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":178},{"sl":179},{"sl":188}]},"test_279":{"methods":[{"sl":107},{"sl":183}],"name":"Verify that writeFixedFieldSizeKey writes to byte array with correct fieldsize[2]","pass":true,"statements":[{"sl":108},{"sl":184}]},"test_280":{"methods":[{"sl":107},{"sl":163},{"sl":187}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":108},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":178},{"sl":188}]},"test_282":{"methods":[{"sl":149},{"sl":183}],"name":"Verify serialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_287":{"methods":[{"sl":107},{"sl":115},{"sl":122},{"sl":163},{"sl":187}],"name":"Verify deserialization of EcdsaSignature","pass":true,"statements":[{"sl":108},{"sl":116},{"sl":123},{"sl":126},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":178},{"sl":188}]},"test_290":{"methods":[{"sl":107},{"sl":115}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":108},{"sl":116}]},"test_292":{"methods":[{"sl":107},{"sl":115}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType compressed_lsb_y_1","pass":true,"statements":[{"sl":108},{"sl":116}]},"test_297":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":115},{"sl":122},{"sl":141}],"name":"Verify that decodeEccPoint decodes the EccPoints correctly for public key scheme: ecies_nistp256","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":80},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145}]},"test_306":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":115},{"sl":122},{"sl":141},{"sl":149},{"sl":183}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":79},{"sl":80},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_308":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":107},{"sl":115},{"sl":122},{"sl":132},{"sl":141}],"name":"Verify constructors and getters and setters","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":80},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":108},{"sl":116},{"sl":123},{"sl":124},{"sl":126},{"sl":133},{"sl":134},{"sl":136},{"sl":142},{"sl":145}]},"test_319":{"methods":[{"sl":107},{"sl":187}],"name":"Verify that readFixedFieldSizeKey reads from byte array with correct fieldsize[3]","pass":true,"statements":[{"sl":108},{"sl":188}]},"test_323":{"methods":[{"sl":60},{"sl":93},{"sl":115},{"sl":122},{"sl":141},{"sl":149},{"sl":183}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":61},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_328":{"methods":[{"sl":107},{"sl":187}],"name":"Verify that readFixedFieldSizeKey reads from byte array with correct fieldsize[2]","pass":true,"statements":[{"sl":108},{"sl":188}]},"test_330":{"methods":[{"sl":244}],"name":"Verify toString","pass":true,"statements":[{"sl":246},{"sl":250},{"sl":252}]},"test_332":{"methods":[{"sl":149},{"sl":183}],"name":"Verify serialization of RecipientInfo","pass":true,"statements":[{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_335":{"methods":[{"sl":244}],"name":"Verify toString","pass":true,"statements":[{"sl":246},{"sl":247},{"sl":248}]},"test_351":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":244}],"name":"Verify toString","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":246},{"sl":247},{"sl":248},{"sl":250},{"sl":252},{"sl":254},{"sl":255},{"sl":257}]},"test_356":{"methods":[{"sl":107},{"sl":163}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":108},{"sl":165},{"sl":166},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":178}]},"test_357":{"methods":[{"sl":244}],"name":"Verify toString","pass":true,"statements":[{"sl":246},{"sl":247},{"sl":248}]},"test_358":{"methods":[{"sl":60},{"sl":93},{"sl":149},{"sl":183}],"name":"Verify serialization of EcdsaSignature","pass":true,"statements":[{"sl":61},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_359":{"methods":[{"sl":149},{"sl":183}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_369":{"methods":[{"sl":107},{"sl":183}],"name":"Verify that writeFixedFieldSizeKey writes to byte array with correct fieldsize[0]","pass":true,"statements":[{"sl":108},{"sl":184}]},"test_370":{"methods":[{"sl":60},{"sl":93},{"sl":197},{"sl":216}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":61},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":204},{"sl":208},{"sl":209},{"sl":210},{"sl":218},{"sl":220},{"sl":222},{"sl":224},{"sl":225},{"sl":227},{"sl":229},{"sl":231},{"sl":234},{"sl":235},{"sl":236},{"sl":237},{"sl":241}]},"test_372":{"methods":[{"sl":149},{"sl":183}],"name":"Verify serialization","pass":true,"statements":[{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_379":{"methods":[{"sl":60},{"sl":93},{"sl":244}],"name":"Verify toString","pass":true,"statements":[{"sl":61},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":246},{"sl":247},{"sl":248}]},"test_385":{"methods":[{"sl":244}],"name":"Verify toString","pass":true,"statements":[{"sl":246},{"sl":247},{"sl":248}]},"test_4":{"methods":[{"sl":149},{"sl":183}],"name":"Verify serialization of RecipientInfo","pass":true,"statements":[{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_40":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":115},{"sl":122},{"sl":141},{"sl":149},{"sl":183}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":77},{"sl":79},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_42":{"methods":[{"sl":107},{"sl":115}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType compressed_lsb_y_0","pass":true,"statements":[{"sl":108},{"sl":116}]},"test_47":{"methods":[{"sl":149},{"sl":183}],"name":"Verify serialization","pass":true,"statements":[{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_50":{"methods":[{"sl":107},{"sl":115}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType uncompressed","pass":true,"statements":[{"sl":108},{"sl":116}]},"test_51":{"methods":[{"sl":60},{"sl":71},{"sl":93},{"sl":115},{"sl":122},{"sl":141},{"sl":149},{"sl":183}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":61},{"sl":72},{"sl":75},{"sl":76},{"sl":79},{"sl":80},{"sl":82},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":116},{"sl":123},{"sl":126},{"sl":142},{"sl":145},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_54":{"methods":[{"sl":107},{"sl":163},{"sl":187}],"name":"Verify deserialization","pass":true,"statements":[{"sl":108},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":178},{"sl":188}]},"test_55":{"methods":[{"sl":60},{"sl":93}],"name":"Verify constructors and getters and setters","pass":true,"statements":[{"sl":61},{"sl":94},{"sl":95},{"sl":96},{"sl":97}]},"test_61":{"methods":[{"sl":115}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with compressed_lsb_y_0 ecc point","pass":true,"statements":[{"sl":116}]},"test_63":{"methods":[{"sl":93},{"sl":197},{"sl":216}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":204},{"sl":208},{"sl":209},{"sl":210},{"sl":218},{"sl":219},{"sl":220},{"sl":222},{"sl":224},{"sl":225},{"sl":227},{"sl":228}]},"test_65":{"methods":[{"sl":149},{"sl":183}],"name":"Verify serialization of PublicKey","pass":true,"statements":[{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_66":{"methods":[{"sl":60},{"sl":93},{"sl":107},{"sl":115},{"sl":122},{"sl":132},{"sl":141},{"sl":149},{"sl":163},{"sl":183},{"sl":187}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":61},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":108},{"sl":116},{"sl":123},{"sl":126},{"sl":133},{"sl":136},{"sl":142},{"sl":145},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":156},{"sl":158},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":178},{"sl":179},{"sl":184},{"sl":188}]},"test_71":{"methods":[{"sl":115}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly no signature trailer field","pass":true,"statements":[{"sl":116}]},"test_72":{"methods":[{"sl":115}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with x_coordinate_only ecc point","pass":true,"statements":[{"sl":116}]},"test_73":{"methods":[{"sl":244}],"name":"Verify toString","pass":true,"statements":[{"sl":246},{"sl":250},{"sl":252}]},"test_78":{"methods":[{"sl":107},{"sl":115},{"sl":122},{"sl":132},{"sl":149},{"sl":163},{"sl":183},{"sl":187}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":108},{"sl":116},{"sl":123},{"sl":126},{"sl":133},{"sl":136},{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":159},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":178},{"sl":179},{"sl":184},{"sl":188}]},"test_83":{"methods":[{"sl":60},{"sl":93},{"sl":244}],"name":"Verify toString","pass":true,"statements":[{"sl":61},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":246},{"sl":250},{"sl":252}]},"test_84":{"methods":[{"sl":115}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with uncompressed ecc point","pass":true,"statements":[{"sl":116}]},"test_89":{"methods":[{"sl":244}],"name":"Verify toString","pass":true,"statements":[{"sl":246},{"sl":247},{"sl":248}]},"test_92":{"methods":[{"sl":107},{"sl":183}],"name":"Verify that writeFixedFieldSizeKey writes to byte array with correct fieldsize[1]","pass":true,"statements":[{"sl":108},{"sl":184}]},"test_96":{"methods":[{"sl":149},{"sl":183}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":151},{"sl":152},{"sl":155},{"sl":156},{"sl":158},{"sl":184}]},"test_99":{"methods":[{"sl":60},{"sl":93},{"sl":197},{"sl":216}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":61},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":204},{"sl":208},{"sl":209},{"sl":210},{"sl":218},{"sl":220},{"sl":222},{"sl":224},{"sl":225},{"sl":227},{"sl":229},{"sl":231},{"sl":234},{"sl":235}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [306, 379, 55, 99, 181, 297, 40, 83, 196, 230, 225, 112, 242, 144, 146, 308, 323, 122, 370, 118, 358, 173, 138, 351, 66, 25, 125, 187, 102, 51], [306, 379, 55, 99, 181, 297, 40, 83, 196, 230, 225, 112, 242, 144, 146, 308, 323, 122, 370, 118, 358, 173, 138, 351, 66, 25, 125, 187, 102, 51], [], [], [], [], [], [], [], [], [], [306, 181, 297, 40, 230, 225, 112, 242, 144, 146, 308, 118, 106, 138, 351, 25, 125, 187, 51], [306, 181, 297, 40, 230, 225, 112, 242, 144, 146, 308, 118, 106, 138, 351, 25, 125, 187, 51], [308], [], [306, 181, 297, 40, 230, 225, 112, 242, 144, 146, 308, 118, 106, 138, 351, 25, 125, 187, 51], [306, 181, 297, 40, 230, 225, 112, 242, 144, 146, 308, 118, 106, 138, 351, 25, 125, 187, 51], [181, 297, 40, 225, 112, 242, 144, 146, 308, 118, 106, 138, 351, 25, 125, 187], [], [306, 181, 297, 40, 230, 225, 112, 242, 144, 146, 308, 118, 106, 138, 351, 25, 125, 187, 51], [306, 297, 230, 225, 112, 308, 25, 125, 51], [], [306, 181, 297, 40, 230, 225, 112, 242, 144, 146, 308, 118, 106, 138, 351, 25, 125, 187, 51], [], [], [], [], [], [], [], [], [], [], [306, 379, 63, 55, 99, 181, 297, 40, 83, 196, 230, 225, 112, 242, 144, 146, 308, 323, 122, 370, 118, 358, 106, 173, 138, 351, 66, 25, 125, 187, 102, 51], [306, 379, 63, 55, 99, 181, 297, 40, 83, 196, 230, 225, 112, 242, 144, 146, 308, 323, 122, 370, 118, 358, 106, 173, 138, 351, 66, 25, 125, 187, 102, 51], [306, 379, 63, 55, 99, 181, 297, 40, 83, 196, 230, 225, 112, 242, 144, 146, 308, 323, 122, 370, 118, 358, 106, 173, 138, 351, 66, 25, 125, 187, 102, 51], [306, 379, 63, 55, 99, 181, 297, 40, 83, 196, 230, 225, 112, 242, 144, 146, 308, 323, 122, 370, 118, 358, 106, 173, 138, 351, 66, 25, 125, 187, 102, 51], [306, 379, 63, 55, 99, 181, 297, 40, 83, 196, 230, 225, 112, 242, 144, 146, 308, 323, 122, 370, 118, 358, 106, 173, 138, 351, 66, 25, 125, 187, 102, 51], [], [], [], [], [], [], [], [], [], [171, 129, 328, 369, 319, 277, 273, 235, 290, 159, 356, 145, 280, 50, 292, 54, 206, 238, 308, 232, 184, 287, 173, 160, 219, 279, 66, 19, 42, 151, 78, 92], [171, 129, 328, 369, 319, 277, 273, 235, 290, 159, 356, 145, 280, 50, 292, 54, 206, 238, 308, 232, 184, 287, 173, 160, 219, 279, 66, 19, 42, 151, 78, 92], [], [], [], [], [], [], [306, 181, 297, 84, 40, 72, 290, 159, 230, 225, 112, 242, 50, 292, 144, 146, 238, 308, 323, 119, 122, 118, 287, 173, 66, 19, 42, 25, 151, 78, 125, 187, 61, 71, 102, 51], [306, 181, 297, 84, 40, 72, 290, 159, 230, 225, 112, 242, 50, 292, 144, 146, 238, 308, 323, 119, 122, 118, 287, 173, 66, 19, 42, 25, 151, 78, 125, 187, 61, 71, 102, 51], [], [], [], [], [], [306, 171, 181, 297, 40, 159, 230, 225, 112, 242, 144, 146, 308, 232, 323, 122, 118, 287, 173, 66, 25, 151, 78, 125, 187, 265, 102, 51], [306, 171, 181, 297, 40, 159, 230, 225, 112, 242, 144, 146, 308, 232, 323, 122, 118, 287, 173, 66, 25, 151, 78, 125, 187, 265, 102, 51], [308, 151], [], [306, 171, 181, 297, 40, 159, 230, 225, 112, 242, 144, 146, 308, 232, 323, 122, 118, 287, 173, 66, 25, 151, 78, 125, 187, 265, 102, 51], [], [], [], [], [], [146, 308, 173, 66, 151, 78, 187], [146, 308, 173, 66, 151, 78, 187], [308, 151], [], [146, 308, 173, 66, 151, 78, 187], [], [], [], [], [306, 181, 297, 40, 230, 225, 112, 242, 144, 146, 308, 323, 122, 118, 173, 66, 19, 25, 151, 125, 187, 102, 51], [306, 181, 297, 40, 230, 225, 112, 242, 144, 146, 308, 323, 122, 118, 173, 66, 19, 25, 151, 125, 187, 102, 51], [], [], [306, 181, 297, 40, 230, 225, 112, 242, 144, 146, 308, 323, 122, 118, 173, 66, 19, 25, 151, 125, 187, 102, 51], [], [], [], [12, 306, 65, 372, 181, 273, 235, 40, 96, 196, 230, 359, 112, 242, 144, 323, 122, 358, 332, 173, 138, 66, 25, 149, 47, 78, 125, 140, 4, 282, 102, 51], [], [12, 306, 65, 372, 181, 273, 235, 40, 96, 196, 230, 359, 112, 242, 144, 323, 122, 358, 332, 173, 138, 66, 25, 149, 47, 78, 125, 140, 4, 282, 102, 51], [12, 306, 65, 372, 181, 273, 235, 40, 96, 196, 230, 359, 112, 242, 144, 323, 122, 358, 332, 173, 138, 66, 25, 149, 47, 78, 125, 140, 4, 282, 102, 51], [306, 181, 40, 230, 112, 242, 144, 323, 122, 173, 138, 66, 25, 125, 102, 51], [], [12, 306, 65, 372, 181, 273, 235, 40, 96, 196, 230, 359, 112, 242, 144, 323, 122, 358, 332, 173, 138, 66, 25, 149, 47, 78, 125, 140, 4, 282, 102, 51], [12, 306, 65, 372, 181, 273, 235, 40, 96, 196, 230, 359, 144, 323, 122, 358, 332, 173, 138, 66, 25, 149, 47, 78, 125, 140, 4, 282, 102, 51], [], [12, 306, 65, 372, 181, 273, 235, 40, 96, 196, 230, 359, 112, 242, 144, 323, 122, 358, 332, 173, 138, 66, 25, 149, 47, 78, 125, 140, 4, 282, 102, 51], [273, 235, 138, 78], [], [], [], [171, 129, 277, 273, 235, 159, 356, 145, 280, 54, 232, 184, 287, 173, 66, 19, 151, 78], [], [171, 129, 277, 273, 235, 159, 356, 145, 280, 54, 232, 184, 287, 173, 66, 19, 151, 78], [171, 129, 277, 273, 235, 159, 356, 145, 280, 54, 232, 184, 287, 173, 66, 19, 151, 78], [171, 277, 273, 235, 159, 145, 280, 54, 232, 184, 287, 173, 66, 151, 78], [], [171, 129, 277, 273, 235, 159, 356, 145, 280, 54, 232, 184, 287, 173, 66, 19, 151, 78], [129, 356, 173, 66, 19, 151], [129, 356, 173, 66, 19, 151], [129, 356, 173, 66, 19, 151], [129, 356, 173, 66, 19, 151], [], [], [], [], [171, 129, 277, 273, 235, 159, 356, 145, 280, 54, 232, 184, 287, 173, 66, 19, 151, 78], [277, 273, 235, 173, 66, 151, 78], [], [], [], [12, 306, 369, 65, 372, 181, 273, 235, 40, 96, 196, 230, 359, 144, 323, 122, 358, 332, 173, 160, 138, 279, 66, 25, 149, 47, 78, 125, 140, 4, 92, 282, 102, 51], [12, 306, 369, 65, 372, 181, 273, 235, 40, 96, 196, 230, 359, 144, 323, 122, 358, 332, 173, 160, 138, 279, 66, 25, 149, 47, 78, 125, 140, 4, 92, 282, 102, 51], [], [], [171, 328, 319, 277, 273, 235, 159, 145, 280, 54, 206, 232, 184, 287, 173, 219, 66, 151, 78], [171, 328, 319, 277, 273, 235, 159, 145, 280, 54, 206, 232, 184, 287, 173, 219, 66, 151, 78], [], [], [], [], [], [], [], [], [16, 63, 99, 370, 106], [], [16, 63, 99, 370, 106], [16, 63, 99, 370, 106], [16, 63, 99, 370, 106], [16, 63, 99, 370, 106], [], [16, 63, 99, 370, 106], [], [], [], [16, 63, 99, 370, 106], [16, 63, 99, 370, 106], [16, 63, 99, 370, 106], [], [], [], [], [], [16, 63, 99, 370, 106], [], [16, 63, 99, 370, 106], [63], [16, 63, 99, 370, 106], [], [16, 63, 99, 370, 106], [], [16, 63, 99, 370, 106], [16, 63, 99, 370, 106], [106], [16, 63, 99, 370, 106], [63, 106], [16, 99, 370, 106], [106], [16, 99, 370, 106], [], [], [16, 99, 370, 106], [16, 99, 370, 106], [370, 106], [370], [], [106], [106], [370, 106], [], [], [175, 379, 385, 83, 330, 89, 73, 357, 351, 15, 335], [], [175, 379, 385, 83, 330, 89, 73, 357, 351, 15, 335], [175, 379, 385, 89, 357, 351, 15, 335], [175, 379, 385, 89, 357, 351, 15, 335], [], [83, 330, 73, 351], [], [83, 330, 73, 351], [], [351], [351], [], [351], [], [], [], [], [], []]
