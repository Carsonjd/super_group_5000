$('document').ready(() => {
  console.log('bananas');
  const darkSkyKey = '1163de32b0c568e75278023a3768f8a3';

  let lat = 40.2549
  let long = -105.6160
  axios.get(`https://dark-star-proxy.herokuapp.com/forecast/${darkSkyKey}/${lat},${long}`)
    .then((res) => console.log(res))

})
