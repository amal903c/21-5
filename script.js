document.addEventListener("DOMContentLoaded", startHeader);

//destinationer url
var endpoint_destinationer = "http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/destinationer";

//Boliger url
var endpoint_boliger_byt = "http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/boliger/644";
var endpoint_boliger_indretning = "http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/boliger/641";
var endpoint_boliger_udvaelg = "http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/boliger/640";

//Økonomi url
var endpoint_okonomi = "http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/okonomi";


//Køb af andel
var endpoint_kobafandel_ledigandel = "http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/ledig_andel/837";
var endpoint_kobafandel_foreninger = "http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/stiftede_foreninger/387";
var endpoint_kobafandel_pakker = "http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/vores_pakker/656";
var endpoint_kobafandel_moedos = "http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/kontakt/200";

//om215 url
// hvorfor vælge 21-5
var endpoint_om215_hvorfor = "http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/om215/688";
var endpoint_om215_hvad = "http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/om215/684";
var endpoint_om215_hvem = "http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/om215/680";

//praktisk info
var endpoint_praktiskinfo_uge = "http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/praktisk_info/649"
var endpoint_praktiskinfo_job = "http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/praktisk_info/648"
var endpoint_praktiskinfo_faq = "http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/praktisk_info/34"

// der hvor json bliver puttet ind
var theJSON_destinationer = [];
//om215
var theJSON_om215_hvorfor = [];
var theJSON_om215_hvad = [];
var theJSON_om215_hvem = [];
//Boliger
var theJSON_boliger_byt = [];
var theJSON_boliger_indretning = [];
var theJSON_boliger_udvaelg = [];

//økonomi
var theJSON_okonomi = [];

//praktisk info
var theJSON_uge = [];
var theJSON_job = [];
var theJSON_faq = [];

//køb af andel
var theJSON_kobafandel_ledigandel = [];
var theJSON_kobafandel_foreninger = [];
var theJSON_kobafandel_pakker = [];
var theJSON_kobafandel_moedos = [];

// den template vi kloner ind i vores dropwdownmenu
var menuboksetemplate = document.querySelector("#menutemplate");

//container for destinationer dropdown
var container_destinationer = document.querySelector(".dropdown_container");

//Container boliger:
var container_boliger = document.querySelector(".dropdown_container_boliger");

//Container økonomi
var container_okonomi = document.querySelector(".dropdown_container_okonomi");

//var container køb af andel
var container_kobafandel = document.querySelector(".dropdown_container_kobafandel");

//container om 21-5
var container_om215 = document.querySelector(".dropdown_container_om215");

//container praktisk info
var container_praktiskinfo = document.querySelector(".dropdown_container_praktiskinfo");

function startHeader() {

    console.log("jeg er ved start")
    // gør så man kan klikke på menupunkterne



    loadDataHeader();

    document.querySelector(".menuknap").addEventListener("click", clickMenu);




}

