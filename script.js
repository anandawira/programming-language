const titles = document.querySelectorAll("#content h1");
for (let title of titles) {
   title.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
       console.log("Clicked")
       target.innerText+=".";
   });
}