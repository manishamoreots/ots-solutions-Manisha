import "./App.css";
// import HeaderComponent from "./components/HeaderComponent";
import ProductComponent from "./components/ProductComponent";
import ProductDetails from "./components/data";

function App() {
  
  return (
    ProductDetails.map((CurrentIteration)=>{
      return (
        <ProductComponent
        mobileImage={CurrentIteration.mobileImage}
        itemName={CurrentIteration.itemName}
        Rating={CurrentIteration.Rating}
        Reviews={CurrentIteration.Reviews}
        price={CurrentIteration.price}
        offer={CurrentIteration.offer}
        Rom={CurrentIteration.Rom}
        size={CurrentIteration.size}
        cameraQuality={CurrentIteration.cameraQuality}
        warranty={CurrentIteration.warranty}
         
        />
        
      )

    })
   
  );
}

export default App;
