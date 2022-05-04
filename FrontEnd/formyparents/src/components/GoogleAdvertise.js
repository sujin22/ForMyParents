import React, { useEffect } from "react";

const GoogleAdvertise = ({
    className = "adsbygoogle",
    client = "ca-pub-6412419373672048", 
    slot = "2987557545",
    format = "fluid", 
    responsive = "",
    layoutKey = "-fb+5w+4e-db+86"
    }) => { 
        useEffect(() => {
             try { 
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                console.log("Advertise is pushed");
            } catch (e) {
                if (process.env.NODE_ENV !== "production") 
                console.error("AdvertiseError", e);
             } }, []); 
             
             return (
                  <ins 
                  className={className} 
                  style={{ 
                      overflowX: "auto", 
                      overflowY: "hidden", 
                      display: "block", 
                      textAlign: "center" 
                    }} 
                    data-ad-client={client} 
                    data-ad-slot={slot} 
                    data-ad-format={format} 
                    data-full-width-responsive={responsive} 
                    data-ad-layout-key={layoutKey} 
                    /> 
                    ); 
                };
                
export const infeedProps = {
     format: "fluid", 
     layoutKey: "-fb+5w+4e-db+86", 
     client: "ca-pub-6412419373672048", 
     slot: "2987557545", 
     responsive: "true" 
};
