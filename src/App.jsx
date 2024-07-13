import "./App.css";

function App() {
  return (
    <div className="rounded-md border-[1px]  w-[268px] h-[213px] mt-[250px] ml-[600px]  ">
      <div className="p-[24px] flex flex-col items-center content-center">
        <div className="rounded-full bg-neutral-400 h-14 w-[56px]  "></div>
        <header className="text-center text-lg pt-[15px] font-medium">
          Headline
        </header>
        <p className="text-gray-400 text-center">
          Please add your content here. Keep it short and simple. And smile :
        </p>
      </div>
    </div>
  );
}

export default App;
