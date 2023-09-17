const link1= document.getElementById("topic1");
const link2= document.getElementById("topic2");
const link3= document.getElementById("topic3");
const link4= document.getElementById("topic4");
const link5= document.getElementById("topic5");
const info= document.getElementById("info");
const title= document.getElementById("color")
const colors = ["violet", "white", "black"];

let currentColor = 0

function changeColor() {
    title.style.color = colors[currentColor];
    currentColor = (currentColor + 1) % colors.length;

};

setInterval(changeColor, 1000);

AOS.init();

link1.addEventListener("click", function() {
    info.innerHTML = `
    <h1>About Her</h1>
    <p>Rodrigo was born Febuary 20th, 2003 in Murreta, California. She is now the height of 5'5". She has two parents and no siblings. </p>
    <p>After years of making music she now has a net worth of 8 million dollars.</p>
`
});

link2.addEventListener("click", function() {
    info.innerHTML = `
    <h1>Songs</h1>
    <p>Rodrigo has made many songs in the past years. In her Sour Album, she has 11 songs. She also has many other singles.  </p>
    <p>She has 2 albums in total. One is her Sour Album which came out in 2021. Her new album, Guts came out on September 8th, 2023.</p>
`
});

link3.addEventListener("click", function() {
    info.innerHTML = `
    <h1>Acting Jobs</h1>
    <p>In 2016-2018 Rodrigo acted in the show Bizardvark with her co-star Madison Hu. From 2018-2023, she acted in High School Musical:The Musical: The Series. She has also acted in many other shows. </p>
    <p>In 2015, at the age of 12 she got her first acting job as the lead role of Grace Thomas in the film An American Girl: Grace Stirs Up Success.  </p>
`
});

link4.addEventListener("click", function() {
    info.innerHTML = `
    <h1>Picture</h1>
    <img data-aos="zoom-in" data-aos-duration="2500" class="picture" src="https://media.pitchfork.com/photos/6076fd2e17d37fe4717d4907/1:1/w_320,c_limit/Olivia-Rodrigo-SOUR.jpeg" height="200" width="200">
    `
});

link5.addEventListener("click", function() {
    info.innerHTML = `
    <h1>Top tracks</h1>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/1McMsnEElThX1knmY4oliG?utm_source=generator" width="100%" height="350" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `
});