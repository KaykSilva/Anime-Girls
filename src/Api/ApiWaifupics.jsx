const fethWaifuPics = async (query) => {
  const response = await fetch(`https://api.waifu.pics/type/${query}`);
  const data = await response.jason();

  return data.url;
};
