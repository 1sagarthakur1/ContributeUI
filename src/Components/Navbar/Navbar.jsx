import contributeUiLOGO from '../../Images/Home/contributeUiLOGO.png';
// import RightPart from './RightPart';


export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="Upper-navbar">
                <div>
                    <div className="logo">
                        <img id="logoImg" src={contributeUiLOGO} alt="" />
                    </div>
                </div>
                {/* <RightPart /> */}
            </div>
        </nav>
    )
}