// henter json
async function loadDataHeader() {

    //    const resspons_destinationer = await fetch(`http://michelleyoung.dk/kea/09_cms/21-5_wp/wordpress/wp-json/wp/v2/destinationer`);
    const resspons_destinationer = await fetch(endpoint_destinationer);

    //boliger
    //    const resspons_boliger_byt = await fetch(endpoint_boliger_byt);
    //    const resspons_boliger_indretning = await fetch(endpoint_boliger_indretning);
    //    const resspons_boliger_udvaelg = await fetch(endpoint_boliger_udvaelg);

    //økonomi
    //    const resspons_okonomi = await fetch(endpoint_okonomi);

    //om215
    //    const resspons_om215_hvorfor = await fetch(endpoint_om215_hvorfor);
    //    const resspons_om215_hvad = await fetch(endpoint_om215_hvad);
    //    const resspons_om215_hvem = await fetch(endpoint_om215_hvem);

    //køb af andel
    //    const resspons_kobafandel_ledigandel = await fetch(endpoint_kobafandel_ledigandel);
    //    const resspons_kobafandel_foreninger = await fetch(endpoint_kobafandel_foreninger);
    //    const resspons_kobafandel_pakker = await fetch(endpoint_kobafandel_pakker);
    //    const resspons_kobafandel_moedos = await fetch(endpoint_kobafandel_moedos);

    //praktisk info
    //    const resspons_praktiskinfo_uge = await fetch(endpoint_praktiskinfo_uge);
    //    const resspons_praktiskinfo_job = await fetch(endpoint_praktiskinfo_job);
    //    const resspons_praktiskinfo_faq = await fetch(endpoint_praktiskinfo_faq);


    theJSON_destinationer = await resspons_destinationer.json();

    //boliger
    //    theJSON_boliger_byt = await resspons_boliger_byt.json();
    //    theJSON_boliger_indretning = await resspons_boliger_indretning.json();
    //    theJSON_boliger_udvaelg = await resspons_boliger_udvaelg.json();

    //
    //    theJSON_okonomi = await resspons_okonomi.json();

    //om215
    //    theJSON_om215_hvorfor = await resspons_om215_hvorfor.json();
    //    theJSON_om215_hvad = await resspons_om215_hvad.json();
    //    theJSON_om215_hvem = await resspons_om215_hvem.json();

    //kob af andel
    //    theJSON_kobafandel_ledigandel = await resspons_kobafandel_ledigandel.json();
    //
    //    theJSON_kobafandel_foreninger = await resspons_kobafandel_foreninger.json();
    //
    //    theJSON_kobafandel_pakker = await resspons_kobafandel_pakker.json();
    //
    //    theJSON_kobafandel_moedos = await resspons_kobafandel_moedos.json();

    //praktisk info
    //    theJSON_uge = await resspons_praktiskinfo_uge.json();
    //    theJSON_job = await resspons_praktiskinfo_job.json();
    //    theJSON_faq = await resspons_praktiskinfo_faq.json();
    //kalder funktionerne
    clickAll();

}

function clickAll() {
    console.log("jeg er ved clickall")
    //destinationer
    document.querySelector("#destinationer").addEventListener("click", clickDestinationerFrem);
    //boliger
    document.querySelector("#boliger").addEventListener("click", clickBoligerFrem);
    //økonomi jura og skat
    document.querySelector("#økonomi_jura_skat").addEventListener("click", clickOkonomiFrem);
    //om 21-5
    document.querySelector("#om_215").addEventListener("click", clickOm215Frem);

    document.querySelector("#kob_af_andel").addEventListener("click", clickAndelFrem);

    //praktisk info
    document.querySelector("#praktisk_info").addEventListener("click", clickPraktiskInfoFrem);
}

//hvad der sker når man kilkker på destinationer
function clickDestinationerFrem() {
    container_destinationer.classList.toggle("hidden")
    visDestinationer();
    //    document.querySelector("#destinationer").removeEventListener("click", clickDestinationerFrem);
    //
    //    //når man klikker på destinationer igen
    //    document.querySelector("#destinationer").addEventListener("click", () => {
    //        container_destinationer.classList.add("hidden")
    //        document.querySelector("#destinationer").addEventListener("click", clickDestinationerFrem);
    //})


}

// viser alt data
function visDestinationer() {
    container_destinationer.innerHTML = "";
    container_boliger.innerHTML = "";
    container_okonomi.innerHTML = "";
    container_kobafandel.innerHTML = "";
    container_om215.innerHTML = "";
    container_praktiskinfo.innerHTML = "";

    console.log(theJSON_destinationer);


    //løb listen igennem og indsæt data i en template

    theJSON_destinationer.forEach(destination => {

        console.log(destination);

        const klon = menuboksetemplate.cloneNode(true).content;

        klon.querySelector("h3").textContent = destination.title.rendered;

        klon.querySelector("img").src = destination.lillebillede.guid;

        klon.querySelector("article").addEventListener("click", () => {

            location.href = `basis_galleri.html?id=${destination.id}`;
        })

        container_destinationer.appendChild(klon);


    })
}

//Når man klikker på boliger:
function clickBoligerFrem() {
    container_boliger.classList.remove("hidden")
    visBoliger();
    document.querySelector("#boliger").removeEventListener("click", clickBoligerFrem);

    //når man klikker på destinationer igen
    document.querySelector("#boliger").addEventListener("click", () => {
        container_boliger.classList.add("hidden")
        document.querySelector("#boliger").addEventListener("click", clickBoligerFrem);

    })


}

