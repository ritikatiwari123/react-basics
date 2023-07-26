function Blog() {
  return (
    <div>
      <div>
        <h3 className="mt-[20px] text-center">AS SEEN IN</h3>
        <ul className="mt-[20px] flex flex-row justify-center gap-10">
          <li>
            <h4 className="text-lg">BUZZFeed</h4>
          </li>
          <li>
            <h4 className="text-lg">PureWow</h4>
          </li>
          <li>
            <h4 className="text-lg">BRIT+CO</h4>
          </li>
          <li>
            <h4 className="text-lg">POPSUGAR</h4>
          </li>
          <li>
            <h4 className="text-lg">kitchn</h4>
          </li>
        </ul>
      </div>
      <hr className="mt-[20px] w-[1500px] ml-[230px]"></hr>
      <div className="flex flex-row justify-center">
        <div className="ml-[120px] w-[900px] bg-orange-500 h-[600px]">
          <h2 className="font-bold text-fuchsia-900 font-serif mt-[20px] ml-[10px]">
            THE LATEST & GREATEST
          </h2>
        </div>
        <div className="w-[600px] bg-green-800 h-[600px]">hello</div>
      </div>
    </div>
  );
}
export default Blog;
