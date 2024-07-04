export const scrollToSrction = (p)=>{
    document.querySelector("#" + p).scrollIntoView({behavior: "smooth"});
}