package org.glassfish.jersey.examples.helloworld;

import javax.ws.rs.Path;

/**
 *
 * @author Jakub Podlesak (jakub.podlesak at oracle.com)
 */
@Path("helloworld")
public class Items {

    public String barcode;
    public String name;
    public String unit;
    public float price;

    public void addItems(String barcode,String name,String unit,float price){

        this.barcode = barcode;
        this.name = name;
        this.unit = unit;
        this.price = price;
    }
}
