const fethWaifuPics = async (query) => {
  const response = await fetch(`https://api.waifu.pics/sfw/${query}`);
  const data = await response.json();

  return data.url;
};

export default fethWaifuPics;