// viser alt data
function visBoliger() {

    container_destinationer.innerHTML = "";
    container_boliger.innerHTML = "";
    container_okonomi.innerHTML = "";
    container_om215.innerHTML = "";
    container_kobafandel.innerHTML = "";
    container_praktiskinfo.innerHTML = "";
    console.log(theJSON_boliger_byt);
    console.log(theJSON_boliger_indretning);
    console.log(theJSON_boliger_udvaelg);

    //kloninger
    const klon = menuboksetemplate.cloneNode(true).content;

    klon.querySelector("h3").textContent = theJSON_boliger_byt.title.rendered;

    klon.querySelector("img").src = theJSON_boliger_byt.lillebillede.guid;

    klon.querySelector("article").addEventListener("click", () => {

        location.href = `boliger_basis.html?id=${theJSON_boliger_byt.id}`;
    })
    container_boliger.appendChild(klon);

    //klon2
    const klon2 = menuboksetemplate.cloneNode(true).content;

    klon2.querySelector("h3").textContent = theJSON_boliger_udvaelg.title.rendered;

    klon2.querySelector("img").src = theJSON_boliger_udvaelg.lillebillede.guid;

    klon2.querySelector("article").addEventListener("click", () => {

        location.href = `boliger_basis.html?id=${theJSON_boliger_udvaelg.id}`;
    })
    container_boliger.appendChild(klon2);

    //klon3
    const klon3 = menuboksetemplate.cloneNode(true).content;

    klon3.querySelector("h3").textContent = theJSON_boliger_indretning.title.rendered;

    klon3.querySelector("img").src = theJSON_boliger_indretning.lillebillede.guid;

    klon3.querySelector("article").addEventListener("click", () => {

        location.href = `boliger_galleri.html?id=${theJSON_boliger_indretning.id}`;
    })
    container_boliger.appendChild(klon3);
}



// Når man klikker på økonomii
function clickOkonomiFrem() {
    container_okonomi.classList.remove("hidden")
    visOkonomi();
    document.querySelector("#økonomi_jura_skat").removeEventListener("click", clickOkonomiFrem);

    //når man klikker på destinationer igen
    document.querySelector("#økonomi_jura_skat").addEventListener("click", () => {
        container_okonomi.classList.add("hidden")
        document.querySelector("#økonomi_jura_skat").addEventListener("click", clickOkonomiFrem);

    })


}

// viser alt data
function visOkonomi() {
    container_destinationer.innerHTML = "";
    container_boliger.innerHTML = "";
    container_okonomi.innerHTML = "";
    container_kobafandel.innerHTML = "";
    container_om215.innerHTML = "";
    container_praktiskinfo.innerHTML = "";
    console.log(theJSON_okonomi);


    //løb listen igennem og indsæt data i en template

    theJSON_okonomi.forEach(okonom => {

        console.log(okonom);

        const klon = menuboksetemplate.cloneNode(true).content;

        klon.querySelector("h3").textContent = okonom.title.rendered;

        klon.querySelector("img").src = okonom.lillebillede.guid;

        klon.querySelector("article").addEventListener("click", () => {

            location.href = `okonomi_basis.html?id=${okonom.id}`;
        })

        container_okonomi.appendChild(klon);


    })
}

//når man klikker på om 21-5
function clickOm215Frem() {
    container_om215.classList.remove("hidden")
    visOm215();
    document.querySelector("#om_215").removeEventListener("click", clickOm215Frem);

    //når man klikker på destinationer igen
    document.querySelector("#om_215").addEventListener("click", () => {
        container_om215.classList.add("hidden")
        document.querySelector("#om_215").addEventListener("click", clickOm215Frem);

    })

}

