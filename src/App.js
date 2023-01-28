import Header from "./component/header";
import Arrow from "./assests/arrow.svg"
import Play from "./assests/play.svg"
function App() {
  return (
    <div>
      <Header />
      <div className="mx-20 my-28">
        <div className="w-1/2 px-16">
          <div>
            <h1 className="text-7xl my-3 font-bold">Simplify Your </h1>
            <h1 className="text-7xl my-3 font-bold"> Money </h1>
            <h1 className="text-7xl my-3 font-bold">  Management.</h1>
          </div>
          <div className="text-lg text-gray-600 my-8">
            Easily track your spending, create a budget and make financial decisions with your user friendly app.
          </div>
          <div className="flex">
            <button className='bg-[#7B62FF] flex gap-4 items-center text-white px-8 py-4 mx-8 rounded-md ' >
              Get Started <img src={Arrow} width={30} />
            </button>
            <button className=' p-2 flex gap-4 items-center'>
              <img src={Play} width={30} /> Watch Demos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
