$(document).on("click", ".dropdown_init", function () {
    $(".dropdown_header").toggleClass("active_dropdown");
    const element = document.querySelector("#saiba-mais");
    const drop = document.querySelector(".dropdown_header");
    var rect = element.getBoundingClientRect().left;
    let valor = rect - 34
    drop.style.left = `${valor}px`;
    
});



$(document).on("click", ".nav_mobile", function () {
    $(".navMbl").toggleClass("desactivated");
});


$(document).on("change", "#map_select", function () {
    let valueSelected = $("#map_select").val();
    const select = document.querySelector("#map_select");
    const options = [...select.options];
    options.forEach((option) => {
        $(`#${option.value}`).addClass("invisivel");
    });
    $(`#${valueSelected}`).removeClass("invisivel");
});
$(document).on("ready", function () {
    $(".map_option").trigger("click");
});