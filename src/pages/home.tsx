
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-lime-500 px-4">
      <div className="flex flex-row items-center gap-8">
        <img
          src="/giffs/walkingCode.gif"
          alt="Walking Code"
          className="w-[188px] h-[294px] object-contain"
        />
        <div className="max-w-md animate-fade-in">
          <h1 className="text-4xl font-mono mb-4">Enter the Code</h1>
          <p className="text-lg font-mono">
            Welcome to my page, feel free to browse around.
          </p>
        </div>
      </div>
    </div>
  );
}
