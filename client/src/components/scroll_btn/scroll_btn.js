import React, { useEffect, useState } from "react";

const ScrollButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            setIsVisible(true)
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    };
 
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        if (isVisible === true) {
            document.getElementById("scroll-top-btn").style.display = "block";
        }
        else {
            document.getElementById("scroll-top-btn").style.display = "none";
        }
      });

    return(
        <div id="wrap-scroll-btn">
            <div id="wrap-scroll-btn-item">
                <button type="button" title="Scroll top" id="scroll-top-btn" onClick={scrollToTop}><i className="fas fa-arrow-up"></i></button>
            </div>
        </div>
    )

}


export default ScrollButton;