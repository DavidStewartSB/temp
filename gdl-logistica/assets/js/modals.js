function limparForms() {
    $('#LR').each(function() {
        this.reset();
    })
    $('#DI').each(function() {
        this.reset();
    })
    $('.file1').removeClass('FileSelect')
    $('.file2').removeClass('FileSelect')
    $('.file3').removeClass('FileSelect')
    $('.file4').removeClass('FileSelect')
    $('.file1').val('')
    $('.file2').val('')
    $('.file3').val('')
    $('.file4').val('')
    $('.file1').html(`Adicione um arquivo:`)
    $('.file2').html(`Adicione um arquivo:`)
    $('.file3').html(`Adicione um arquivo:`)
    $('.file4').html(`Adicione um arquivo:`)
    $('.file2').addClass('modal_hidden')
    $('.file3').addClass('modal_hidden')
    $('.file4').addClass('modal_hidden')

    $('.file-lr1').removeClass('FileSelect')
    $('.file-lr2').removeClass('FileSelect')
    $('.file-lr3').removeClass('FileSelect')
    $('.file-lr1').val('')
    $('.file-lr2').val('')
    $('.file-lr3').val('')
    $('.file-lr1').html(`Adicione um arquivo: NF DE ENTRADA`)
    $('.file-lr2').html(`Adicione um arquivo: PG OU EXONERAÇÃO ICMS`)
    $('.file-lr3').html(`Adicione arquivos: DI, Extrato DI, BL e Outros`)
    $('#div-lr3').html('')
    lrCount = 3
    $('.modal-container').addClass('modal_hidden')
    $('.sombra').addClass('modal_hidden')
}
window.dataLayer = window.dataLayer || [];
let lrCount = 3

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'UA-140244235-1');
$(document).on('click', '.sombra', function() {
    $('.modal-container').addClass('modal_hidden')
    $('.sombra').addClass('modal_hidden')
})
$(document).on('click', '.close-modal', function() {
    $('.modal-container').addClass('modal_hidden')
    $('.sombra').addClass('modal_hidden')
})

$(document).on('click', '#btn-DI', function() {
    $('#modal-di').removeClass('modal_hidden')
    $('.sombra').removeClass('modal_hidden')
})

$(document).on('click', '#btn-LR', function() {
    $('#modal-lr').removeClass('modal_hidden')
    $('.sombra').removeClass('modal_hidden')
})


$(document).on('click', '#btn-reset', function() {
    $('#DI').each(function() {
        this.reset();
    })
    $('.file1').removeClass('FileSelect')
    $('.file2').removeClass('FileSelect')
    $('.file3').removeClass('FileSelect')
    $('.file4').removeClass('FileSelect')
    $('.file1').val('')
    $('.file2').val('')
    $('.file3').val('')
    $('.file4').val('')
    $('.file1').html(`Adicione um arquivo:`)
    $('.file2').html(`Adicione um arquivo:`)
    $('.file3').html(`Adicione um arquivo:`)
    $('.file4').html(`Adicione um arquivo:`)
    $('.file2').addClass('modal_hidden')
    $('.file3').addClass('modal_hidden')
    $('.file4').addClass('modal_hidden')

    $('#LR').each(function() {
        this.reset();
    })
    $('.file-lr1').removeClass('FileSelect')
    $('.file-lr2').removeClass('FileSelect')
    $('.file-lr3').removeClass('FileSelect')
    $('.file-lr1').val('')
    $('.file-lr2').val('')
    $('.file-lr3').val('')
    $('.file-lr1').html(`Adicione um arquivo: NF DE ENTRADA`)
    $('.file-lr2').html(`Adicione um arquivo: PG OU EXONERAÇÃO ICMS`)
    $('.file-lr3').html(`Adicione arquivos: DI, Extrato DI, BL e Outros`)
    $('#div-lr3').html('')
    lrCount = 3

})
$(document).on('click', '.sombra-iframe', function() {
    $('.iframe-sara').addClass('modal_hidden')
    $('.sombra-iframe').addClass('modal_hidden')
    $('.close-iframe').addClass('modal_hidden')
})
$(document).on('click', '.close-iframe', function() {
    $('.iframe-sara').addClass('modal_hidden')
    $('.sombra-iframe').addClass('modal_hidden')
    $('.close-iframe').addClass('modal_hidden')
})
$(document).on('click', '.btn-sara', function() {
    $('.iframe-sara').removeClass('modal_hidden')
    $('.sombra-iframe').removeClass('modal_hidden')
    $('.close-iframe').removeClass('modal_hidden')
})

