
  document.querySelector("#input").addEventListener("keydown", (event) => {
    if (event.key == "Enter")
      apiRequest();
  });

  document.querySelector("#search").addEventListener("click", () => {
    apiRequest();
  });
var inputvalue=document.querySelector('#input');
  apiRequest = () => {


    const url = 'https://api.harvardartmuseums.org/exhibition?venue=HAM'+inputvalue.value+'&per_page=4&apikey=6a03fca0-2901-45e9-8f6c-855b859a67ad';

    fetch(url)

      .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })

      .then(data => {
        loadImages(data);
        console.log(data);
      })
      .catch(error => console.log(error));
  }

    loadImages = (data) => {
    for (let i = 0; i < data.results.length; i++) {
      let image = document.createElement("div");
      image.className = "img";
      image.style.backgroundImage = "url(" + data.results[i].urls.raw + "&w=1366&h=768" + ")";
      image.addEventListener("dblclick", function () {
        window.open(data.results[i].links.download, '_blank');
      })
      document.querySelector("#grid").appendChild(image);
    }
  }
