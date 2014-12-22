var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":76,"id":3748,"methods":[{"el":44,"sc":2,"sl":39},{"el":51,"sc":2,"sl":46},{"el":56,"sc":2,"sl":53},{"el":63,"sc":2,"sl":58},{"el":75,"sc":2,"sl":65}],"name":"HashedIdSpec","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_131":{"methods":[{"sl":58}],"name":"Verify deserialization of a hash value","pass":true,"statements":[{"sl":60},{"sl":62}]},"test_185":{"methods":[{"sl":39}],"name":"Verify the correct octet length of the HashedId3","pass":true,"statements":[{"sl":41},{"sl":42}]},"test_2":{"methods":[{"sl":65}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":67},{"sl":68},{"sl":69},{"sl":71},{"sl":72},{"sl":73},{"sl":74}]},"test_291":{"methods":[{"sl":53}],"name":"Verify serialization of a hash value","pass":true,"statements":[{"sl":55}]},"test_348":{"methods":[{"sl":46}],"name":"Verify IllegalArgumentException is thrown if to small hash value is given.","pass":true,"statements":[{"sl":48},{"sl":50}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [185], [], [185], [185], [], [], [], [348], [], [348], [], [348], [], [], [291], [], [291], [], [], [131], [], [131], [], [131], [], [], [2], [], [2], [2], [2], [], [2], [2], [2], [2], [], []]