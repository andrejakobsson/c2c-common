var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":154,"id":3054,"methods":[{"el":57,"sc":2,"sl":53},{"el":111,"sc":2,"sl":81},{"el":150,"sc":2,"sl":135}],"name":"AuthorizationTicketCertGenerator","sl":39}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_144":{"methods":[{"sl":81}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":96},{"sl":99},{"sl":100},{"sl":101},{"sl":107}]},"test_181":{"methods":[{"sl":81}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":107}]},"test_251":{"methods":[{"sl":81}],"name":"Verify that illegal argument exception is thrown for messages with unsupported subject type","pass":true,"statements":[{"sl":94},{"sl":109}]},"test_40":{"methods":[{"sl":135}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":148},{"sl":149}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [251, 181, 144], [], [], [], [], [], [], [], [], [], [], [], [], [251, 181, 144], [181, 144], [181, 144], [181], [], [144], [144], [144], [], [], [], [], [], [181, 144], [], [251], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [40], [], [], [], [], [], [], [], [], [], [], [], [], [40], [40], [], [], [], [], []]
