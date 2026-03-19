import FooterContact from "../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footers = () => {
    const footerIcon = {
        MdPlace : <MdPlace/>,  
        IoCallSharp : <IoCallSharp />,
        TbMailPlus: <TbMailPlus/>,
    };

    return(
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {
                    FooterContact.map((curData , index) => {
                    const { icon , title , details } = curData;
                        return(
                        <div className="footer-contact" key = {index}>
                            <div className="icon">{footerIcon[icon]} </div>
                            <div>
                                <p>{title}</p>
                                <p>{details}</p>
                            </div>
                        </div>
                        );
                    })
                }
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="grid grid-two-cols">
                        <div className="copyright-text">
                            <p>
                             Copyrights &copy; 2025, All Rights Reserved
                            </p>
                        </div>

                        <div className="footer-menu">
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="https://www.instagram.com/s.himanshu45?igsh=cG1iMW1kZGsyOHY0">Social</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 