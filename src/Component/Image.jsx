import image from "../Images/ghevar.jpeg";
import thali from "../Images/rajasthani-thali.jpg";
import image2 from "../Images/image1.jpg";
import rajasthan from "../Images/taste.jpg";

function Image() {
  function getReceipeCategories() {
    fetch("http://127.0.0.1:8000/receipes/receipe-categories/", {
      headers: {
        "content-type": "application/json",
        // "Access-Control-Allow-Origin": "http://localhost:8000",
        "Access-Control-Allow-Credentials": true,
      },
      mode: "no-cors",
    })
      .then((response) => console.log(response))
      .then((json) => json);

    // fetch("https://jsonplaceholder.typicode.com/todos/1", )
    //   .then((response) => console.log(response))
    //   .then((json) => console.log(json));
  }
  // console.log(getReceipeCategories.data);

  // const data = fetch({
  //   url:''
  // })

  return (
    <div className="flex justify-center gap-8 flex-wrap bg-gray-100 h-[800]">
      <div className="mt-[30px]">
        <img className="w-[320px] h-[400px]" src={image} alt="ghevar"></img>
        <button className="relative w-[180px] bg-yellow-500 text-center ml-[70px] -translate-y-3 h-[30px]">
          Ghevar
        </button>
      </div>
      <div className="mt-[30px]">
        <img
          className="w-[320px] h-[400px]"
          src={thali}
          alt="rajasthani-thali"
        ></img>
        <button
          className="relative w-[180px] bg-yellow-500 text-center ml-[70px] -translate-y-3 h-[30px]"
          onClick={getReceipeCategories()}
        >
          rajasthani thali
        </button>
      </div>
      <div className="mt-[30px]">
        <img className="w-[320px] h-[400px]" src={image2} alt="rajasthn"></img>
        <button className="relative w-[180px] bg-yellow-500 text-center ml-[70px] -translate-y-3 h-[30px]">
          rajasthani food
        </button>
      </div>
      <div className="mt-[30px]">
        <img
          className="w-[320px] h-[400px]"
          src={rajasthan}
          alt="food-pic"
        ></img>
        <button className="relative w-[180px] bg-yellow-500 text-center ml-[70px] -translate-y-3 h-[30px]">
          food pic
        </button>
      </div>
      <ul className="flex flex-row justify-center gap-20">
        <li className="flex-2 ">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={image2}
            alt="rajasthn"
          ></img>
          <p className="w-[100px]">hello</p>
        </li>
        <li className="flex-2">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={image2}
            alt="rajasthn"
          ></img>
          <p className="w-[100px]">hello</p>
        </li>
        <li className="flex-2">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={image2}
            alt="rajasthn"
          ></img>
          <p>hello</p>
        </li>
        <li className="flex-2 ">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={image2}
            alt="rajasthn"
          ></img>
          <p>hello</p>
        </li>
        <li className="flex-2">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={image2}
            alt="rajasthn"
          ></img>
          <p>hello</p>
        </li>
        <li className="flex-2">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={image2}
            alt="rajasthn"
          ></img>
          <p>hello</p>
        </li>
        <li className="flex-2">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={image2}
            alt="rajasthn"
          ></img>
          <p>hello</p>
        </li>
        <li className="flex-2 ">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={image2}
            alt="rajasthn"
          ></img>
          <p>hello</p>
        </li>
      </ul>

      <div className="mt-[40px] mb-[20px] flex flex-row justify-center gap-5">
        <input className=" flex-2 w-[500px] h-[50px] border-solid"></input>
        <span className="flex-2 font-size:2rem;">or</span>
        <button className="flex-2 w-[400px] h-[50px] bg-fuchsia-900 font-size: 3rem">
          +View all receipes
        </button>
      </div>
    </div>
  );
}

export default Image;
