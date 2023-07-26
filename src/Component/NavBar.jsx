function NavBar() {
  return (
    <div>
      <nav>
        <ul className="flex flex-row justify-center gap-7">
          <li className="flex-2 w-[500px]">
            <h1>pinch of yum</h1>
          </li>

          <li>
            <a href="default.asp">HOME</a>
          </li>
          <li>
            <a href="default.asp">RECEIPES</a>
          </li>
          <li>
            <a href="default.asp">ABOUT</a>
          </li>
          <li>
            <a href="default.asp">START HERE</a>
          </li>
        </ul>
      </nav>
      <h1 className="flex justify-center gap-1 pt-10 ">
        <div className="text-xl font-bold font-serif">
          SIMPLE RECEIPES MADE FOR
        </div>

        <div className="block md:inline home-heading text-lg text-fuchsia-900">
          real actual everyday life
        </div>
      </h1>
    </div>
  );
}

export default NavBar;
