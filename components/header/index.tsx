import React from 'react'

 const Header = () => {
  return<>
<header className="h-[600px] w-full bg-[url('https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg')] bg-cover bg-center bg-no-repeat relative">
    <div className='absolute top-1/3 left-1/4 text-white w-3/5 flex flex-col gap-4 justify-start items-start'>
        <h2 className='text-4xl font-bold '>
            Its all coming together
        </h2>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem minima, quis aperiam perferendis quaerat provident recusandae ipsum debitis libero.</p>
        <button className='py-2 px-5 rounded-3xl bg-orange-400 text-md font-bold hover:bg-orange-300 hover:text-slate-700 transition-colors hover:ease-in-out'>
            View more
        </button>
    </div>
</header>
  </>
}

export default Header;
