import './footer.css'

function Footer(){
    return(
        <div className='footer'>
        <div className='container1'>
            <h1 className='swiggy'>Swiggy<span>.</span></h1>
            <div className='footerWrap'>
            <div className='box'>
                <h2>about Swiggy</h2>
                <p>blog</p>
                <p>work with us</p>
                <p>investor relations</p>
                <p>report </p>
                <p>contact us</p>
            </div>
            <div className='box'>
                <h2>Swiggy verse</h2>
                <p>Swiggy</p>
                <p>feeding india</p>
                <p>hyperpure</p>
                <p>our land</p>
            </div>
            <div className='box'>
                <h2>services</h2>
                <p>partner with us</p>
                <p>apps for you</p>
                <p>doing for work</p>
            </div>
            <div className='box'>
                <h2>learn more</h2>
                <p>privacy</p>
                <p>security</p>
                <p>terms</p>
                <p>sitemap</p>
            </div>
            <div className='box'>
                <h2>social links</h2>
                <p>fb</p>
                <p>insta</p>
                {/* <p>ig</p> */}
                <p>twitter</p>
                {/* <p>yt</p> */}
            </div>
            </div>
            <hr></hr>
            <p className='endtext'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Doing.™ Ltd. All rights reserved</p>
        </div>
        </div>
    )
};

export default Footer;