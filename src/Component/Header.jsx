import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto lg:px-28 my-2 lg:my-5'>
            <div className='flex justify-between items-center'>
                <div className='px-36'>
                    <h1 className='text-6xl font-bold pr-52'>One Step Closer To Your <span className='bg-gradient-to-r  from-emerald-500 to-green-500 text-transparent bg-clip-text'>Dream Job</span></h1>
                    <p className='text-xl font-semibold text-gray-500 mt-5 pr-28'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className=' mt-7 border-none btn bg-gradient-to-r from-emerald-500 to-green-500'>Get Started</button>
                </div>
                <div>
                    <img className=' mr-96 ' src="https://img.freepik.com/free-photo/fun-3d-cartoon-illustration-indian-businessman_183364-114475.jpg?w=360&t=st=1681135003~exp=1681135603~hmac=77f12b7a0ee0f0ebc7cd048164c13e66e6932dc704012a5e197a7a9c7685ed7c" alt="" />
                    
                </div>
            </div>

        </div>
    );
};

export default Header;