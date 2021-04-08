//GLOBALNE//

let posortowane = false
let schowane = false
let minibrowser = false
let focused = false

////////////

window.onload = function cards(){

    for(let x = 0; x < card_db.length; x++){

        card_db[x].selected = false;

        let template = '<div id="cardbox' + x + '"><div id="card' + x + '" class="card_content"> <h3 class="' + card_db[x].rarity + '">' + card_db[x].name + '</h3><div class="' + card_db[x].type + '">' + card_db[x].type + '</div> <img onclick="browser(this.parentNode.id);" src="uma-db/img/cardimg/' + card_db[x].img + '"/> </div><button onclick="select(this.id);" class="toggle" id="' + x + '"/></div>'
        document.getElementById('cards').innerHTML += template
    }

    sortuj();

}

function select(id){
    
    stylprzed = ""
    stylpo = "border: solid 2px #fff;"
    oznaczenie = document.getElementById('card' + id)
    ozprzycisk = document.getElementById(id)

    if(card_db[id].selected){
        card_db[id].selected=false
        if(oznaczenie.style.border=='2px solid rgb(0, 180, 255)'){}else{
            oznaczenie.style=stylprzed
        }
        ozprzycisk.style="background-color: #fff; border: 2px solid #111;"
    }else{
        card_db[id].selected=true
        if(oznaczenie.style.border=='2px solid rgb(0, 180, 255)'){}else{
            oznaczenie.style=stylpo
        }
        ozprzycisk.style="background-color: #111; border: 2px solid #fff;"
    }
}

function chowaj(){

    if(!schowane){
        for(let x = 0; x < card_db.length; x++){
            if(card_db[x].selected == false){
                document.getElementById('card' + x).style.display="none"
                document.getElementById(x).style.display="none"
            }
        }
        document.getElementById('putekst').innerHTML="POKAŻ"
        schowane = true;
    }else{
        for(let x = 0; x < card_db.length; x++){
            if(card_db[x].selected == false){
                document.getElementById('card' + x).style.display="flex"
                document.getElementById(x).style.display="flex"
            }
        }
        document.getElementById('putekst').innerHTML="UKRYJ"
        schowane = false;
    }

}

function czysc(){
    for(let x = 0; x < card_db.length; x++){
        if(card_db[x].selected == true){
            select(x);
            document.getElementById('card' + x).style.border=''
        }
    }
    
    if(schowane){
        chowaj();
    }

    schowajbrowser();

    if(focused){
        document.getElementById(focused).style.border=''
    }
}

function sortuj(){

    if(!posortowane){
        for(let x = 0; x < card_db.length; x++){
            let typ = card_db[x].type;
            if(typ == 'Speed'){
                document.getElementById('cardbox' + x).style="order : 0;"
            }else if(typ == 'Stamina'){
                document.getElementById('cardbox' + x).style="order : 1;"
            }else if(typ == 'Power'){
                document.getElementById('cardbox' + x).style="order : 2;"
            }else if(typ == 'Guts'){
                document.getElementById('cardbox' + x).style="order : 3;"
            }else if(typ == 'Knowledge'){
                document.getElementById('cardbox' + x).style="order : 4;"
            }else{
                document.getElementById('cardbox' + x).style="order : 5;"
            }
        }
        posortowane=true
        document.getElementById('stekst').innerHTML='ODSORTUJ'
    }else{
        for(let x = 0; x < card_db.length; x++){
                document.getElementById('cardbox' + x).style="order : 0;"
        }
        posortowane=false
        document.getElementById('stekst').innerHTML='SORTUJ'
    }

}

let oldid = false

function browser(id){

    if(minibrowser==false){
        document.getElementById('minibrowser').style='display: block;'
        document.getElementById('cards').style='width: calc(95vw - 700px);'
    }

    document.getElementById(id).style='border: solid 2px rgb(0, 180, 255);'

    focused = id
    id = id.substr(4, 10);

    if(!oldid || oldid == id){}else{
        if(card_db[oldid].selected==false && schowane){
            document.getElementById('card' + oldid).style = 'display: none;'
        }else if(card_db[oldid].selected==true){
            document.getElementById('card' + oldid).style = 'border: solid 2px #fff;'
        }else{
            document.getElementById('card' + oldid).style = ''
        }
    }

    oldid = id
    
    let event = card_db[id].events
    
    let content = '<div class="eventcontainer">'
    for(let x = 0; x < event.length; x++){
        content += '<div class="eventdiv"><div class="teventname ' + card_db[id].type + '" colspan="2">' + event[x].name + '</div>'
        for(let y = 0; y < event[x].choices.length; y++){
            content += '<div class="eventrow"><div class="tchoicedesc">' + event[x].choices[y].name + '</div><div class="trewards">'
            for(let z = 0; z < event[x].choices[y].reward.length; z++){
                content += event[x].choices[y].reward[z] + '</span>'
            }
            content += '</div></div>'
        }
        content += '</div>'
    }
    content += '</div><br />'

    /*
    content += '<table>'

    for(let x = 0; x < card_db[id].skills.length; x++){
        let skill = card_db[id].skills[x]
        content += '<tr><td class="ticon"><img src="uma-db/img/skillicons/' + skill.icon + '"/></td><td class="tname">' + skill.name + '</td><td class="tdesc">' + skill.desc + '</td><td class="ttag">' + skill.type + '</td></div></tr>'
    }

    for(let x = 0; x < card_db[id].eventskills.length; x++){
        let skill = card_db[id].eventskills[x]
        content += '<tr><td class="ticon"><img src="uma-db/img/skillicons/' + skill.icon + '"/></td><td class="tname">' + skill.name + '</td><td class="tdesc">' + skill.desc + '</td><td class="ttag">' + skill.type + '</td></div></tr>'
    }

    content +='</table>'
    */
    document.getElementById('minibrowser').innerHTML = content

}

function schowajbrowser(){

    for(let x = 0; x < card_db.length; x++){
        if(card_db[x].selected==true){
            document.getElementById('card' + x).style.border = 'solid 2px #fff'
        }else{
            document.getElementById('card' + x).style.border = 'solid 2px #111'
        }
    }
    document.getElementById('minibrowser').innerHTML=''
    document.getElementById('minibrowser').style='display: none;'
    document.getElementById('cards').style='min-width: 210px; width: auto;'
    minibrowser = false

}


