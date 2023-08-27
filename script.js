const link1= document.getElementById("topic1");
const link2= document.getElementById("topic2");
const link3= document.getElementById("topic3");
const info= document.getElementById("info");

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
    <p>She has 2 albums in total. One is her Sour Album which came out in 2021. Her new album, Guts in coming out on September 8th, 2023.</p>
`
});

link3.addEventListener("click", function() {
    info.innerHTML = `
    <h1>Acting Jobs</h1>
    <p>In 2016-1018 Rodrigo acted in the show Bizardvark with her co-star Madison Hu. From 2018-2023, she acted in High School Musical:The Musical: The Series. She has also acted in many other shows. </p>
    <p>In 2015, at the age of 12 she got her first acting job as the lead role of Grace Thomas in the film An American Girl: Grace Stirs Up Success.  </p>
`
});