//vis data for 21-5
function visOm215() {
    container_destinationer.innerHTML = "";
    container_boliger.innerHTML = "";
    container_okonomi.innerHTML = "";
    container_kobafandel.innerHTML = "";
    container_om215.innerHTML = "";
    container_praktiskinfo.innerHTML = "";
    console.log(theJSON_om215_hvorfor);
    console.log(theJSON_om215_hvorfor.id);
    console.log(theJSON_om215_hvad);
    console.log(theJSON_om215_hvad.id);
    console.log(theJSON_om215_hvem);
    console.log(theJSON_om215_hvem.id);

    //kloner hvorfor ind
    const klon = menuboksetemplate.cloneNode(true).content;
    klon.querySelector("h3").textContent = theJSON_om215_hvorfor.title.rendered;
    klon.querySelector("img").src = theJSON_om215_hvorfor.lillebillede.guid;
    klon.querySelector("article").addEventListener("click", () => {

        console.log("this.theJSON_om215_hvorfor.id")

        location.href = `hvorfor_voelge_215.html?id=${theJSON_om215_hvorfor.id}`;
    })

    container_om215.appendChild(klon);

    //kloner hvad ind
    const klon2 = menuboksetemplate.cloneNode(true).content;
    klon2.querySelector("h3").textContent = theJSON_om215_hvad.title.rendered;
    klon2.querySelector("img").src = theJSON_om215_hvad.lillebillede.guid;
    klon2.querySelector("article").addEventListener("click", () => {
        console.log("this.theJSON_om215_hvad.id")
        location.href = `hvad_er_215.html?id=${theJSON_om215_hvad.id}`;
    })

    container_om215.appendChild(klon2);

    //kloner hvem ind
    const klon3 = menuboksetemplate.cloneNode(true).content;
    klon3.querySelector("h3").textContent = theJSON_om215_hvem.title.rendered;
    klon3.querySelector("img").src = theJSON_om215_hvem.lillebillede.guid;
    klon3.querySelector("article").addEventListener("click", () => {
        console.log("this.theJSON_om215_hvem.id")
        location.href = `hvem_er_215.html?id=${theJSON_om215_hvem.id}`;
    })

    container_om215.appendChild(klon3);

}

function clickPraktiskInfoFrem() {
    container_praktiskinfo.classList.remove("hidden")
    visPraktiskInfo();
    document.querySelector("#praktisk_info").removeEventListener("click", clickPraktiskInfoFrem);

    //når man klikker på destinationer igen
    document.querySelector("#praktisk_info").addEventListener("click", () => {
        container_praktiskinfo.classList.add("hidden")
        document.querySelector("#praktisk_info").addEventListener("click", clickPraktiskInfoFrem);

    })

}

//vis data for 21-5
function visPraktiskInfo() {
    container_destinationer.innerHTML = "";
    container_boliger.innerHTML = "";
    container_okonomi.innerHTML = "";
    container_om215.innerHTML = "";
    container_kobafandel.innerHTML = "";
    container_praktiskinfo.innerHTML = "";

    console.log(theJSON_uge);
    console.log(theJSON_job);
    console.log(theJSON_faq);

    //kloner hvorfor uge
    const klon = menuboksetemplate.cloneNode(true).content;
    klon.querySelector("h3").textContent = theJSON_uge.title.rendered;
    klon.querySelector("img").src = theJSON_uge.lillebillede.guid;
    klon.querySelector("article").addEventListener("click", () => {

        console.log("this.theJSON_uge.id")

        location.href = `ugefordeling.html?id=${theJSON_uge.id}`;
    })

    container_praktiskinfo.appendChild(klon);

    //kloner job ind
    const klon2 = menuboksetemplate.cloneNode(true).content;
    klon2.querySelector("h3").textContent = theJSON_job.title.rendered;
    klon2.querySelector("img").src = theJSON_job.lillebillede.guid;
    klon2.querySelector("article").addEventListener("click", () => {
        console.log("this.theJSON_job.id")
        location.href = `job.html?id=${theJSON_job.id}`;
    })

    container_praktiskinfo.appendChild(klon2);

    //kloner faq
    const klon3 = menuboksetemplate.cloneNode(true).content;
    klon3.querySelector("h3").textContent = theJSON_faq.title.rendered;
    klon3.querySelector("img").src = theJSON_faq.lillebillede.guid;
    klon3.querySelector("article").addEventListener("click", () => {
        console.log("this.theJSON_faq.id")
        location.href = `FAQ.html?id=${theJSON_om215_hvem.id}`;
    })

    container_praktiskinfo.appendChild(klon3);



}

