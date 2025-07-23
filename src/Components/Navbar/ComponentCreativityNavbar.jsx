import contributeUiLOGO from '../../Images/Home/contributeUiLOGO.png';

export default function ComponentCreativityNavbar() {
    return (
        <nav>
            <div style={{height:'35px', width:'100vw'}} className="Upper-navbar">
                <div>
                    <div >
                        <img style={{width:'80px', marginTop:'10px', marginLeft:'10px'}}  src={contributeUiLOGO} alt="" />
                    </div>
                </div>
            </div>
        </nav>
    )
}