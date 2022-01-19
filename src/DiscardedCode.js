// ==> using an Http Request to fetch data
// const xhr = new XMLHttpRequest();
// xhr.responseType = 'json';
// const handleChange = () => {
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       setAllMemes(() => xhr.response);
//     }
//   };
//   xhr.open('GET', url);
//   xhr.send();
//   console.log(allMemes);
// };

// ==> using async/await & axios to fetch data
// async function fetchData() {
//   try {
//     const result = await axios.get(url);
//     setAllMemes(() => result.data);
//   } catch (error) {
//     console.error(error);
//   }
// }
