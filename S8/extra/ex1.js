
fetch ('https:breakingbadapi.com/api/characters')
    .then ((res) => res.json()
    .then ( (resData) => {
    console.log (resData);
    for (let index = 0; index < resData.length; index++) {
        const element = resData[index];
        
        const div$$ = document.createElement ("div")
        div$$.innerHTML = `<img src= "${element.img}"/>
        <h2>${element.name}</h2>`
        document.body.appendChild (div$$)
    }
    })
    );






