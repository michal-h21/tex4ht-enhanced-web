var bibdoc = null;

var isBibbox = function(){
  return q("#bibbox").length>0;
}

var makeBibTooltip = function(bib,id,el){
  if(!isBibbox()){
    var xxx = bib.querySelector(id).parentNode.cloneNode(true);
    var parentpos = el.getBoundingClientRect();  
    var tip = document.createElement("div");
    tip.setAttribute("id", "bibbox")
    tip.style.position = "fixed";
    tip.style.top = parentpos.bottom+ 10+"px";
    tip.style.left = parentpos.left+ 10 +"px" ;
    tip.appendChild(xxx);
    document.body.appendChild(tip);
  }
}
var getBibDoc = function(url,id,el){
  if(!bibdoc){
    var ajax = new XMLHttpRequest();
    console.log("Load ajax"+url)
    bibdoc = ajax.open("GET",url,true);
    ajax.send();
    ajax.onreadystatechange = function(){
      if(ajax.readyState == 4 && ajax.status==200 && !bibdoc){
        var res = ajax.responseText;
        bibdoc = createEl("div","bib");
        bibdoc.innerHTML = res;
        makeBibTooltip(bibdoc,id,el);
      }
    }
  }else{
    makeBibTooltip(bibdoc,id,el);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var bibs = q("span.cite");
  for(i=0;i<bibs.length;i++){
    bibs[i].on("mouseover", function(e){
      var el = e.currentTarget;
      var link = el.querySelector("a");
      var hash = link.hash;
      var href = link.getAttribute("href");
      getBibDoc(href,hash,el);
      //var target = bib.querySelector("body");
      //console.log("nazdar "+ target);
    });
  }
});

document.addEventListener("click",function(){
  if(isBibbox()){
    var bibbox = q("#bibbox");
    for(i=0;i<bibbox.length;i++){
      bibbox[i].remove();
    }
  }
});
