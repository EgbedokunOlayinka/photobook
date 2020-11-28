let users = [
  {
    name: "Tope",
    qualification: "Web Designer",
    image: "./images/airpods.jpg",
  },
  {
    name: "Ini",
    qualification: "Web Designer",
    image: "./images/alexa.jpg",
  },
  {
    name: "Cynthia",
    qualification: "Web Designer",
    image: "./images/camera.jpg",
  },
  {
    name: "Agbaje",
    qualification: "Web Designer",
    image: "./images/mouse.jpg",
  },
  {
    name: "Tope",
    qualification: "Web Designer",
    image: "./images/airpods.jpg",
  },
  {
    name: "Ini",
    qualification: "Web Designer",
    image: "./images/alexa.jpg",
  },
  {
    name: "Ini",
    qualification: "Web Designer",
    image: "./images/alexa.jpg",
  },
  {
    name: "Ini",
    qualification: "Web Designer",
    image: "./images/alexa.jpg",
  },
];

const peopleDiv = document.querySelector(".users");

users.forEach((person) => {
  let personDiv = document.createElement("div");
  personDiv.classList.add("col");
  personDiv.classList.add("s12");
  personDiv.classList.add("m6");
  personDiv.classList.add("l4");
  personDiv.classList.add("xl3");

  personDiv.innerHTML = `
    <div class="card">
      <div class="card-image">
        <img src=${person.image} alt="" class="responsive-img" />
      </div>
      <div class="card-content">
        <p>${person.name}</p>
        <p>${person.qualification}</p>
      </div>
    </div>
  `;

  peopleDiv.appendChild(personDiv);
});
