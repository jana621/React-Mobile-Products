import { useState } from "react";
import"./App.css";

// jsx - Javascript extended - classname - class
// useState - hook react provides

export default function App(){

  const brands = [
    {
      name: "Apple",
      model: "13 Pro-max",
      description: "A dramatically more powerful camera system. Learn more. Adaptive 120Hz display. Super Retina XDR display. Ultra Wide camera. A15 Bionic chip. Cinematic mode.",
      image: <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/mobile-phone_1f4f1.png" srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/mobile-phone_1f4f1.png 2x" alt="Mobile Phone on Apple iOS 14.6" width="120" height="120"></img>
    },

    {
      name: "Google",
      model: "Pixel 5",
      description: "Powered by Google Tensor, Google’s first custom-built processor, they’re fast and secure. And they adapt to you.",
      image: <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/mobile-phone_1f4f1.png" srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/313/mobile-phone_1f4f1.png 2x" alt="Mobile Phone on Google Android 12L" width="120" height="120"></img>
    },

    {
      name: "Sony",
      model: "Xperia PRO",
      description: "The Xperia PRO enables broadcast and photographic professionals to work faster and smarter than ever before. It's the world's first smartphone with dedicated HDMI input2, and USB or Ethernet3 tethering with an Alpha camera. It gives professionals a variety of new possibilities.",
      image: <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/291/mobile-phone_1f4f1.png" srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/joypixels/291/mobile-phone_1f4f1.png 2x" alt="Mobile Phone on JoyPixels 6.6" width="120" height="120"></img>
    },
    
    {
      name: "Samsung",
      model: "S21 Ultra",
      description: "The Samsung Galaxy S21 Ultra is the headliner of the S21 series. It's the first S series phone to support Samsung's S Pen. Specifications are top-notch including Snapdragon 888 chipset, 5G capability, up to 16gigs of RAM, and 512GB of storage",
      image: <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/304/mobile-phone_1f4f1.png" srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/facebook/304/mobile-phone_1f4f1.png 2x" alt="Mobile Phone on Facebook 13.1" width="120" height="120"></img>
    },
  ];

  return (

    <div className="App">
      {
        brands.map((brand, index)=>
        (
          <Counter
            key={index}
            name={brand.name}
            image={brand.image}
            model={brand.model}
            description={brand.description}
            />
        ))
      }
    </div>
  );
}

function Counter(props){
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const [show, setShow] = useState(false);
  console.log(props);
  const styles = {
    background: like >= disLike ? "cadetblue" : "crimson",
    padding: "5px",
    marginBottom: "5px", 
    border: "black solid 2px"
  };

  return(
    <div style = {styles}>
      <h2 className="heading">{props.name}</h2>
      <p>{props.image}</p>
      <h4>{props.model}</h4>
      <button onClick={()=> setShow (!show)}>
        show{show ? " Less" : " More"}
      </button>
      {/* conditional rendering - showing */}
      {show ? <h4>{props.description}</h4> : " "}

      <button onClick={()=> setLike(like + 1)}>👍{like}</button>
      <button onClick={()=> setDisLike(disLike + 1)}>👎{disLike}</button>
    </div>
  );
}
