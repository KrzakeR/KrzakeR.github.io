//GLOBALNE///////////////////////////////////////////////////////////////////////////////////////

let posortowane = false
let schowane = false
let minibrowser = false
let focused = false

//CARDS//////////////////////////////////////////////////////////////////////////////////////////


window.onload = function cards(){

    for(let x = 0; x < card_db.length; x++){

        card_db[x].selected = false;

        let template = '<div id="cardbox' + x + '"><div id="card' + x + '" class="card_content"> <h3 class="' + card_db[x].rarity + '">' + card_db[x].name + '</h3><div class="' + card_db[x].type + '">' + card_db[x].type + '</div> <img onclick="browser(this.parentNode.id);" src="uma-db/img/cardimg/' + card_db[x].img + '"/> </div><button onclick="select(this.id);" class="toggle" id="' + x + '"/></div>'
        document.getElementById('cards').innerHTML += template
    }

    sortuj();

}

//SELECT/////////////////////////////////////////////////////////////////////////////////////////

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

//SHOW/HIDE/CARDS///////////////////////////////////////////////////////////////////////////////

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

//CLEAR//////////////////////////////////////////////////////////////////////////////////////////

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

//SORT///////////////////////////////////////////////////////////////////////////////////////////

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

//BROWSER/////////////////////////////////////////////////////////////////////////////////////////

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

    content = '<div id="browsertabs"><div class="tabbutton" onclick="browsertabs(&#39;events&#39;)">Eventy</div><div class="tabbutton" onclick="browsertabs(&#39;bonus&#39;);">Bonusy</div><div class="tabbutton" onclick="browsertabs(&#39;skills&#39;);">Skille</div></div>'
    
    content += '<div id="eventcontainer">'
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
    content += '</div>'
    
    content += '<div id="skillcontainer">'

    function skillcategory(category){
        for(let x = 0; x < category.length; x++){
            content += '<div class="skillrow"><div class="skilliconcontainer"><img src="uma-db/img/skillicons/' + category[x].icon + '" class="skillicon"/></div><div class="skillcontent"><div class="skillnamerow ' + category[x].color + '"><div class="skillname">' + category[x].name + '</div><div class="skillname">' + category[x].engname + '</div></div><div class="skillinforow"><div class="skilldesc">' + category[x].desc + '</div><div class="skilltag">'
            for(let y = 0; y < category[x].tags.length; y++){
                content += category[x].tags[y]
            }
            content += '</div></div></div></div>'
        }
    }
    
    content += '<div class="tskillname spref">Preference</div>'
    skillcategory(skill_db.pref);

    content += '<div class="tskillname srecovery">Recovery</div>'
    skillcategory(skill_db.recovery);

    content += '<div class="tskillname sspeed">Speed</div>'
    skillcategory(skill_db.speed);

    content += '</div>'
    
    document.getElementById('minibrowser').innerHTML = content

    browsertabs('events');

}

function browsertabs(type){

    let tabs = document.getElementById('browsertabs')
    let eventy = document.getElementById('eventcontainer')
    let skills = document.getElementById('skillcontainer')
    let id = focused.substr(4, 10);

    if(type=='events'){
        tabs.innerHTML = '<div class="tabbutton-active ' + card_db[id].type + '" onclick="browsertabs(\'events\')">Eventy</div><div class="tabbutton" onclick="browsertabs(&#39;skills&#39;);">Skille</div>'
        eventy.style='display: block;'
        skills.style='display: none;'
    }else if(type=='skills'){
        tabs.innerHTML = '<div class="tabbutton" onclick="browsertabs(&#39;events&#39;)">Eventy</div><div class="tabbutton-active ' + card_db[id].type + '" onclick="browsertabs(&#39;skills&#39;);">Skille</div>'
        eventy.style='display: none;'
        skills.style='display: block;'
    }

}

//HIDE/BROWSER///////////////////////////////////////////////////////////////////////////////////////

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
    document.getElementById('cards').style='min-width: 210px; width: 100%;'
    minibrowser = false

}


