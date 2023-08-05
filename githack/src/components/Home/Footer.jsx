import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes["footerContainer"]}>
        <div className={classes['footerWrapper']}>
                <div className={classes['footerCol']} >
                    <strong>

                    GreenTribe
                    </strong>
                    <p style={{ width: "162px", marginBlockStart: "21px"}}>
                        Where we unite the community and clean up the neighborhood together.
                    </p>
                </div>  
                 <div className={classes['footerCol']} >
                    <strong>
                    Links
                    </strong>
                    <ul style={{ width: "122px", marginBlockStart: "21px"}}>
                        <li>
                            Home
                        </li>
                        <li>
                            About us
                            </li>
                        <li>
                            Get started
                        </li>
                        <li>
                            For investors
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>  
                 <div className={classes['footerCol']} >
                    <strong>
                        Contact
                    </strong>
                    <ul style={{ marginBlockStart: "21px"}}>
                        <li>
                    123 address street
                            </li>
                            <li>

                    address lane, AC 23081
                            </li>
                    <li>

                    999-999-9999
                    </li>

                    </ul>
                    <strong className={classes["email"]}>
  <a href="mailto:email@email.com">email@email.com</a>
</strong>
                </div> 
                  <div className={classes['footerCol']} >
                  <strong style={{ width: "262px", marginBlockStart: "21px"}}>

                    Share us on social media
                    </strong>
            
                </div>
        
        </div>
        
    </div>
  );
}

export default Footer;
