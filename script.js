function startLoading(){
    document.getElementById("loading-screen").style.display="flex";
    setTimeout(function(){
        document.getElementById("loading-screen").style.display="none";
        document.getElementById("home").style.display="none";
        document.getElementById("registration").style.display="block";
    },2000);
}

function changeMode(){
    let mode=document.getElementById("mode").value;
    let container=document.getElementById("players");
    container.innerHTML="";
    let players=0;

    if(mode==="Solo") players=1;
    if(mode==="Duo") players=2;
    if(mode==="Squad") players=4;

    for(let i=1;i<=players;i++){
        container.innerHTML+=`
        <input type="text" id="name${i}" placeholder="Player ${i} Name">
        <input type="text" id="id${i}" placeholder="Player ${i} PUBG ID">
        `;
    }
}

function sendToWhatsapp(){
    let map=document.getElementById("map").value;
    let mode=document.getElementById("mode").value;

    let message="RK ESPORTS Tournament Registration\n";
    message+="Map: "+map+"\n";
    message+="Mode: "+mode+"\n\n";

    let total=1;
    if(mode==="Duo") total=2;
    if(mode==="Squad") total=4;

    for(let i=1;i<=total;i++){
        let name=document.getElementById("name"+i)?.value;
        let id=document.getElementById("id"+i)?.value;
        message+="Player "+i+": "+name+" | ID: "+id+"\n";
    }

    let link="https://api.whatsapp.com/send?phone=923302281172&text="+encodeURIComponent(message);
    window.open(link,"_blank");
}