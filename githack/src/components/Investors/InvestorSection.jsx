import React from "react"
import classes from "./InvestorSection.module.css";
import HomeHero from "../Home/HomeHero";
import Line from "../Line/Line";


function InvestorSection() {
    return (
          <>
            <HomeHero />
            <div className={"my-5 mx-5"}>
                <h1 className={classes['header']}> 
                Hello 
                </h1>
                <div className={classes['companyContainer']}>
                    <div className={classes["headerContainer"]}>

                        <h2 className={classes["headerLabel"]}>Company Information</h2>
                        <button className={classes['editButton']}>
                            Edit
                        </button>
                    </div>
                <div className={classes["columnContainer"]}>
                    <div className={classes["column"]}>
                        {/* Content for the first column */}
                        <h2>Column 1</h2>
                        <p>Content for the first column goes here.</p>
                    </div>
                    <div className={classes["column"]}>
                        {/* Content for the second column */}
                        <h2>Column 2</h2>
                        <p>Content for the second column goes here.</p>
                    </div>
                    <div className={`${classes["column"]} ${classes["customCard"]}`}>
                        {/* Content for the third column */}
                        <h2>Column 3</h2>
                        <p>Content for the third column goes here.</p>
                    </div>
                </div>
            </div>

            
            
            <Line />

            <h1 className={classes['header']}> 
                Hello 
            </h1>
            <div className={classes['recycleContainer']}>
                <div className={classes['pairedCentersCard']}>
                    hey
                </div>
                <div className={classes['pairedCentersCard']}>
                    hey
                </div>
                <div className={classes['pairedCentersCard']}>
                    hey
                </div>

            </div>
        </div>
        </>
    )
}


export default InvestorSection