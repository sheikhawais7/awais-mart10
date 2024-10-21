import React from 'react'
import img1 from '../../../assets/whatsapp-svgrepo-com.svg'
import img2 from '../../../assets/Instagram.svg'
import img3 from '../../../assets/linkedin.svg'
import img4 from '../../../assets/Github.svg'

export default function Conatact() {
    return (
        <>
            <div className="backImg">
                <div className="animation">
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <div id='contactCard' className="card p-4" style={{ minHeight: "370px" }}>
                            <form className='form'>
                                <label className='mb-1' htmlFor="email">Email</label>
                                <input type="email" className='w-100' name="email" id="email" required />
                                <label className='mt-3 mb-1' htmlFor="msg">Message</label>
                                <textarea name="" id="" className='w-100' rows={4} placeholder='   Your Question / Query / Message ' required />
                                <div className="text-center">
                                    <input type="submit" className="mt-4 border-0 rounded-5 py-2 px-3" style={{ backgroundColor: "#588157" }} defaultValue="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-5">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <div id='contactCard' className="card p-1" style={{ backgroundColor: "#588157", minHeight: "250px"}}>
                            <div className='text-center'>
                                <h3 className='mt-5'>Get Connect With Me</h3>
                                <p className='mt-3'>As you want</p>
                                <a href="https://api.whatsapp.com/send?phone=923227992626"><img src={img1} className="icon" alt="insta-icon" /></a>
                                <a href="https://www.instagram.com/its_me_sheikh_123/"><img src={img2} className="icon ms-4" alt="insta-icon" /></a>
                                <a href="https://www.linkedin.com/in/sheikh-awais-7b0466300/"><img src={img3} className="icon ms-4" alt="linkedin-icon" /></a>
                                <a href="https://github.com/sheikhawais7"><img src={img4} className="icon ms-4" alt="github-icon" /></a>
                                <h5 className="mt-3"><a className="tel-no" href="tel:03227992626">+92 322 7992626</a></h5>
                                <h5><a className="email" href="mailto:shkawaismehboob7@gmail.com">shkawaismehboob7@gmail.com</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
