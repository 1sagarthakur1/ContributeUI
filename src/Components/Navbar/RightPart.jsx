import searchIcon from '../../Images/Home/search icons.png';
import signInIcon from '../../Images/Home/icons8-sign-in-96.png';
import MyImage from '../../Images/Home/My Image.png';
import Humburger from '../../Images/Home/Humburger.png';


export default function RightPart() {
    return (
        <div className="search_singIn">
            <div>
                <img id="searchIcons" src={searchIcon} alt="" />
                <input className="inputSearchBar" placeholder="Search" />
            </div>
            <button className="signIn">
                <h2>Sign in</h2>
                <img id="logoSign" src={signInIcon} alt="" />
            </button>
            <div>
                <div className="UserImg">
                    <img id="UserMyImage" src={MyImage} alt="" />
                </div>
            </div>
            <div>
                <div>
                    <img id="humburger" src={Humburger} alt="" />
                </div>
            </div>
        </div>
    )
}