$(document).on('change', '#anexo-di', function(e) {
    FileName = e.target.files[0].name
    $('.file1').addClass('FileSelect')
    $('.file1').html(`Arquivo Selecionado:</br> ${FileName}`)
    $('.file2').removeClass('modal_hidden')
})
$(document).on('change', '#anexo-di2', function(e) {
    FileName2 = e.target.files[0].name
    $('.file2').addClass('FileSelect')
    $('.file2').html(`Arquivo Selecionado:</br> ${FileName2}`)
    $('.file3').removeClass('modal_hidden')
})
$(document).on('change', '#anexo-di3', function(e) {
    FileName3 = e.target.files[0].name
    $('.file3').addClass('FileSelect')
    $('.file3').html(`Arquivo Selecionado:</br> ${FileName3}`)
    $('.file4').removeClass('modal_hidden')
})
$(document).on('change', '#anexo-di4', function(e) {
    FileName4 = e.target.files[0].name
    $('.file4').addClass('FileSelect')
    $('.file4').html(`Arquivo Selecionado:</br> ${FileName4}`)
})
$(document).on('change', '#anexo-lr1', function(e) {
    let files = []
    let filesName = ''
    $('.file-lr1').addClass('FileSelect')
    for ($i = 0; $i <= e.target.files.length; $i++) {
        files.push(e.target.files[$i].name)
        filesName = files.toString()
        $('.file-lr1').html(`Arquivo Selecionado:</br>${filesName}`)
    }
})
$(document).on('change', '#anexo-lr2', function(e) {
    FileName2 = e.target.files[0].name
    $('.file-lr2').addClass('FileSelect')
    $('.file-lr2').html(`Arquivo Selecionado:</br> ${FileName2}`)
})
$(document).on('change', `#anexo-lr3`, function(e) {
    $(`.file-lr3`).addClass('FileSelect')
    $(`.file-lr3`).html(`Arquivo Selecionado:</br>${e.target.files[0].name}`)
    if (lrCount == 3) {
        $(`#div-lr3`).html(` <div style="margin: auto; "><label style="width: 100%;text-align: center;"
        class='caixa-file file-lr4' for='anexo-lr4'>Adicione arquivos: DI, Extrato DI, BL e Outros
    </label>
    <input id='anexo-lr4' value='' style="display: none;" type="file" multiple name="anexo-lr4" size="40"
        class="wpcf7-form-control wpcf7-file form-control" accept=".pdf,.xml,.xls,.xlsx" aria-invalid="false">
    <span role="alert" class="wpcf7-not-valid-tip" id="anexo-lr4-alert"></span>
</div>
<div id='div-lr4'></div>`)
        lrCount = 4
        fileChange(lrCount)
    }
})

$(document).on('click', '.close_alerta', function(e) {
    $('.modal_alerta').addClass('modal_hidden')
    $('.sombra_alerta').addClass('modal_hidden')
})

function fileChange(DivLr) {
    $(document).on('change', `#anexo-lr${DivLr}`, function(e) {
        $(`.file-lr${DivLr}`).addClass('FileSelect')
        $(`.file-lr${DivLr}`).html(`Arquivo Selecionado:</br>${e.target.files[0].name}`)
        if (lrCount == DivLr) {
            $(`#div-lr${DivLr}`).html(` <div style="margin: auto; "><label style="width: 100%;text-align: center;"
        class='caixa-file file-lr${DivLr + 1}' for='anexo-lr${DivLr + 1}'>Adicione arquivos: DI, Extrato DI,
        BL e Outros
    </label>
    <input id='anexo-lr${DivLr + 1}' value='' style="display: none;" type="file" multiple
        name="anexo-lr${DivLr + 1}" size="40" class="wpcf7-form-control wpcf7-file form-control"
        accept=".pdf,.xml,.xls,.xlsx" aria-invalid="false">
    <span role="alert" class="wpcf7-not-valid-tip" id="anexo-lr${DivLr + 1}-alert"></span>
</div>
<div id='div-lr${DivLr + 1}'></div>`)
            console.log(lrCount, DivLr)
            console.log(lrCount)
            lrCount = lrCount + 1
            console.log(lrCount)
            fileChange(lrCount)
        }
    })
}
