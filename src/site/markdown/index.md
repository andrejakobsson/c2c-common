# Java Implementation of ITS Intelligent Transport Systems (ITS) Security Security header and certificate formats
# ETSI TS 103 097 V1.1.1

This is a library used to generate data structures from the ETSI TS 103 097 specification.

It supports generation of the following data structures will all related substructures:

- Root CA Certificate
- Enrollment CA Certificate
- Authorization CA Certificate
- Enrollment Credential Certificate
- Authorization Ticket
- Secure Messages for CAM and DENM

Encryption of generated Secure Messages is not implemented in the current version. 

See Javadoc and examples below for more detailed information.

_Important_: In the current version there have been no proper interoperability testing of the signature of neither certificates or message data. The implementation has been done from the specification and no real data structures from another implementation have been available. 

# License
The software is released under AGPL, see LICENSE.txt for more details. In order to get the software under a different licensing agreement please contact p.vendil (at) cgi.com

# Example Code

Full example code can be seen in src/test/java/org/certificateservices/custom/c2x/its.

Before doing anything else you need to initialize a CryptoManager used for all cryptographic operations.

```
    	//Create a crypto manager in charge of communicating with underlying cryptographic components
	    CryptoManager cryptoManager = new DefaultCryptoManager();	
	    // Initialize the crypto manager to use soft keys using the bouncy castle cryptographic provider.
	    cryptoManager.setupAndConnect(new DefaultCryptoManagerParams("BC"));
```

## Root CA
Example code on how to generate Root a CA, use the AuthorityCertGenerator:

```
        // Create an authority certificate generator and initialize it with the crypto manager. 
	    AuthorityCertGenerator authorityCertGenerator = new AuthorityCertGenerator(cryptoManager);
	    
	    // Generate a reference to the Root CA Signing Keys	    
	    KeyPair rootCASigningKeys = cryptoManager.generateKeyPair(PublicKeyAlgorithm.ecdsa_nistp256_with_sha256);
	    
	    // Generate the list of ITS AID values for the Root CA
	    List<BigInteger> rootCAItsAidList = new ArrayList<BigInteger>();
	    rootCAItsAidList.add(new BigInteger("1"));
	    
	    // Generate the root CA Certificate, without any encryption keys or geographic region.
	    Certificate rootCACertificate = authorityCertGenerator.genRootCA("TestRootCA".getBytes("UTF-8"), // subjectName
	    		rootCAItsAidList, //itsAidList 
	    		4, // assuranceLevel 
                3, // confidenceLevel 
	    		new Date(), // validFrom 
                new Date(System.currentTimeMillis() + 1000 * 3600* 24 * 365 * 10), // validTo, 10 years in this example 
	    		null, // geographicRegion
	    		PublicKeyAlgorithm.ecdsa_nistp256_with_sha256, // signingPublicKeyAlgorithm 
	    		rootCASigningKeys.getPublic(), // signPublicKey,
	    		rootCASigningKeys.getPrivate(), // signPrivateKey,
                null, // encPublicKeyAlgorithm
                null); // encPublicKey

```

## Enrollment CA
To generate an Enrollment CA:

```
 // Generate a reference to the Enrollment CA Signing Keys        
	    KeyPair enrollmentCASigningKeys = cryptoManager.generateKeyPair(PublicKeyAlgorithm.ecdsa_nistp256_with_sha256);
	    
	    // Generate the list of ITS AID values for the Enrollment CA
	    List<BigInteger> enrollmentCAItsAidList = new ArrayList<BigInteger>();
	    enrollmentCAItsAidList.add(new BigInteger("2"));

	    // Generate a reference to the Enrollment CA Signing Keys
	    Certificate enrollmentCACertificate =authorityCertGenerator.genEnrollmentAuthorityCA(
	    		"TestEnrollmentCA".getBytes("UTF-8"),//subjectName 
	    		enrollmentCAItsAidList, //itsAidList 
	    		4, //assuranceLevel 
	    		3, //confidenceLevel 
	    		new Date(), // validFrom 
                new Date(System.currentTimeMillis() + 1000 * 3600* 24 * 365 * 10), // validTo, 10 years in this example 
	    		null, // geographicRegion
	    		PublicKeyAlgorithm.ecdsa_nistp256_with_sha256, // signingPublicKeyAlgorithm 
	    		enrollmentCASigningKeys.getPublic(), 
                null, // encPublicKeyAlgorithm
                null, // encPublicKey
	    		rootCASigningKeys.getPrivate(), 
	    		rootCACertificate);

```

