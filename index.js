let userData = [];

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));

  console.log(userData[0]);
};

const userDisplay = async () => {
  await fetchUser();

  document.body.innerHtml = userData.map;
};

userDisplay();
