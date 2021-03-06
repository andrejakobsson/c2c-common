/************************************************************************
 *                                                                       *
 *  Certificate Service -  Car2Car Core                                  *
 *                                                                       *
 *  This software is free software; you can redistribute it and/or       *
 *  modify it under the terms of the GNU Affero General Public License   *
 *  License as published by the Free Software Foundation; either         *
 *  version 3   of the License, or any later version.                    *
 *                                                                       *
 *  See terms of license at gnu.org.                                     *
 *                                                                       *
 *************************************************************************/
package org.certificateservices.custom.c2x.its.datastructs.cert


import org.bouncycastle.util.encoders.Hex;
import org.certificateservices.custom.c2x.its.datastructs.BaseStructSpec;
import org.certificateservices.custom.c2x.its.datastructs.basic.CircularRegion
import org.certificateservices.custom.c2x.its.datastructs.basic.Duration
import org.certificateservices.custom.c2x.its.datastructs.basic.GeographicRegion
import org.certificateservices.custom.c2x.its.datastructs.basic.IntX
import org.certificateservices.custom.c2x.its.datastructs.basic.RegionType;
import org.certificateservices.custom.c2x.its.datastructs.basic.TwoDLocation
import org.certificateservices.custom.c2x.its.datastructs.basic.Duration.Unit;
import org.certificateservices.custom.c2x.its.datastructs.basic.Time32
import org.certificateservices.custom.c2x.its.datastructs.cert.ItsAidPrioritySsp;

import spock.lang.IgnoreRest;
import spock.lang.Specification;
import spock.lang.Unroll;

import static org.certificateservices.custom.c2x.its.datastructs.cert.ValidityRestrictionType.*;
/**
 *
 * @author Philip Vendil, p.vendil@cgi.com
 *
 */
class ItsAidPrioritySspSpec extends BaseStructSpec {
	
	ItsAidPrioritySsp ias1 = new ItsAidPrioritySsp(new IntX(new BigInteger(123)), 255, new byte[31]);
	
	def "Verify the constructors and getters"(){
		expect:
		ias1.itsAid.getValue().intValue() == 123
		ias1.maxPriority == 255
		ias1.serviceSpecificPermissions.length == 31
		
		when:
		new ItsAidPrioritySsp(new IntX(new BigInteger(123)), 255, new byte[32]);
		
		then:
		thrown IllegalArgumentException

	}

	
	def "Verify serialization"(){
		expect:
		serializeToHex(ias1) == "7bff1f00000000000000000000000000000000000000000000000000000000000000"
	}
	
	def "Verify deserialization"(){
		setup:
	    ItsAidPrioritySsp ias2 = deserializeFromHex(new ItsAidPrioritySsp(),"7bff1f00000000000000000000000000000000000000000000000000000000000000");
		expect:
		ias2.itsAid.getValue().intValue() == 123
		ias2.maxPriority == 255
		ias2.serviceSpecificPermissions.length == 31
		


	}

	def "Verify hashCode and equals"(){
		setup:
		ItsAidPrioritySsp ias2 = new ItsAidPrioritySsp(new IntX(new BigInteger(123)), 255, new byte[31]);
		ItsAidPrioritySsp ias3 = new ItsAidPrioritySsp(new IntX(new BigInteger(125)), 255, new byte[31]);
		ItsAidPrioritySsp ias4 = new ItsAidPrioritySsp(new IntX(new BigInteger(123)), 255, new byte[16]);
		ItsAidPrioritySsp ias5 = new ItsAidPrioritySsp(new IntX(new BigInteger(123)), 254, new byte[31]);
		expect:
		ias1 == ias2
		ias1 != ias3
		ias1 != ias4
		ias1 != ias5
		
		ias1.hashCode() == ias2.hashCode()
		ias1.hashCode() != ias3.hashCode()
		ias1.hashCode() != ias4.hashCode()
		ias1.hashCode() != ias5.hashCode()
	}
	
	def "Verify toString"(){
		expect:
		ias1.toString() == "ItsAidPrioritySsp [itsAid=IntX [value=123], maxPriority=255, serviceSpecificPermissions=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]"		
	}
}