## Authority CA
To generate an Authority CA:

```
        // Generate a reference to the Authorization CA Signing Keys	    
	    KeyPair authorityCASigningKeys = cryptoManager.generateKeyPair(PublicKeyAlgorithm.ecdsa_nistp256_with_sha256);
	    
	    // Generate the list of ITS AID values for the Authorization CA
	    List<BigInteger> authorityCAItsAidList = new ArrayList<BigInteger>();
	    authorityCAItsAidList.add(new BigInteger("3"));

	    // Generate a reference to the Authorization CA Signing Keys
	    Certificate authorityCACertificate = authorityCertGenerator.genAuthorizationAuthorityCA(
	    		"TestAuthorizationCA".getBytes("UTF-8"),//subjectName 
	    		enrollmentCAItsAidList, //itsAidList 
	    		4, //assuranceLevel 
	    		3, //confidenceLevel 
	    		new Date(), // validFrom 
                new Date(System.currentTimeMillis() + 1000 * 3600* 24 * 365 * 10), // validTo, 10 years in this example 
	    		null, // geographicRegion
	    		PublicKeyAlgorithm.ecdsa_nistp256_with_sha256, // signingPublicKeyAlgorithm 
	    		authorityCASigningKeys.getPublic(), 
                null, // encPublicKeyAlgorithm
                null, // encPublicKey
	    		rootCASigningKeys.getPrivate(), 
	    		rootCACertificate);

```

## Enrollment Credential

To create an Enrollment Credential use the EnrollmentCredentialCertGenerator.

```
// First we create a Enrollment Credential Cert Generator using the newly created Enrollment CA.
        EnrollmentCredentialCertGenerator enrollmentCredentialCertGenerator = new EnrollmentCredentialCertGenerator(cryptoManager, enrollmentCACertificate, enrollmentCASigningKeys.getPrivate());
	    // Next we generate keys for an enrollment credential.
	    KeyPair enrollmentCredentialSigningKeys = cryptoManager.generateKeyPair(PublicKeyAlgorithm.ecdsa_nistp256_with_sha256);
	    // Next we generate keys for an enrollment credential.
	    KeyPair enrollmentCredentialEncryptionKeys = cryptoManager.generateKeyPair(PublicKeyAlgorithm.ecdsa_nistp256_with_sha256);

	    // Generate the list of ITS AID values for the enrollment credential
	    List<BigInteger> enrollCredItsAidList = new ArrayList<BigInteger>();
	    enrollCredItsAidList.add(new BigInteger("4"));
	    // Then use the following command to generate a enrollment credential
	    Certificate enrollmentCredential = enrollmentCredentialCertGenerator.genEnrollmentCredential(
	    		SignerInfoType.certificate,//signerInfoType 
	    		"TestEnrollmentCredential".getBytes("UTF-8"),// subjectName 
	    		enrollCredItsAidList,// itsAidList 
	    		4,// assuranceLevel 
	    		3,// confidenceLevel 
	    		new Date(), // validFrom 
                new Date(System.currentTimeMillis() + 1000 * 3600* 24 * 365 * 10), // validTo, 10 years in this example 
	    		null,// geographicRegion 
	    		PublicKeyAlgorithm.ecdsa_nistp256_with_sha256,// signingPublicKeyAlgorithm 
	    		enrollmentCredentialSigningKeys.getPublic(),// signPublicKey 
	    		PublicKeyAlgorithm.ecies_nistp256,// encPublicKeyAlgorithm 
	    		enrollmentCredentialEncryptionKeys.getPublic() // encPublicKey
	    		);
```

