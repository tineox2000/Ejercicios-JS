const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul$$ = document.createEle("ul");
for (let i = 0; i < apps.length; i++) {
  const app = apps[i];
  const li$$ = docuemnt.createElement("li");
  li$$.textContent = app;
  ul$$.appendChild(li$$);
 
}
document.body.appendChild(ul$$);
