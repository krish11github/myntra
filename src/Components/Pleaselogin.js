import './Pleaselogin.css';

function Pleaselogin() {

    return (

        <>
            <div className="outer">

                <div className="in-outer">
                    <div>
                        <div className="pl-txt">PLEASE LOG IN</div>
                        <div className="pl-txt">Login to view items in your wishlist.</div>
                    </div>
                    <img className="plimg" src={require('./image/pl_img.png')} alt="" />
                    <button className="loginbtn">LOGIN</button>
                </div>
            </div>
        </>
    )
}

export default Pleaselogin;