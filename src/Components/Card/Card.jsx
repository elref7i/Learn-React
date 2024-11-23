// import image1 from '../../imgs/car.jpg';

//* Static Image
import { useState } from 'react';
export default function Card({ productInfo }) {
  const { title, description, price, image, category } = productInfo;
  // * Local Varible => no render Components => render ✅ , memory✅

  let [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }
  function decreaseCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  //*Dynmic Image
  // const imgURL =  new URL('./img.png'${image},import.meta.url).href;
  return (
    <>
      <div className="card relative rounded-lg overflow-hidden bg-white shadow-lg col-span-12 md:col-span-6 lg:col-span-4 ">
        <figure>
          <img src={image} alt="" className="h-60 w-full object-contain" />
        </figure>
        <div className="card-body |  p-3 space-y-2">
          <h3 className="font-bold text-xl line-clamp-1">{title}</h3>
          <h4 className="font-normal text-lg">{category}</h4>
          <h5 className="font-bold text-3xl text-red-500">{price}$</h5>
          <p className="text-lg font-light line-clamp-3 ">{description}</p>
          <div className="Counter flex justify-between items-center py-5 ">
            <i
              className="fa-regular fa-square-minus text-2xl"
              onClick={decreaseCounter}
            ></i>
            <span className="count text-2xl font-bold">{counter}</span>
            <i
              className="fa-regular fa-square-plus text-2xl"
              //* onclick() in html !== onClick in jsk
              onClick={increaseCounter}
            ></i>
          </div>
          <button className="p-3 bg-red-600 w-1/2 mx-auto block rounded-lg text-white">
            Delete Card
          </button>
          {price >= 100 ? (
            <div className="offers p-3 absolute rounded-md w-fit top-3 right-3 hover:bg-green-800 text-white bg-green-400">
              Expensive
            </div>
          ) : null}
          {/* {price >= 100 && (
            <div className="offers p-3 absolute rounded-md w-fit top-3 right-3 hover:bg-green-800 text-white bg-green-400">
              Expensive
            </div>
          )} */}
        </div>
      </div>
    </>
  );
}

// *** console.log(import.meta.url); link  current module
