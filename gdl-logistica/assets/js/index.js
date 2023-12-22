const AppInit_= function(){};
AppInit_.prototype.AppPlugins_= function(){};

$(document).ready(function(){
    //const Plugins = new plugins_();
    //const fg = new fg_();

    const AppInit = new AppInit_();
    const Plugins = new AppInit.AppPlugins_();
    const Ajax = new AppInit.Ajax_();

    const AppHtml = {
        init: function () {

        },
    }

    const handleFormErrors = {
        showMessage: function (errors, form) {
            $.each(errors, function (item, value) {
                $('span#' + item + '-alert', $(form)).text(value[0])
            })
        },

        hideMessage: function (form) {
            $("span[id$='-alert']", $(form)).text('')
        }
    }

    const Requests = {
        href: window.location.protocol + "//" + window.location.host,

        selectNew: function (form) {
            let elementsInputs = $(form).serialize()
            let elementNewCard = $('.new__card')

            $.ajax({
                url: this.href + "/api/news",
                data: elementsInputs,
                type: "GET",
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",

                success: function (response) {
                    $(elementNewCard).html('');
                    for (const news of response) {
                        $(elementNewCard).append(`
                        <div class="col-md-6" data-aos="zoom-in-up">
                        <div class="card">
                        <div class="overlay-noticias">
                            <p class="text-center">
                                <a href="${news.route}">
                                    <img src="/img/plus.png" class="mx-auto d-block" alt="">
                                </a>
                            </p>
                        </div>
                        <img class="card-img-top" src="/storage/${news.medias[0].name}"
                        alt="${news.title}">
                        <div class="card-body">
                        <h6 class="card-categoria"></h6>
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.content}...</p>
                        </div>
                    </div>
                    </div>
                    `)
                    }

                    $('span', $('.result_')).html($("#title").val()).parent().fadeIn()
                },

                error: function (error) {
                    console.log(error.responseText);
                }
            })
        }
    }

    // gerais
    const App = {
        init: function () {
            AOS.init();
            this.contactForm7();
            this.vidbanner();
            this.gdvid();
            this.blockText();
            this.owl();
            AppHtml.init();
            Events.init();
        }, contactForm7: function () {
            let wpcf7 = { "api": { "root": "\/wp-json\/", "namespace": "contact-form-7\/v1" } };
        }, vidbanner: function () {
            //  $('vidbanner').play();
        }, gdvid: function () {
            //document.getElementById('gdvid').play();
            //$('#gdvid').play();
        }, /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
        openNav: function () {
            $('#mySidenav').show();
        }, /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
        closeNav: function () {
            $('#mySidenav').hide();
        }, blockText: function () {
            /* controlador do bloco que troca o fundo */
            //inicia com todos os blocos de texto escondidos
            $('.txico').hide();
        }, owl: function () {
        },
    }

    const Events = {
        init: function () {
            
        }
    }

    $(document).ready(function () {
        App.init();
    });
    
});

