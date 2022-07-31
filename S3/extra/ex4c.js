const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];


  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const div$$ = document.createElement("div");
    div$$.innerHTML = `<h4>${country.title}</h4><img src = "${country.imgUrl}"/>`;

    const buttonIndividual$$ = document.createElement ("button");
    buttonIndividual$$.textContent = "Eliminar";
    div$$.appendChild (buttonIndividual$$);
    buttonIndividual$$.addEventListener ("Click", function () {
        div$$.remove();
    })
    
    document.body.appendChild(div$$);
  }

  const btn$$ = document.querySelector ("button");
  btn$$.addEventListener ("click", function() {
    const allDiv$$ = document.body.querySelectorAll ("div");

    allDiv$$[allDiv$$.length - 1].remove();

  });

