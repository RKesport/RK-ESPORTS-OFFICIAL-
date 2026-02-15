// ENTER button
function enterRegistration(){
    document.getElementById("home").style.display = "none";
    document.getElementById("registration").style.display = "block";
}

// Show fields based on mode
document.getElementById("mode").addEventListener("change", function(){
    document.getElementById("solo-fields").style.display = "none";
    document.getElementById("duo-fields").style.display = "none";
    document.getElementById("squad-fields").style.display = "none";

    if(this.value=="Solo") document.getElementById("solo-fields").style.display="block";
    if(this.value=="Duo") document.getElementById("duo-fields").style.display="block";
    if(this.value=="Squad") document.getElementById("squad-fields").style.display="block";
});

// WhatsApp registration
function register(){
    let map = document.getElementById("map").value;
    let mode = document.getElementById("mode").value;
    let message = "PUBG Tournament Registration:\nMap: "+map+"\nMode: "+mode+"\n";

    if(mode=="Solo"){
        let name = document.getElementById("solo-name").value;
        let id = document.getElementById("solo-id").value;
        message += "Player: "+name+" | ID: "+id;
    }
    if(mode=="Duo"){
        for(let i=1;i<=2;i++){
            let name = document.getElementById("duo-name"+i).value;
            let id = document.getElementById("duo-id"+i).value;
            message += "\nPlayer "+i+": "+name+" | ID: "+id;
        }
    }
    if(mode=="Squad"){
        for(let i=1;i<=4;i++){
            let name = document.getElementById("squad-name"+i).value;
            let id = document.getElementById("squad-id"+i).value;
            message += "\nPlayer "+i+": "+name+" | ID: "+id;
        }
    }

    // WhatsApp API
    let wa_link = "https://api.whatsapp.com/send?phone=+92330228172&text="+encodeURIComponent(message);
    window.open(wa_link,"_blank");
}