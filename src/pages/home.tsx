export default function Home() {
  return (
    <div className="rounded-xl flex items-center justify-center min-h-screen bg-black text-lime-500 px-4 py-8">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="max-w-md animate-fade-in">
            <h1 className="text-4xl font-mono mb-4 break-words">Welcome</h1>
            <p className="text-lg font-mono break-words">
              Feel free to browse around.
            </p>
          </div>
          <img
            src="/giffs/walkingCode.gif"
            alt="Walking Code"
            className="w-[188px] h-[294px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

