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
package org.certificateservices.custom.c2x.its.datastructs;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;

/**
 * Interface for serializing structures to a byte array
 * 
 * @author Philip Vendil, p.vendil@cgi.com
 *
 */
public interface StructSerializer {
	

	/**
	 * Implementation should serialize the data and write to the data output stream.
	 * 
	 * @param out data output stream
	 * @throws IOException if communication problems occurred during serialization.
	 */
	public void serialize(DataOutputStream out) throws IOException;

	/**
	 * Implementation should de-serialize the data and populate its properties.
	 * 
	 * @param in data input stream to read from.
	 * @throws IOException if communication problems occurred during serialization.
	 */
	public void deserialize(DataInputStream in) throws IOException;
	


}
