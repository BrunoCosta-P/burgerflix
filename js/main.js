$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



// js para modal

function openModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
    return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById("video").innerHTML=""
}


function tradi1 (mn) {
openModal(mn)
document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/zlX4PH-ZGG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function tradi2 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML=' <iframe width="560" height="315" src="https://www.youtube.com/embed/32bhyijYsTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}
function tradi3 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/tcAFIe9w-9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function tradi4 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/8beZ3zq02k8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function tradi5 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/_bspJojod1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function tradi6 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/pfsFhQtEuEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function tradi7 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/i07qkB8Hffw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function tradi8 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/5BXdjiA6p6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function tradi9 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML=' <iframe width="560" height="315" src="https://www.youtube.com/embed/sqCPcvJOEAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function tradi10 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/F0xPynvXTlM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function tradi11 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/NUyDQsPit0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function inva1 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/Jm-K7TeXcKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function inva2 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/y9cEa5BYBC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function inva3 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/e67-TOF0g_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function inva4 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/EXjpwZmrBbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function inva5 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/sa-n9i8ffkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function inva6 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/x_KTD16FOqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function inva7 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/UNFnU-eMQlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function inva8 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/xAAWwIAakFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe'
}

function inva9 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/PaMOfo7zUzY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function inva10 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/4NQN0-RoXzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function inva11 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/hQQDR5OjV0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function inva12 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/HYBSVPI-z40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function rece1 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/EOnUTdN_sXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function rece2 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/sH4ty-M4_Po" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function rece3 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/4dlO0G3OcnE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function rece4 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/WIJfebHO1MM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function rece5 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/Y__6RGqhCRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function rece6 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/k-fd-J5GVnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function rece7 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/Kc154K3BrCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function rece8 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/JsluY2jXa10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function rece9 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/ktDtDiY_2lc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function rece10 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/aBHzCYVVzqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function rece11 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/gExCTw_4jeU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function rece12 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/ToA8Z9PEW9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function aper1 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/LLbQ6B9fxnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function aper2 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/bs9hjOJiIMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function aper3 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/qWddrgTfNUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function aper4 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/ZRNzguYSsh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function aper5 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/a09_VhZEBwM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function aper6 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/OP7H-cA0T5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function aper7 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/_3tNG8Q33Rw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function aper8 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/HyTKGwD6RpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function aper9 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML=' <iframe width="560" height="315" src="https://www.youtube.com/embed/oA99bfYE-FQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function aper10 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/N5pYDDqx5Cc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function aper11 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML=' <iframe width="560" height="315" src="https://www.youtube.com/embed/lM1S718_Lbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function aper12 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML=' <iframe width="560" height="315" src="https://www.youtube.com/embed/KwBhh6qaTMQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function ava1 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/1JgNuJ3frbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function ava2 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/IIezA6I68DE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function ava3 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/XPPQJj0nfxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function ava4 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/bilJ8S9IoHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function ava5 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/HqW_kWJ-yUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function ava6 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/TCot-LCiV5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function ava7 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/B2I9Pl3DCl0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function ava8 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/23R-BMK4-Vc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function ava9 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/W2eiRHFK4NM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function ava10 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/tcAFIe9w-9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function ava11 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/POk9bYB0Z3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function ava12 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/b5jrFrhuFRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function patt1 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/EXjpwZmrBbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function patt2 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/bu2wKRoVggI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function patt3 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/W42de4A99yc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function patt4 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/ux2gIyHR-SA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function patt5 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/eRPHuBoV_yI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function patt6 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/eKHH0hDHX5E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function patt7 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/yYPqRvRhFdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function patt8 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/DyJnOWCwu-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function patt9 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/UbqVj3Zxxkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function patt10 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/wkNaFEs4TPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function patt11 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/ckjxS_42Y5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

function patt12 (mn) {
    openModal(mn)
    document.getElementById("video").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/C9-TUI_Zh78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}
