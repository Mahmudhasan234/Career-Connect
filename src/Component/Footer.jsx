import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='bg-black text-white flex flex-col lg:flex-row items-center justify-center lg:p-10 h-full lg:gap-44 gap-5 p-3'>
                <div className=''><h1 className=" normal-case text-lg lg:text-2xl font-bold">Career <span className='bg-gradient-to-r  from-emerald-500 to-green-500 text-transparent bg-clip-text'>Connect</span></h1>
                    <p className='text-lg text-gray-400'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                </div>
                <div className=''>
                    <h1 className="text-xl font-bold">Company</h1>
                    <ul>
                        <li>About us</li>
                        <li>Work</li>
                        <li> Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div> <h1 className="text-xl font-bold">Product</h1>
                    <ul>
                        <li>Prototype</li>
                        <li>Plan and Pricing</li>
                        <li> Customers</li>
                        <li>Integrations </li>
                    </ul>
                </div>
                <div> <h1 className="text-xl font-bold">Support</h1>
                    <ul>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li> Became a Partner </li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div> <h1 className="text-xl font-bold">Contact</h1>
                    <ul>
                        <li>524, Broadway, NY</li>
                        <li>01122334455667</li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;