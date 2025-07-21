export  function scrollById (idName: string){
    const element = document.getElementById(idName);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}