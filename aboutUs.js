const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
var i = 1;
var id_2 ;

team = (id) => {
if(vw<="760"){
    const a = document.getElementById(id);
    var id_1 = a.id;
    const tab = document.querySelector(".tab-content");
    if (i == 1) {
        a.insertAdjacentElement("afterend", tab);
        tab.style.display = "block";
        id_2 = id_1;
    } else if (i == 2 && id_1==id_2) {
        tab.style.display = "none";
        i=0;
    }else if (i==2&& id_1!=id_2){
        a.insertAdjacentElement("afterend", tab);
        id_2=id_1;
        i=1;
    }else{
        console.log("Show error");
  }
  i++;
};
}