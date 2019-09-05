app.controller("homeCtrl", $scope => {
  console.log("home controller called");
  $scope.menus = [
    {
      name: "India",
      key: "in",
      img: "https://newsapi.org/images/flags/in.svg"
    },
    {
      name: "Argentina",
      key: "au",
      img: "https://newsapi.org/images/flags/au.svg"
    },
    {
      name: "Austria",
      key: "at",
      img: "https://newsapi.org/images/flags/at.svg"
    },
    {
      name: "Belgium",
      key: "be",
      img: "https://newsapi.org/images/flags/be.svg"
    },
    {
      name: "Brazil",
      key: "br",
      img: "https://newsapi.org/images/flags/br.svg"
    },
    {
      name: "Canada",
      key: "ca",
      img: "https://newsapi.org/images/flags/ca.svg"
    },
    {
      name: "China",
      key: "cn",
      img: "https://newsapi.org/images/flags/cn.svg"
    },
    {
      name: "Egypt",
      key: "eg",
      img: "https://newsapi.org/images/flags/eg.svg"
    },
    {
      name: "France",
      key: "fr",
      img: "https://newsapi.org/images/flags/fr.svg"
    },
    {
      name: "Gremany",
      key: "de",
      img: "https://newsapi.org/images/flags/de.svg"
    },
    {
      name: "Indonesia",
      key: "id",
      img: "https://newsapi.org/images/flags/id.svg"
    },
    {
      name: "Russia",
      key: "ru",
      img: "https://newsapi.org/images/flags/ru.svg"
    },
    {
      name: "Singapore",
      key: "sg",
      img: "https://newsapi.org/images/flags/sg.svg"
    },
    {
      name: "Thailand",
      key: "th",
      img: "https://newsapi.org/images/flags/th.svg"
    },
    {
      name: "United States",
      key: "us",
      img: "https://newsapi.org/images/flags/us.svg"
    }
  ];
});