## Authorization Ticket 
To create an Authorization Ticket l use the AuthorizationTicketCertGenerator.

```
        // Authorization Tickets are created by the AuthorizationTicketCertGenerator
	    AuthorizationTicketCertGenerator authorizationTicketCertGenerator = new AuthorizationTicketCertGenerator(cryptoManager, authorityCACertificate, authorityCASigningKeys.getPrivate());
	    
	    // Next we generate keys for an authorization ticket.
	    KeyPair authorizationTicketSigningKeys = cryptoManager.generateKeyPair(PublicKeyAlgorithm.ecdsa_nistp256_with_sha256);
	    
	    // Next we generate keys for an authorization ticket.
	    KeyPair authorizationTicketEncryptionKeys = cryptoManager.generateKeyPair(PublicKeyAlgorithm.ecdsa_nistp256_with_sha256);
	    
	    // Generate the list of ITS AID values for the Authorization Ticket
	    List<BigInteger> authTicketItsAidList = new ArrayList<BigInteger>();
	    authTicketItsAidList.add(new BigInteger("4"));
	    
	    Certificate authorizationTicket = authorizationTicketCertGenerator.genAuthorizationTicket(
	    		SignerInfoType.certificate,//signerInfoType 
	    		enrollCredItsAidList,// itsAidList 
	    		4,// assuranceLevel 
	    		3,// confidenceLevel 
	    		new Date(), // validFrom 
                new Date(System.currentTimeMillis() + 1000 * 3600* 24 * 365 * 10), // validTo, 10 years in this example 
	    		null,// geographicRegion 
	    		PublicKeyAlgorithm.ecdsa_nistp256_with_sha256,// signingPublicKeyAlgorithm 
	    		authorizationTicketSigningKeys.getPublic(),// signPublicKey 
	    		PublicKeyAlgorithm.ecies_nistp256,// encPublicKeyAlgorithm 
	    		authorizationTicketEncryptionKeys.getPublic()); // encPublicKey
```

## Secured Messages

To create Secured Messages use the SecuredMessageGenerator.

```
        // Secure Messages are created by the Secure Message Generator
	    SecuredMessageGenerator securedMessageGenerator = new SecuredMessageGenerator(cryptoManager, PublicKeyAlgorithm.ecdsa_nistp256_with_sha256, authorizationTicket, authorityCASigningKeys.getPrivate(), PublicKeyAlgorithm.ecies_nistp256, authorizationTicketEncryptionKeys.getPrivate());
	    
	    // Next to generate a CAM Message, supported SignerIntoTypes are certificate_digest_with_ecdsap256 and certificate
	    SecuredMessage signedCAMMessage = securedMessageGenerator.genSignedCAMMessage(SignerInfoType.certificate_digest_with_ecdsap256, "SomeMessageData".getBytes("UTF-8"));
	    
	    byte[] someHash = {0x01,0x02,0x03};
	   // To Generate a CAM Unreqognized certificates message
	    List<HashedId3> unrecognizedCertificates = new ArrayList<HashedId3>();
	    unrecognizedCertificates.add(new HashedId3(someHash));	    
		SecuredMessage unReqognizedMessages= securedMessageGenerator.genSignedCAMUnrecognizedCertificatesMessage(SignerInfoType.certificate, unrecognizedCertificates);
		
		// To Generate a DENM Message
		ThreeDLocation generationLocation = new ThreeDLocation(900000000, 1800000000 , 100);
		SecuredMessage signedDENMMessage = securedMessageGenerator.genSignedDENMMessage(generationLocation, "SomeMessageData".getBytes("UTF-8"));
```

## To Encode and Decode Certificates and Secured Messages

```
        // To encode a certificate to a byte array use the following method
	    byte[] certificateData = authorizationTicket.getEncoded();
	    
	    // To decode certificate data use the following constructor
	    Certificate decodedCertificate = new Certificate(certificateData);

        // To encode a secured message to a byte array use the following method.
	    byte[] messageData = signedDENMMessage.getEncoded();
	    
	    // To decode message data use the following constructor.
	    SecuredMessage decodedMessage = new SecuredMessage(messageData);
```