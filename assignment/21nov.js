//To get the Response using async await. (Sakshi Mam)

const getData = async () => {
  await axios.get("https://reqres.in/api/users").then((res) => {
    console.log(res.data);
  });
};
getData();

//Create a function 'whereAmI' which takes as inputs a latitude value (lat)
// and a longitude value (lng) (these are GPS coordinates

//------------------using async await (Sakshi Mam)------------------------

// const whereAmI = async (lat, long) => {
//   try {
//     const data = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
//     );
//     const newData = await data.json();
//     console.log(`You are in ${newData.city}`);
//   } catch (err) {
//     console.log(err, " Error Occured!!!!");
//   }
// };
// whereAmI(28.535517, 77.391029);

//---------------------using .then (Sakshi Mam)---------------------------------
// const Mylocation = (lat, long) => {
//   try {
//     fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
//         )
//       .then((data) => {
//         return data.json();
//       })
//       .then((res) => {
//         console.log(`You are in ${res.city}`);
//       });
//   } catch {
//     (error) => {
//       console.log(error, "Error!!!");
//     };
//   }
// };
// Mylocation(30.535517, 92.391029);

////----------------GeoLocation---------------------------------

function myFun() {
  let location = navigator.geolocation.getCurrentPosition((data) => {
    let lat = data.coords.latitude;
    let lng = data.coords.longitude;
    async function whereAmI(x, y) {
      try {
        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${x}&longitude=${y}&localityLanguage=en`;
        const data = await fetch(url);
        if (!data.ok)
          throw new Error("Plase provide your latitude and longitude");
        const result = await data.json();
        console.log(
          `You are in ${result.city}\n In State${result.localityInfo.administrative[1].name}}`
        );
      } catch (error) {
        console.log(error);
      }
    }
    whereAmI(lat.lng);
  });
  return location;
}
console.log(myFun());