$(document).ready(function(){
    try {
        $(window).on("scroll", function () {
            let href = window.location.protocol + "//" + window.location.host + "/";
            let logobco = href + "img/2018/08/logogdl.png";
            let logorig = href + "img/gdl_original2.png";
            // set distance user needs to scroll before we start fadeIn
        });
        $('.form__select').on("submit", function (e) {
            e.preventDefault();
            Requests.selectNew(this);
        });
        $('#opennav').on("click", function (e) {
            e.preventDefault();
            App.openNav();
        });
        $('.closebtn').on("click", function (e) {
            e.preventDefault();
            App.closeNav();
        });
        $('.slide_nav').on("mouseover", function () {
            //pega o id do link clicado
            let idlink = $(this).data("id");
            //remove a classe ativo de todos os itens
            $('.item').removeClass('sativo');
            //esconde tudo
            $('.item').hide();
            //salva o slide que a pessoa clicou
            let link = $(this).attr("href");
            //atribui a class ativo ao slide onde a pessoa clicou
            $(link).addClass('sativo');
            //exibe o link clicado.
            $('.sativo').fadeIn('slow');
            // sem redirecionar a tela para o top
            return false;
        });
        /* Efeito de hover para os itens do menu princiapl */
        $("#ele1").on("mouseover", function () {
            $("#ele1 .caption-barra").show().scrollTop(100).css('position', 'absolute');
        });
        $("#ele1").on("mouseout", function () {
            $("#ele1 .caption-barra").hide();
        });
        $("#ele2").on("mouseover", function () {
            $("#ele2 .caption-barra").show().scrollTop(100).css('position', 'absolute');
        });
        $("#ele2").on("mouseout", function () {
            $("#ele2 .caption-barra").hide();
        });

        $("#ele3").on("mouseover", function () {
            $("#ele3 .caption-barra").show().scrollTop(100).css('position', 'absolute');
        });

        $("#ele3").on("mouseout", function () {
            $("#ele3 .caption-barra").hide();
        });
        /* Script atualizado para receber os dados do banco de dados */
        $('.maisicos').on("mouseover", function () {
            let thisitem = $(this);
            //pega o id do elemento
            let idelemento = $(this).attr("id");
            let img = "i" + idelemento;
            let fundo = $("#" + idelemento).attr('data-fundo');
            $('.mais-icones').css('background-image', 'url(' + fundo + ')').css('background-size', 'cover');
            //muda a cor do icone
            let newico = $('#' + img).data('reverso');
            $('#' + img).attr('src', newico);
        });
        //ações com mouse out
        $('.maisicos').on("mouseout", function () {
            let thisitem = $(this);
            //pega o id do elemento
            let idelemento = $(this).attr("id");
            let img = "i" + idelemento;
            //monta o nome do fundo relativo ao item
            //muda a cor do icone
            let newico = $('#' + img).data('normal');
            $('#' + img).attr('src', newico);
            $('#btslide01  > img').attr('src', 'themes/gdl-logistica/assets/img/bt1a.png');

        });

        $('#btslide01').on("mouseover", function () {
            //muda a cor do icone
            $('#btslide01  > img').attr('src', 'themes/gdl-logistica/assets/img/bt1a.png');
            $('#btslide02  > img').attr('src', 'themes/gdl-logistica/assets/img/bt2.png');
            $('#btslide03  > img').attr('src', 'themes/gdl-logistica/assets/img/bt3.png');
            $('#btslide04  > img').attr('src', 'themes/gdl-logistica/assets/img/bt4.png');
            $('#btslide05  > img').attr('src', 'themes/gdl-logistica/assets/img/bt5.png');
        });

        $('#btslide01').on("mouseout", function () {
            //muda a cor do icone
            $('#btslide01  > img').attr('src', 'themes/gdl-logistica/assets/img/bt1.png');
        });

        $('#btslide02').on("mouseover", function () {
            //muda a cor do icone
            $('#btslide02  > img').attr('src', 'themes/gdl-logistica/assets/img/bt2a.png');
            $('#btslide01  > img').attr('src', 'themes/gdl-logistica/assets/img/bt1.png');
            $('#btslide03  > img').attr('src', 'themes/gdl-logistica/assets/img/bt3.png');
            $('#btslide04  > img').attr('src', 'themes/gdl-logistica/assets/img/bt4.png');
            $('#btslide05  > img').attr('src', 'themes/gdl-logistica/assets/img/bt5.png');
        });

        $('#btslide02').on("mouseout", function () {
            //muda a cor do icone
            $('#btslide02  > img').attr('src', 'themes/gdl-logistica/assets/img/bt2.png');
        });

        $('#btslide03').on("mouseover", function () {
            //muda a cor do icone
            $('#btslide03  > img').attr('src', 'themes/gdl-logistica/assets/img/bt3a.png');
            $('#btslide01  > img').attr('src', 'themes/gdl-logistica/assets/img/bt1.png');
            $('#btslide02  > img').attr('src', 'themes/gdl-logistica/assets/img/bt2.png');
            $('#btslide04  > img').attr('src', 'themes/gdl-logistica/assets/img/bt4.png');
            $('#btslide05  > img').attr('src', 'themes/gdl-logistica/assets/img/bt5.png');
        });

        $('#btslide03').on("mouseout", function () {
            //muda a cor do icone
            $('#btslide03  > img').attr('src', 'themes/gdl-logistica/assets/img/bt3.png');
        });

        $('#btslide04').on("mouseover", function () {
            //muda a cor do icone
            $('#btslide04  > img').attr('src', 'themes/gdl-logistica/assets/img/bt4a.png');
            $('#btslide02  > img').attr('src', 'themes/gdl-logistica/assets/img/bt2.png');
            $('#btslide03  > img').attr('src', 'themes/gdl-logistica/assets/img/bt3.png');
            $('#btslide01  > img').attr('src', 'themes/gdl-logistica/assets/img/bt1.png');
            $('#btslide05  > img').attr('src', 'themes/gdl-logistica/assets/img/bt5.png');
        });

        $('#btslide04').on("mouseout", function () {
            //muda a cor do icone
            $('#btslide04  > img').attr('src', 'themes/gdl-logistica/assets/img/bt4.png');
        });

        $('#btslide05').on("mouseover", function () {
            //muda a cor do icone
            $('#btslide05  > img').attr('src', 'themes/gdl-logistica/assets/img/bt5a.png');
            $('#btslide02  > img').attr('src', 'themes/gdl-logistica/assets/img/bt2.png');
            $('#btslide03  > img').attr('src', 'themes/gdl-logistica/assets/img/bt3.png');
            $('#btslide04  > img').attr('src', 'themes/gdl-logistica/assets/img/bt4.png');
            $('#btslide01  > img').attr('src', 'themes/gdl-logistica/assets/img/bt1.png');
        });

        $('#btslide05').on("mouseout", function () {
            //muda a cor do icone
            $('#btslide05  > img').attr('src', 'themes/gdl-logistica/assets/img/bt5.png');
        });

        $('.maisicos').on("click", function () {
            return false;
        });

        $('form.contact-page').on('submit', function (e) {
            e.preventDefault()

            const form = $(this)
            let formData = form.serialize()
            let url = form.attr('action')
            let method = form.attr('method')

            handleFormErrors.hideMessage(form)

            let ajaxOptions = {
                data: formData,
                url: url,
                type: method,
                statusCode: {
                    200: function (response) {
                        if (response.form) {
                            Swal.fire(
                                response.form,
                                response.message,
                                'success'
                            )
                            limparForms()
                        }
                        $('div#response-output', $(form)).fadeIn()
                        $(form).get(0).reset()
                    },
                    422: function (response) {
                        handleFormErrors.showMessage(response.responseJSON.errors, form)
                    }
                },
                error: function (error) {
                    console.error(error.responseText);
                    Swal.fire(
                        '',
                        '',
                        'error'
                    )
                }
            }

            if ($(this).attr('enctype') === 'multipart/form-data') {
                ajaxOptions.contentType = false
                ajaxOptions.processData = false
                ajaxOptions.data = new FormData($(this).get(0))
            }

            $.ajax(ajaxOptions);


        });

    } catch (err) {
        new CatchLogs_("catch: " + err.message, "script.js  | Events - init");
    }

                //inicia o aos master

            /* esconde todos os slides*/
            $('.item').hide(300);
            /*mostra apenas o slide ativo*/
            $('.sativo').show(300);

            let diretorio = "./";
            /* editando os botoes do slider */

            //inicia o primeiro slide com o passador laranja, pois é o ativo
            $('#btslide01  > img').attr('src', 'themes/gdl-logistica/assets/img/bt1a.png')


            /* SLIDER DE SERVIÇOS */
            $('#owlservicos').owlCarousel({
                loop: true, margin: 0, responsiveClass: true, responsive: {
                    0: {
                        items: 1, nav: true, autoHeight: true
                    }, 400: {
                        items: 1, nav: true, autoHeight: true
                    }, 600: {
                        items: 1, nav: true, autoHeight: true
                    }, 1000: {
                        items: 3,
                        nav: true,
                        loop: true,
                        autoplay: true,
                        autoplayTimeout: 3000,
                        autoplayHoverPause: false,
                        autoHeight: true,

                    }
                }
            })
            /* end do slider de serviços */
            $('#owl2').owlCarousel({
                loop: true,
                dots: false,
                autoplay: 5000,
                margin: 0,
                merge: true,
                autoHeight: false,
                video: true,
                videoWidth: false,
                videoHeight: false,
                nav: false,
                responsive: {
                    0: {
                        items: 1
                    }, 600: {
                        items: 1
                    }, 1000: {
                        items: 1
                    }
                }
            })

});