//Når man klikker på køb af andel:
function clickAndelFrem() {
    container_kobafandel.classList.remove("hidden")
    visAndel();
    document.querySelector("#kob_af_andel").removeEventListener("click", clickAndelFrem);

    //når man klikker på destinationer igen
    document.querySelector("#kob_af_andel").addEventListener("click", () => {
        container_kobafandel.classList.add("hidden")
        document.querySelector("#kob_af_andel").addEventListener("click", clickAndelFrem);

    })


}

// viser alt data
function visAndel() {

    container_destinationer.innerHTML = "";
    container_boliger.innerHTML = "";
    container_okonomi.innerHTML = "";
    container_om215.innerHTML = "";
    container_kobafandel.innerHTML = "";
    container_praktiskinfo.innerHTML = "";
    console.log(theJSON_kobafandel_ledigandel);
    console.log(theJSON_kobafandel_foreninger);
    console.log(theJSON_kobafandel_pakker);

    console.log(theJSON_kobafandel_moedos);

    //kloninger
    const klon = menuboksetemplate.cloneNode(true).content;

    klon.querySelector("h3").textContent = theJSON_kobafandel_ledigandel.title.rendered;

    klon.querySelector("img").src = theJSON_kobafandel_ledigandel.lillebillede.guid;

    klon.querySelector("article").addEventListener("click", () => {

        location.href = `ledig_andel.html?id=${theJSON_kobafandel_ledigandel.id}`;
    })
    container_kobafandel.appendChild(klon);

    //klon2
    const klon2 = menuboksetemplate.cloneNode(true).content;

    klon2.querySelector("h3").textContent = "Stiftede foreninger"

    klon2.querySelector("img").src = theJSON_kobafandel_foreninger.lillebillede.guid;

    klon2.querySelector("article").addEventListener("click", () => {

        location.href = `foreninger.html?id=${theJSON_kobafandel_foreninger.id}`;
    })
    container_kobafandel.appendChild(klon2);

    //klon3
    const klon3 = menuboksetemplate.cloneNode(true).content;

    klon3.querySelector("h3").textContent = "Vores foreninger";

    klon3.querySelector("img").src = theJSON_kobafandel_pakker.lillebillede.guid;

    klon3.querySelector("article").addEventListener("click", () => {

        location.href = `test1.html?id=${theJSON_kobafandel_pakker.id}`;
    })
    container_kobafandel.appendChild(klon3);

    //klon4
    const klon4 = menuboksetemplate.cloneNode(true).content;

    klon4.querySelector("h3").textContent = theJSON_kobafandel_moedos.title.rendered;

    klon4.querySelector("img").src = theJSON_kobafandel_moedos.lillebillede.guid;

    klon4.querySelector("article").addEventListener("click", () => {

        location.href = `moed-os.html?id=${theJSON_kobafandel_moedos.id}`;
    })
    container_kobafandel.appendChild(klon4);
}









//løb listen igennem og indsæt data i en template

//            theJSON_om215.forEach(side => {
//
//                console.log(side);
//
//                const klon = menuboksetemplate.cloneNode(true).content;
//                klon.querySelector("h3").textContent = side.title.rendered;
//                klon.querySelector("img").src = side.lillebillede.guid;
//                klon.querySelector("article").addEventListener("click", () => {
//
//                    location.href = `basis_galleri.html?id=${destination.id}`;
//                })
//
//                container.appendChild(klon);
//
//
//            })








function clickMenu() {
    console.log("jeg har klikket på menukanp")

    //gør så man kan se menuen, fjerner menuknap, tilføjer lukkeknap
    document.querySelector("#menu_linje").classList.remove("hidden");
    document.querySelector(".menuknap").classList.add("hidden");
    document.querySelector(".lukkeknap").classList.remove("hidden")
    document.querySelector(".logoweb").classList.add("hidden");

    //klik på lukkeknap, en anonymfunktion lukker den igen
    document.querySelector(".lukkeknap").addEventListener("click", () => {
        document.querySelector("#menu_linje").classList.add("hidden");
        document.querySelector(".menuknap").classList.remove("hidden");
        document.querySelector(".lukkeknap").classList.add("hidden")
        document.querySelector(".logoweb").classList.remove("hidden");
    })


}
