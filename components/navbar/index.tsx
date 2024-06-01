const Navbar = () => {
  return (
    <>
      <section className="w-full relative">
        <div className="w-full h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center text-white clipy_path">
          <div className="w-3/5 mt-7">
            <div className="w-full flex items-center justify-between">
              <ul className="flex items-center justify-evenly font-bold text-lg gap-7 p-5">
                <li>europass</li>
                <li>Europass tools</li>
                <li>Learn in Europe</li>
                <li>Work in Europe</li>
                <li>About Europass</li>
                <li>Stakeholders</li>
              </ul>
              <button className="py-2 px-4 font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl relative bottom-3">
                Login to Europas
              </button>
            </div>
          </div>

          {/* <div className="absolute right-0 top-40 text-amber-600 z-1">
            <h1 className="font-bold text-6xl my-5">Europass digital tools</h1>
            <p className="text-2xl mt-3">
              Explore all the digital tools that europass offers you to manage
              your learning and career.
            </p>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Navbar;
