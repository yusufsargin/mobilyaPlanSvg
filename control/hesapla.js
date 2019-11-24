let svg_ön = require('./svg_duz').svg_ön;
let svg_0 = require('./svg_duz').svg_0;
let rect_ön = require('./svg_duz').rect_ön;

// Filename: public/hesapla.js
//
// Code written in public files is shared by your site's
// Backend, page code, and site code environments.
//
// Use public files to hold utility functions that can
// be called from multiple locations in your site's code.
/*
export function add(taşıma) {
	//denendi.duvar_no=10
	let sum = taşıma.duvar_no = 12
	return sum;

}*/
//---------------------------------
//let sol_boy = []

//let izo_kapak = ""


//-------------------------------------


module.exports.hesaplama = function (t, oda1, yeni_modül, modül_numarası, duvar_eni_1, duvar_yüksekliği_1, sol_boy) {
    let formFactor = "Desktop"
    //console.log("kapak= " + g.kapak2.adı)
    let d3_tüm = ""
    let izo_tüm = ""
    let sunta_miktarı = 0
    let g = {
        no: 1,
        duvar_no: 1,
        modül_adı: "4 çekmece",
        modül_tipi: 1,
        svg1: "",
        svg_üst: "",
        kasa_tipi: 2,
        eni: 60,
        yükseklik: 87,
        derinlik: 58,
        x1: 0,
        y1: 0,
        z1: 0,
        sol_yan: {
            dahil: true,
            adı: "sol yan",
            x_1: 0,
            y_1: 0,
            z_1: 0,
            en: 0,
            boy: 0,
            malzeme: {
                adı: "sunta",
                kalınlık: 1.8, desen: false,
                desen_yönü: 0
            },
            ön_gir: 0,
            arka_gir: 0,
            üst_gir: 0,
            alt_gir: 0,
            ön_bant: 0.8,
            arka_bant: 0.8,
            üst_bant: 0.8,
            alt_bant: 0.8
        },
        sağ_yan: {
            dahil: true,
            adı: "sağ yan",
            x_1: 0,
            y_1: 0,
            z_1: 0,
            en: 0,
            boy: 0,
            malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
            ön_gir: 0,
            arka_gir: 0,
            üst_gir: 0,
            alt_gir: 0,
            ön_bant: 0.8,
            arka_bant: 0.8,
            üst_bant: 0.8,
            alt_bant: 0.8
        },
        üst: {
            düz: {
                dahil: false,
                adı: "üst",
                tip: 3,
                x_1: 0,
                y_1: 0,
                z_1: 0,
                en: 0,
                boy: 0,
                yön: 0,
                malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                üst_gir: 0,
                ön_gir: 0,
                arka_gir: 0,
                sol_gir: 0,
                sağ_gir: 0,
                ön_bant: 0.8,
                arka_bant: 0.8,
                sol_bant: 0.8,
                sağ_bant: 0.8
            },
            dik_köşe: {
                dahil: false,
                adı: "dik_köşe",
                x_1: 0,
                y_1: 0,
                z_1: 0,
                en: 10,
                boy: 0,
                yön: 0,
                sol_ön_gir: 0,
                sağ_ön_gir: 0,
                köşe_açı: 90,
                köşe_mesafesi: 0,
                malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                üst_gir: 0,
                ön_gir: 0,
                arka_gir: 0,
                sol_gir: 0,
                sağ_gir: 0,
                ön_bant: 0.8,
                arka_bant: 0.8,
                sol_bant: 0.8,
                sağ_bant: 0.8
            },
            açılı_köşe: {
                dahil: false,
                adı: "açılı köşe",
                x_1: 0,
                y_1: 0,
                z_1: 0,
                en: 10,
                boy: 0,
                yön: 0,
                sol_ön_gir: 0,
                sağ_ön_gir: 0,
                köşe_açı: 90,
                köşe_mesafesi: 0,
                malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                üst_gir: 0,
                ön_gir: 0,
                arka_gir: 0,
                sol_gir: 0,
                sağ_gir: 0,
                ön_bant: 0.8,
                arka_bant: 0.8,
                sol_bant: 0.8,
                sağ_bant: 0.8
            },
            ön_kayıt: {
                dahil: true,
                adı: "üst ön kayıt",
                x_1: 0,
                y_1: 0,
                z_1: 0,
                en: 10,
                boy: 0,
                yön: 0,
                malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                üst_gir: 0,
                ön_gir: 0,
                arka_gir: 0,
                sol_gir: 0,
                sağ_gir: 0,
                ön_bant: 0.8,
                arka_bant: 0.8,
                sol_bant: 0.8,
                sağ_bant: 0.8
            },
            arka_kayıt: {
                dahil: true,
                adı: "üst arka kayıt",
                x_1: 0,
                y_1: 0,
                z_1: 0,
                en: 10,
                boy: 0,
                yön: 0,
                malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                üst_gir: 0,
                ön_gir: 0,
                arka_gir: 0,
                sol_gir: 0,
                sağ_gir: 0,
                ön_bant: 0.8,
                arka_bant: 0.8,
                sol_bant: 0.8,
                sağ_bant: 0.8
            },
        },
        alt: {
            düz: {
                dahil: true,
                adı: "alt",
                tip: 3,
                x_1: 0,
                y_1: 0,
                z_1: 0,
                en: 0,
                boy: 0,
                malzeme: {adı: "SuntaLam", kalınlık: 1.8, desen: false, desen_yönü: 0},
                alt_gir: 0,
                ön_gir: 0,
                arka_gir: 0,
                sol_gir: 0,
                sağ_gir: 0,
                ön_bant: 0.8,
                arka_bant: 0.8,
                sol_bant: 0.8,
                sağ_bant: 0.8
            },
            dik_köşe: {
                dahil: false,
                adı: "dik_köşe",
                x_1: 0,
                y_1: 0,
                z_1: 0,
                en: 10,
                boy: 0,
                yön: 0,
                sol_ön_gir: 20,
                sağ_ön_gir: 30,
                köşe_açı: 90,
                köşe_mesafesi: 0,
                malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                üst_gir: 0,
                ön_gir: 0,
                arka_gir: 0,
                sol_gir: 0,
                sağ_gir: 0,
                ön_bant: 0.8,
                arka_bant: 0.8,
                sol_bant: 0.8,
                sağ_bant: 0.8
            },
            açılı_köşe: {
                dahil: false,
                adı: "açılı köşe",
                x_1: 0,
                y_1: 0,
                z_1: 0,
                en: 10,
                boy: 0,
                yön: 0,
                sol_ön_gir: 20,
                sağ_ön_gir: 30,
                köşe_açı: 90,
                köşe_mesafesi: 0,
                malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                üst_gir: 0,
                ön_gir: 0,
                arka_gir: 0,
                sol_gir: 0,
                sağ_gir: 0,
                ön_bant: 0.8,
                arka_bant: 0.8,
                sol_bant: 0.8,
                sağ_bant: 0.8
            },
        },
        raf: {
            dahil: false,
            adı: "raf",
            x_1: 0,
            y_1: 0,
            z_1: 0,
            en: 0,
            boy: 0,
            adet: 1,
            malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
            ön_gir: 0,
            arka_gir: 0,
            sol_gir: 0,
            sağ_gir: 0,
            ön_bant: 0.8,
            arka_bant: 0.8,
            sol_bant: 0.8,
            sağ_bant: 0.8
        },
        ark_kş: {
            dahil: false,
            adı: "arka kuşak",
            x_1: 0,
            y_1: 0,
            z_1: 0,
            en: 15,
            boy: 0,
            alt_mesafe: 20,
            malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
            sol_gir: 0,
            sağ_gir: 0,
            üst_gir: 0,
            alt_gir: 0,
            sol_bant: 0.8,
            sağ_bant: 0.8,
            üst_bant: 0.8,
            alt_bant: 0.8
        },
        kln_sol: {
            dahil: false,
            adı: "sol kapama",
            x_1: 0,
            y_1: 0,
            z_1: 0,
            en: 15,
            boy: 0,
            malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
            ön_gir: 0,
            arka_gir: 0,
            üst_gir: 0,
            alt_gir: 0,
            ön_bant: 0.8,
            arka_bant: 0.8,
            üst_bant: 0.8,
            alt_bant: 0.8
        },
        kln_sağ: {
            dahil: false,
            adı: "sağ kapama",
            x_1: 0,
            y_1: 0,
            z_1: 0,
            en: 0,
            boy: 0,
            malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
            ön_gir: 0,
            arka_gir: 0,
            üst_gir: 0,
            alt_gir: 0,
            ön_bant: 0.8,
            arka_bant: 0.8,
            üst_bant: 0.8,
            alt_bant: 0.8
        },
        arkalık: {
            dahil: true,
            adı: "arkalık",
            x_1: 0,
            y_1: 0,
            z_1: 0,
            en: 0,
            boy: 0,
            tipi: 1,
            fugası: 0.9,
            yiv_genişliği: 1.1,
            kanal_derinliği: 1.1,
            gövde_fugası: 1.1,
            malzeme: {adı: "sunta", kalınlık: 0.8, desen: false, desen_yönü: 0},
            arka_gir: 1.6,
            sol_gir: 0,
            sağ_gir: 0,
            üst_gir: 0,
            alt_gir: 0,
            sol_bant: 0.8,
            sağ_bant: 0.8,
            üst_bant: 0.8,
            alt_bant: 0.8
        },
        pervaz_sağ: false,
        pervaz_sol: false,
        sabit_raf: {
            dahil: false,
            adı: "sabit_raf",
            x_1: 0,
            y_1: 0,
            z_1: 0,
            en: 0,
            boy: 0,
            adet: 1,
            malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
            ön_gir: 0,
            arka_gir: 0,
            sol_gir: 0,
            sağ_gir: 0,
            ön_bant: 0.8,
            arka_bant: 0.8,
            sol_bant: 0.8,
            sağ_bant: 0.8
        },
        kapak: {
            dahil: false,
            adı: "kapak",
            x_1: 0,
            y_1: 0,
            z_1: 0,
            en: 0,
            boy: 0,
            adet: 0,
            yönü: "dikey",
            cam_kodu: 0,
            malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
            sol_gir: 0,
            sağ_gir: 0,
            üst_gir: 0,
            alt_gir: 0,
            sol_bant: 0.8,
            sağ_bant: 0.8,
            üst_bant: 0.8,
            alt_bant: 0.8
        },
        kapak2: {
            dahil: false,
            adı: "kapak",
            x_1: 0,
            y_1: 0,
            z_1: 0,
            en: 0,
            boy: 0,
            adet: 2,
            yönü: "dikey",
            cam_kodu: 0,
            malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
            sol_gir: 0,
            sağ_gir: 0,
            üst_gir: 0,
            alt_gir: 0,
            sol_bant: 0.8,
            sağ_bant: 0.8,
            üst_bant: 0.8,
            alt_bant: 0.8
        },
        baza: {
            dahil: true,
            adı: "arka_kuşak",
            x_1: 0,
            y_1: 0,
            z_1: 0,
            en: 10,
            boy: 0,
            arka_gir: 1,
            malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
            sol_gir: 0,
            sağ_gir: 0,
            üst_gir: 0,
            alt_gir: 0,
            sol_bant: 0.8,
            sağ_bant: 0.8,
            üst_bant: 0.8,
            alt_bant: 0.8
        },
        ank: false,
        ank_yükseklik: 0,
        ank_en: 0,
        aventos: 0,
        çekmece_var: true,
        çekmece_sys: 2,
        çekmece_modül_tip: 5, //1. bir çekmece: 2. iki büyük çekmece : 3.2küçük 1büyük çekmece :4 3 eşit çekmece :5 4 eşit çekmece
        çk: [{
            kapak: {
                dahil: false,
                adı: "çk kapak",
                tip: 1,
                x_1: 0,
                y_1: 0,
                z_1: 0,
                en: 0,
                boy: 0,
                yönü: "yatay",
                malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                sol_gir: 0,
                sağ_gir: 0,
                üst_gir: 0,
                alt_gir: 0,
                sol_bant: 0.8,
                sağ_bant: 0.8,
                üst_bant: 0.8,
                alt_bant: 0.8
            },
            dahil: true,
            adı: "1. çekmece kutusu",
            x_1: 0,
            y_1: 0,
            z_1: 0,
            tip: 1,
            en: 50,
            yükseklik: 10,
            derinlik: 50,
            sol_gir: 1.3,
            sağ_gir: 1.3,
            ön_gir: 0,
            arka_gir: 0,
            üst_gir: 0,
            alt_gir: 0,
            ray_mesafesi_alttan: 0,
            kutu_boşluk: 20,
            sol_yan: {
                dahil: true,
                adı: "çk sol yan",
                x_1: 0,
                y_1: 0,
                z_1: 0,
                en: 0,
                boy: 0,
                malzeme: {adı: "SuntaLam", kalınlık: 1.8, desen: false, desen_yönü: 0},
                ön_gir: 0,
                arka_gir: 0,
                üst_gir: 0,
                alt_gir: 0,
                ön_bant: 0.8,
                arka_bant: 0.8,
                üst_bant: 0.8,
                alt_bant: 0.8
            },
            sağ_yan: {
                dahil: true,
                adı: "çk sağ yan",
                x_1: 0,
                y_1: 0,
                z_1: 0,
                en: 0,
                boy: 0,
                malzeme: {adı: "SuntaLam", kalınlık: 1.8, desen: false, desen_yönü: 0},
                ön_gir: 0,
                arka_gir: 0,
                üst_gir: 0,
                alt_gir: 0,
                ön_bant: 0.8,
                arka_bant: 0.8,
                üst_bant: 0.8,
                alt_bant: 0.8

            },
            ön: {
                dahil: true,
                adı: "çk ön",
                x_1: 0,
                y_1: 0,
                z_1: 0,
                en: 0,
                boy: 0,
                malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                ön_gir: 0,
                sol_gir: 0,
                sağ_gir: 0,
                üst_gir: 0,
                alt_gir: 0,
                sol_bant: 0.8,
                sağ_bant: 0.8,
                üst_bant: 0.8,
                alt_bant: 0.8
            },
            arka: {
                dahil: true,
                adı: "çk arka",
                x_1: 0,
                y_1: 0,
                z_1: 0,
                en: 0,
                boy: 0,
                malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                arka_gir: 0,
                sol_gir: 0,
                sağ_gir: 0,
                üst_gir: 0,
                alt_gir: 0,
                sol_bant: 0.8,
                sağ_bant: 0.8,
                üst_bant: 0.8,
                alt_bant: 0.8
            },
            alt: {
                dahil: true,
                adı: "çk alt",
                y_1: 0,
                z_1: 0,
                en: 0,
                boy: 0,
                malzeme: {adı: "arkalık", kalınlık: 0.3, desen: false, desen_yönü: 0},
                alt_gir: 0,
                ön_gir: 0,
                arka_gir: 0,
                sol_gir: 0,
                sağ_gir: 0,
                ön_bant: 0.8,
                arka_bant: 0.8,
                sol_bant: 0.8,
                sağ_bant: 0.8
            }
        },
            { //2. çekmece
                kapak: {
                    dahil: false,
                    adı: "çk kapak",
                    tip: 1,
                    x_1: 0,
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    yönü: "yatay",
                    malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                    sol_gir: 0,
                    sağ_gir: 0,
                    üst_gir: 0,
                    alt_gir: 0,
                    sol_bant: 0.8,
                    sağ_bant: 0.8,
                    üst_bant: 0.8,
                    alt_bant: 0.8
                },
                dahil: true,
                adı: "çekmece kutusu",
                x_1: 0,
                y_1: 0,
                z_1: 0,
                tip: 1,
                en: 50,
                yükseklik: 10,
                derinlik: 50,
                sol_gir: 1.3,
                sağ_gir: 1.3,
                ön_gir: 0,
                arka_gir: 0,
                üst_gir: 0,
                alt_gir: 0,
                ray_mesafesi_alttan: 0,
                kutu_boşluk: 20,
                sol_yan: {
                    dahil: true,
                    adı: "çk.2 sol yan",
                    x_1: 0,
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    malzeme: {adı: "SuntaLam", kalınlık: 1.8, desen: false, desen_yönü: 0},
                    ön_gir: 0,
                    arka_gir: 0,
                    üst_gir: 0,
                    alt_gir: 0,
                    ön_bant: 0.8,
                    arka_bant: 0.8,
                    üst_bant: 0.8,
                    alt_bant: 0.8
                },
                sağ_yan: {
                    dahil: true,
                    adı: "çk.2 sağ yan",
                    x_1: 0,
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    malzeme: {adı: "SuntaLam", kalınlık: 1.8, desen: false, desen_yönü: 0},
                    ön_gir: 0,
                    arka_gir: 0,
                    üst_gir: 0,
                    alt_gir: 0,
                    ön_bant: 0.8,
                    arka_bant: 0.8,
                    üst_bant: 0.8,
                    alt_bant: 0.8

                },
                ön: {
                    dahil: true,
                    adı: "çk.2 ön",
                    x_1: 0,
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                    ön_gir: 0,
                    sol_gir: 0,
                    sağ_gir: 0,
                    üst_gir: 0,
                    alt_gir: 0,
                    sol_bant: 0.8,
                    sağ_bant: 0.8,
                    üst_bant: 0.8,
                    alt_bant: 0.8
                },
                arka: {
                    dahil: true,
                    adı: "çk.2 arka",
                    x_1: 0,
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                    arka_gir: 0,
                    sol_gir: 0,
                    sağ_gir: 0,
                    üst_gir: 0,
                    alt_gir: 0,
                    sol_bant: 0.8,
                    sağ_bant: 0.8,
                    üst_bant: 0.8,
                    alt_bant: 0.8
                },
                alt: {
                    dahil: true,
                    adı: "çk.2 alt",
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    malzeme: {adı: "arkalık", kalınlık: 0.3, desen: false, desen_yönü: 0},
                    alt_gir: 0,
                    ön_gir: 0,
                    arka_gir: 0,
                    sol_gir: 0,
                    sağ_gir: 0,
                    ön_bant: 0.8,
                    arka_bant: 0.8,
                    sol_bant: 0.8,
                    sağ_bant: 0.8
                }
            },
            { //3. çekmece
                kapak: {
                    dahil: false,
                    adı: "çk kapak",
                    tip: 1,
                    x_1: 0,
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    yönü: "yatay",
                    malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                    sol_gir: 0,
                    sağ_gir: 0,
                    üst_gir: 0,
                    alt_gir: 0,
                    sol_bant: 0.8,
                    sağ_bant: 0.8,
                    üst_bant: 0.8,
                    alt_bant: 0.8
                },
                dahil: true,
                adı: "çekmece kutusu",
                x_1: 0,
                y_1: 0,
                z_1: 0,
                tip: 1,
                en: 50,
                yükseklik: 10,
                derinlik: 50,
                sol_gir: 1.3,
                sağ_gir: 1.3,
                ön_gir: 0,
                arka_gir: 0,
                üst_gir: 0,
                alt_gir: 0,
                ray_mesafesi_alttan: 0,
                kutu_boşluk: 20,
                sol_yan: {
                    dahil: true,
                    adı: "sol yan",
                    x_1: 0,
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    malzeme: {adı: "SuntaLam", kalınlık: 1.8, desen: false, desen_yönü: 0},
                    ön_gir: 0,
                    arka_gir: 0,
                    üst_gir: 0,
                    alt_gir: 0,
                    ön_bant: 0.8,
                    arka_bant: 0.8,
                    üst_bant: 0.8,
                    alt_bant: 0.8
                },
                sağ_yan: {
                    dahil: true,
                    adı: "sağ yan",
                    x_1: 0,
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    malzeme: {adı: "SuntaLam", kalınlık: 1.8, desen: false, desen_yönü: 0},
                    ön_gir: 0,
                    arka_gir: 0,
                    üst_gir: 0,
                    alt_gir: 0,
                    ön_bant: 0.8,
                    arka_bant: 0.8,
                    üst_bant: 0.8,
                    alt_bant: 0.8

                },
                ön: {
                    dahil: true,
                    adı: "ön",
                    x_1: 0,
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                    ön_gir: 0,
                    sol_gir: 0,
                    sağ_gir: 0,
                    üst_gir: 0,
                    alt_gir: 0,
                    sol_bant: 0.8,
                    sağ_bant: 0.8,
                    üst_bant: 0.8,
                    alt_bant: 0.8
                },
                arka: {
                    dahil: true,
                    adı: "arka",
                    x_1: 0,
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                    arka_gir: 0,
                    sol_gir: 0,
                    sağ_gir: 0,
                    üst_gir: 0,
                    alt_gir: 0,
                    sol_bant: 0.8,
                    sağ_bant: 0.8,
                    üst_bant: 0.8,
                    alt_bant: 0.8
                },
                alt: {
                    dahil: true,
                    adı: "alt",
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    malzeme: {adı: "arkalık", kalınlık: 0.3, desen: false, desen_yönü: 0},
                    alt_gir: 0,
                    ön_gir: 0,
                    arka_gir: 0,
                    sol_gir: 0,
                    sağ_gir: 0,
                    ön_bant: 0.8,
                    arka_bant: 0.8,
                    sol_bant: 0.8,
                    sağ_bant: 0.8
                }
            },
            { // 4. çekmece
                kapak: {
                    dahil: false,
                    adı: "çk kapak",
                    tip: 1,
                    x_1: 0,
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    yönü: "yatay",
                    malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                    sol_gir: 0,
                    sağ_gir: 0,
                    üst_gir: 0,
                    alt_gir: 0,
                    sol_bant: 0.8,
                    sağ_bant: 0.8,
                    üst_bant: 0.8,
                    alt_bant: 0.8
                },
                dahil: true,
                adı: "çekmece kutusu",
                x_1: 0,
                y_1: 0,
                z_1: 0,
                tip: 1,
                en: 50,
                yükseklik: 10,
                derinlik: 50,
                sol_gir: 1.3,
                sağ_gir: 1.3,
                ön_gir: 0,
                arka_gir: 0,
                üst_gir: 0,
                alt_gir: 0,
                ray_mesafesi_alttan: 0,
                kutu_boşluk: 20,
                sol_yan: {
                    dahil: true,
                    adı: "sol yan",
                    x_1: 0,
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    malzeme: {adı: "SuntaLam", kalınlık: 1.8, desen: false, desen_yönü: 0},
                    ön_gir: 0,
                    arka_gir: 0,
                    üst_gir: 0,
                    alt_gir: 0,
                    ön_bant: 0.8,
                    arka_bant: 0.8,
                    üst_bant: 0.8,
                    alt_bant: 0.8
                },
                sağ_yan: {
                    dahil: true,
                    adı: "sağ yan",
                    x_1: 0,
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    malzeme: {adı: "SuntaLam", kalınlık: 1.8, desen: false, desen_yönü: 0},
                    ön_gir: 0,
                    arka_gir: 0,
                    üst_gir: 0,
                    alt_gir: 0,
                    ön_bant: 0.8,
                    arka_bant: 0.8,
                    üst_bant: 0.8,
                    alt_bant: 0.8

                },
                ön: {
                    dahil: true,
                    adı: "ön",
                    x_1: 0,
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                    ön_gir: 0,
                    sol_gir: 0,
                    sağ_gir: 0,
                    üst_gir: 0,
                    alt_gir: 0,
                    sol_bant: 0.8,
                    sağ_bant: 0.8,
                    üst_bant: 0.8,
                    alt_bant: 0.8
                },
                arka: {
                    dahil: true,
                    adı: "arka",
                    x_1: 0,
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    malzeme: {adı: "sunta", kalınlık: 1.8, desen: false, desen_yönü: 0},
                    arka_gir: 0,
                    sol_gir: 0,
                    sağ_gir: 0,
                    üst_gir: 0,
                    alt_gir: 0,
                    sol_bant: 0.8,
                    sağ_bant: 0.8,
                    üst_bant: 0.8,
                    alt_bant: 0.8
                },
                alt: {
                    dahil: true,
                    adı: "alt",
                    y_1: 0,
                    z_1: 0,
                    en: 0,
                    boy: 0,
                    malzeme: {adı: "arkalık", kalınlık: 0.3, desen: false, desen_yönü: 0},
                    alt_gir: 0,
                    ön_gir: 0,
                    arka_gir: 0,
                    sol_gir: 0,
                    sağ_gir: 0,
                    ön_bant: 0.8,
                    arka_bant: 0.8,
                    sol_bant: 0.8,
                    sağ_bant: 0.8
                }
            }
        ],
        çekmece: true,
        cam_kodu: 0,
        çekmece_4: false,
        üst_bşlk: 0.5,
        kapak_arası: 0.3,
        text1: "",
        edit: true,
    };

    g = t;
    //----------------------------------

    let üst_dolap_yüksekliği = 150;
    //-----------------------

    g.y1 = oda1['yükseklik'] - g['yükseklik'];
    //console.log("g.x1=" + g.x1)
    //g.y1 = oda1.yükseklik - (g.yükseklik + üst_dolap_yüksekliği);

    //g.x1 = sol_mesafe

    //console.log("g.boş=" + g.boş)
    //	console.log("sol_boy=" + sol_boy)
    g.p_text = ""

    if (g.baza.dahil === false) {
        g.baza.en = 0
    }

    //----------------sıralı işlem-----------
    sol_kapama();
    sol_yan();
    raf();
    arka_kusak();
    sabit_raf();
    arkalik();
    alt();
    if (g.çekmece_var) {
        cekmece_kutusu();
    }
    ust();
    baza();
    sag_kapama();
    sag_yan();
    /*
        if (g.çekmece_var) {
            cekmece();
        }
    */
    kapak();
    aventos();

    //-----------------------------------------
    /*function data_birleştir(ad, ma, p_x_1, p_y_1, p_z_1, p_en, p_boy, p_kalınlık, p_tip, p_renk) {
        let p_x = g.x1 + p_x_1;
        let p_y = g.y1 + p_y_1;
        let p_z = g.z1 + p_z_1;
        g.izo_kapak = g.izo_kapak + svg_ön(p_x_1, p_y_1, p_z_1, p_en, p_boy, p_kalınlık, p_tip, p_renk)
        g.d3 = g.d3 + svg_ön(p_x, p_y, p_z, p_en, p_boy, p_kalınlık, p_tip, p_renk)
        let rect = svg_ciz(p_x, p_y, p_z, p_en, p_boy, p_kalınlık, p_tip, p_renk)
        g.d1_svg = g.d1_svg + rect.ön
        g.d1_svg_üst = g.d1_svg_üst + rect.üst
        g.p_text = g.p_text + (ad + "=" + p_en + "X" + p_boy + "_" + ma + "\n")
    }*/

    function sol_kapama() {
        if (g.kln_sol.dahil) {
            g.kln_sol.tip = 2
            g.kln_sol.x_1 = 0
            g.kln_sol.y_1 = 0
            g.kln_sol.z_1 = 0
            g.kln_sol.renk = 'fill="linen"'
            if ((g.kasa_tipi === 1)) {
                g.kln_sol.en = g.derinlik - (g.kln_sol.ön_gir + g.kln_sol.arka_gir)
                g.kln_sol.boy = g.yükseklik - (g.kln_sol.alt_gir + g.kln_sol.üst_gir) // g.baza eklenmedi
            } else if (g.kasa_tipi === 2) {
                g.kln_sol.en = g.derinlik - (g.kln_sol.ön_gir + g.kln_sol.arka_gir)
                g.kln_sol.boy = g.yükseklik - (g.kln_sol.alt_gir + g.kln_sol.üst_gir)
            }
            //data_birleştir(g.kln_sol.adı, g.kln_sol.malzeme.adı, g.kln_sol.x_1, g.kln_sol.y_1, g.kln_sol.z_1, g.kln_sol.en, g.kln_sol.boy, g.kln_sol.malzeme.kalınlık, g.kln_sol.tip, 'fill= "black"');
        } else {
            g.kln_sol.malzeme.kalınlık = 0
        }
    }

    //-------------------------------------------------
    function sol_yan() {
        if (g.sol_yan.dahil) {
            //console.log("sol_yan.kalınlık" + g.sol_yan.malzeme.kalınlık)
            g.sol_yan.tip = 2
            g.sol_yan.x_1 = g.kln_sol.malzeme.kalınlık
            g.sol_yan.y_1 = g.sol_yan.üst_gir
            g.sol_yan.z_1 = g.sol_yan.arka_gir
            //g.sol_yan.renk = 'fill="linen"'
            if ((g.kasa_tipi === 1)) {
                g.sol_yan.en = g.derinlik - (g.sol_yan.arka_gir + g.sol_yan.ön_gir + g.üst.dik_köşe.sol_ön_gir) //g.üst.dik_köşe.sol_ön_gir
                g.sol_yan.boy = g.yükseklik - (g.sol_yan.üst_gir + g.sol_yan.alt_gir)
            } else if (g.kasa_tipi === 2) {
                g.sol_yan.en = g.derinlik - (g.sol_yan.arka_gir + g.sol_yan.ön_gir + g.üst.dik_köşe.sol_ön_gir)
                g.sol_yan.boy = g.yükseklik - (g.baza.en + g.alt.düz.malzeme.kalınlık + g.sol_yan.üst_gir + g.sol_yan.alt_gir)

            }
            //data_birleştir(g.sol_yan.adı, g.sol_yan.malzeme.adı, g.sol_yan.x_1, g.sol_yan.y_1, g.sol_yan.z_1, g.sol_yan.en, g.sol_yan.boy, g.sol_yan.malzeme.kalınlık, g.sol_yan.tip, 'fill= "linen"');
            //console.log("sol_yan" + g.sol_yan.adı, g.sol_yan.malzeme.adı, g.sol_yan.x_1, g.sol_yan.y_1, g.sol_yan.z_1, g.sol_yan.en, g.sol_yan.boy, g.sol_yan.malzeme.kalınlık, g.sol_yan.tip, 'fill= "linen"')
        } else {
            g.sol_yan.malzeme.kalınlık = 0
        }
    }

    function raf() {
        if (g.raf.dahil) {
            g.raf.tip = 3

            let toplam_raf_boşluk = 0
            for (var i = 1; i <= g.raf.adet; i++) {
                g.raf.x_1 = g.sol_yan.malzeme.kalınlık + g.raf.sol_gir + g.raf.sol_gir
                toplam_raf_boşluk = toplam_raf_boşluk + ((g.yükseklik - (g.üst.düz.malzeme.kalınlık + g.alt.düz.malzeme.kalınlık + g.baza.en)) / (g.raf.adet + 1))
                g.raf.y_1 = toplam_raf_boşluk
                g.raf.z_1 = g.raf.arka_gir
                g.raf.en = g.derinlik - (g.raf.arka_gir + g.raf.ön_gir)
                g.raf.boy = g.eni - (g.raf.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.raf.sol_gir + g.raf.sağ_gir)
                //data_birleştir(g.raf.adı, g.raf.malzeme.adı, g.raf.x_1, g.raf.y_1, g.raf.z_1, g.raf.en, g.raf.boy, g.raf.malzeme.kalınlık, g.raf.tip, 'fill= "linen"');
            }

        }
    }

    function arka_kusak() {
        if (g.ark_kş.dahil) {
            g.ark_kş.tip = 1
            g.ark_kş.x_1 = g.sol_yan.malzeme.kalınlık
            g.ark_kş.y_1 = (g.yükseklik - 20)
            g.ark_kş.z_1 = 0
            g.ark_kş.en = g.ark_kş.en - (g.ark_kş.üst_gir + g.ark_kş.alt_gir)
            g.ark_kş.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.ark_kş.sol_gir + g.ark_kş.sağ_gir)
            //data_birleştir(g.ark_kş.adı, g.ark_kş.malzeme.adı, g.ark_kş.x_1, g.ark_kş.y_1, g.ark_kş.z_1, g.ark_kş.boy, g.ark_kş.en, g.ark_kş.malzeme.kalınlık, g.ark_kş.tip, 'fill= "linen"');
        } else {
            g.ark_kş.malzeme.kalınlık = 0
        }
    }

    function sabit_raf() {
        if (g.sabit_raf.dahil) {
            g.sabit_raf.tip = 3
            g.sabit_raf.x_1 = g.sol_yan.malzeme.kalınlık
            g.sabit_raf.y_1 = (g.baza.en + g.ank_yükseklik)
            g.sabit_raf.z_1 = 0
            g.sabit_raf.en = g.derinlik - (g.sabit_raf.arka_gir + g.sabit_raf.ön_gir)
            g.sabit_raf.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık)
            //data_birleştir(g.sabit_raf.adı, g.sabit_raf.malzeme.adı, g.sabit_raf.x_1, g.sabit_raf.y_1, g.sabit_raf.z_1, g.sabit_raf.en, g.sabit_raf.boy, g.sabit_raf.malzeme.kalınlık, g.sabit_raf.tip, 'fill= "linen"');
        } else {

        }
    }

    //----arkalık-----
    function arkalik() {
        if (g.arkalık.dahil) {
            switch (g.arkalık.tipi) {
                case 1: // düz binili -arkalık fugası kenar ile arkalı arasındaki mesafe
                    g.arkalık.tip = 1
                    g.arkalık.x_1 = g.kln_sol.malzeme.kalınlık + g.arkalık.fugası + g.arkalık.sol_gir
                    g.arkalık.y_1 = g.arkalık.fugası + g.arkalık.üst_gir
                    g.arkalık.z_1 = g.arkalık.arka_gir
                    g.arkalık.en = g.eni - ((g.arkalık.fugası * 2) + g.arkalık.sol_gir + g.arkalık.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                    g.arkalık.boy = g.yükseklik - (g.baza.en + g.ank_yükseklik + (g.arkalık.fugası * 2) + g.arkalık.üst_gir + g.arkalık.alt_gir)
                    //data_birleştir(g.arkalık.adı, g.arkalık.malzeme.adı, g.arkalık.x_1, g.arkalık.y_1, g.arkalık.z_1, g.arkalık.en, g.arkalık.boy, g.arkalık.malzeme.kalınlık, g.arkalık.tip, 'fill= "none"');

                    break;
                case 2:

                    break;
                case 3:

                    break;
                case 4:

                    break;
                case 5:

                    break;
                case 6:

                    break;
                case 7:

                    break;

                default:
                    break;
            }
        } else {
            g.arkalık.malzeme.kalınlık = 0
        }
    }

    function alt() {

        switch (g.kasa_tipi) {
            case 1:
                if (g.alt.düz.dahil) {
                    g.alt.düz.adı = "alt düz"
                    g.alt.düz.tip = 3
                    g.alt.düz.renk = 'fill="green"'
                    g.alt.düz.x_1 = g.sol_yan.malzeme.kalınlık + g.alt.düz.sol_gir
                    g.alt.düz.y_1 = (g.yükseklik - (g.baza.en + g.alt.düz.malzeme.kalınlık))
                    g.alt.düz.z_1 = g.alt.düz.arka_gir
                    g.alt.düz.en = g.derinlik - (g.alt.düz.arka_gir + g.alt.düz.ön_gir)
                    g.alt.düz.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.alt.düz.sol_gir + g.alt.düz.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                }
                if (g.alt.dik_köşe.dahil) {
                    console.log("alt köşe uğradı")
                    g.alt.dik_köşe.adı = "köşe alt"
                    g.alt.dik_köşe.tip = 3
                    g.alt.dik_köşe.renk = 'fill="green"'
                    g.alt.dik_köşe.x_1 = g.sol_yan.malzeme.kalınlık + g.alt.dik_köşe.sol_gir
                    g.alt.dik_köşe.y_1 = (g.yükseklik - (g.baza.en + g.alt.dik_köşe.malzeme.kalınlık))
                    g.alt.dik_köşe.z_1 = g.alt.dik_köşe.arka_gir
                    g.alt.dik_köşe.en = g.derinlik - (g.alt.dik_köşe.arka_gir + g.alt.dik_köşe.ön_gir)
                    g.alt.dik_köşe.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.alt.dik_köşe.sol_gir + g.alt.dik_köşe.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                }
                break;
            case 2:
                if (g.alt.düz.dahil) {
                    g.alt.düz.adı = "alt düz"
                    g.alt.düz.tip = 3
                    g.alt.düz.renk = 'fill="green"'
                    g.alt.düz.x_1 = g.sol_yan.malzeme.kalınlık + g.alt.düz.sol_gir
                    g.alt.düz.y_1 = (g.yükseklik - (g.baza.en + g.alt.düz.malzeme.kalınlık))
                    g.alt.düz.z_1 = g.alt.düz.arka_gir
                    g.alt.düz.en = g.derinlik - (g.alt.düz.arka_gir + g.alt.düz.ön_gir)
                    g.alt.düz.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.alt.düz.sol_gir + g.alt.düz.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                    //data_birleştir(g.üst.adı, g.üst.malzeme.adı, g.üst.x_1, g.üst.y_1, g.üst.z_1, g.üst.en, g.üst.boy, g.üst.malzeme.kalınlık, g.üst.tip, 'fill= "linen"');

                }
                if (g.alt.dik_köşe.dahil) {
                    console.log("alt köşe uğradı")
                    g.alt.dik_köşe.adı = "köşe alt"
                    g.alt.dik_köşe.tip = 3
                    g.alt.dik_köşe.renk = 'fill="green"'
                    g.alt.dik_köşe.x_1 = g.sol_yan.malzeme.kalınlık + g.alt.dik_köşe.sol_gir
                    g.alt.dik_köşe.y_1 = (g.yükseklik - (g.baza.en + g.alt.dik_köşe.malzeme.kalınlık))
                    g.alt.dik_köşe.z_1 = g.alt.dik_köşe.arka_gir
                    g.alt.dik_köşe.en = g.derinlik - (g.alt.dik_köşe.arka_gir + g.alt.dik_köşe.ön_gir)
                    g.alt.dik_köşe.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.alt.dik_köşe.sol_gir + g.alt.dik_köşe.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                }

                break;
            default:
                break;
        }
        /*
                if (g.alt.dahil) {
                    g.alt.tip = 3
                    g.alt.y_1 = (g.yükseklik - (g.baza.en + g.alt.malzeme.kalınlık))
                    g.alt.z_1 = 0 + g.alt.arka_gir
                    if (g.kasa_tipi === 1) {
                        if (g.üst.dik_köşe.dahil) {
                            console.log("üst köşe uğradı")
                            g.alt.adı = "köşe üst"
                            g.alt.tip = 3
                            g.alt.renk = 'fill="green"'
                            g.alt.x_1 = g.sol_yan.malzeme.kalınlık + g.üst.sol_gir
                            g.alt.y_1 = g.üst.üst_gir
                            g.alt.z_1 = g.üst.arka_gir
                            g.alt.en = g.derinlik - (g.üst.arka_gir + g.üst.ön_gir)
                            g.alt.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.üst.sol_gir + g.üst.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                        } else {
                            g.alt.x_1 = g.sol_yan.malzeme.kalınlık + g.alt.sol_gir
                            g.alt.en = g.derinlik - (g.alt.ön_gir + g.alt.arka_gir)
                            g.alt.boy = g.eni - (g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık + g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.alt.sol_gir + g.alt.sağ_gir)
                        }

                    } else if (g.kasa_tipi === 2) {
                        if (g.üst.dik_köşe.dahil) {
                            console.log("üst köşe uğradı")
                            g.alt.adı = "köşe üst"
                            g.alt.tip = 3
                            g.alt.renk = 'fill="green"'
                            g.alt.x_1 = g.sol_yan.malzeme.kalınlık + g.üst.sol_gir
                            g.alt.y_1 = g.üst.üst_gir
                            g.alt.z_1 = g.üst.arka_gir
                            g.alt.en = g.derinlik - (g.üst.arka_gir + g.üst.ön_gir)
                            g.alt.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.üst.sol_gir + g.üst.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                        } else {
                            g.alt.x_1 = g.alt.sol_gir
                            g.alt.en = g.derinlik - (g.alt.ön_gir + g.alt.arka_gir)
                            g.alt.boy = g.eni - (g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık + g.alt.sol_gir + g.alt.sağ_gir)
                        }

                    }
                    //**	data_birleştir(g.alt.adı, g.alt.malzeme.adı, g.alt.x_1, g.alt.y_1, g.alt.z_1, g.alt.en, g.alt.boy, g.alt.malzeme.kalınlık, g.alt.tip, 'fill= "linen"');
                } else {
                    g.alt.malzeme.kalınlık = 0
                } */
    }

    function cekmece_kutusu() {
        //-------çekmece kutusu çizimleri-----------
        //2 eşit çekmece-
        let iç_yüksekliği = g.yükseklik - (g.çk[0].alt_gir + g.üst.düz.malzeme.kalınlık + g.alt.düz.malzeme.kalınlık + g.baza.en)
        if (g.çekmece_modül_tip === 2) {
            g.çk[0].y_1 = g.yükseklik - (g.baza.en + g.çk[0].alt_gir + g.alt.düz.malzeme.kalınlık + g.çk[0].yükseklik)
            g.çk[1].y_1 = g.yükseklik - (g.baza.en + g.alt.düz.malzeme.kalınlık + g.çk[1].alt_gir + g.çk[1].yükseklik + (iç_yüksekliği / 2))
            g.çk[0].kapak.boy = ((g.yükseklik - (g.üst_bşlk + g.baza.en + g.kapak_arası)) / 2)
            g.çk[1].kapak.boy = g.çk[0].kapak.boy
            g.çk[0].kapak.en = g.eni - (g.kapak_arası + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
            g.çk[1].kapak.en = g.çk[0].kapak.en
            g.çk[0].kapak.y_1 = g.yükseklik - (g.çk[0].kapak.alt_gir + g.baza.en + g.çk[0].kapak.boy)
            g.çk[1].kapak.y_1 = (g.çk[0].kapak.üst_gir + g.üst_bşlk)

        }
        if (g.çekmece_modül_tip === 3) {

            g.çk[0].kapak.boy = ((g.yükseklik - (g.üst_bşlk + g.baza.en + g.kapak_arası)) / 2)
            g.çk[1].kapak.boy = (g.çk[0].kapak.boy - g.kapak_arası) * 0.5
            g.çk[2].kapak.boy = g.çk[1].kapak.boy
            g.çk[0].kapak.en = g.eni - (g.kapak_arası + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
            g.çk[1].kapak.en = g.çk[0].kapak.en
            g.çk[2].kapak.en = g.çk[0].kapak.en

            g.çk[0].kapak.y_1 = g.yükseklik - (g.çk[0].kapak.alt_gir + g.baza.en + g.çk[0].kapak.boy)
            g.çk[1].kapak.y_1 = g.çk[0].kapak.y_1 - (g.kapak_arası + g.çk[1].kapak.boy)
            g.çk[2].kapak.y_1 = g.çk[1].kapak.y_1 - (g.kapak_arası + g.çk[2].kapak.boy)
            g.çk[0].y_1 = g.yükseklik - (g.baza.en + g.çk[0].alt_gir + g.alt.düz.malzeme.kalınlık + g.çk[0].yükseklik)
            g.çk[1].y_1 = g.yükseklik - (g.baza.en + g.alt.düz.malzeme.kalınlık + g.çk[1].alt_gir + g.çk[1].yükseklik + (iç_yüksekliği * 0.5))
            g.çk[2].y_1 = g.yükseklik - (g.baza.en + g.alt.düz.malzeme.kalınlık + g.çk[1].alt_gir + g.çk[2].yükseklik + (iç_yüksekliği * 0.75))

        }
        if (g.çekmece_modül_tip === 4) {
            g.çk[0].kapak.boy = (g.yükseklik - (g.üst_bşlk + g.baza.en + (g.kapak_arası * 2))) / 3
            g.çk[1].kapak.boy = g.çk[0].kapak.boy
            g.çk[2].kapak.boy = g.çk[0].kapak.boy
            g.çk[0].kapak.en = g.eni - (g.kapak_arası + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
            g.çk[1].kapak.en = g.eni - (g.kapak_arası + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
            g.çk[2].kapak.en = g.eni - (g.kapak_arası + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
            g.çk[0].kapak.y_1 = g.yükseklik - (g.çk[0].kapak.alt_gir + g.baza.en + g.çk[0].kapak.boy)
            g.çk[1].kapak.y_1 = g.çk[0].kapak.y_1 - (g.kapak_arası + g.çk[1].kapak.boy)
            g.çk[2].kapak.y_1 = g.çk[1].kapak.y_1 - (g.kapak_arası + g.çk[2].kapak.boy)
            g.çk[0].y_1 = g.yükseklik - (g.baza.en + g.çk[0].alt_gir + g.alt.düz.malzeme.kalınlık + g.çk[0].yükseklik)
            g.çk[1].y_1 = g.yükseklik - (g.baza.en + g.alt.düz.malzeme.kalınlık + g.çk[1].alt_gir + g.çk[1].yükseklik + (iç_yüksekliği * 0.33))
            g.çk[2].y_1 = g.yükseklik - (g.baza.en + g.alt.düz.malzeme.kalınlık + g.çk[2].alt_gir + g.çk[2].yükseklik + (iç_yüksekliği * 0.66))

        }
        if (g.çekmece_modül_tip === 5) {
            g.çk[0].kapak.boy = (g.yükseklik - (g.üst_bşlk + g.baza.en + (g.kapak_arası * 2))) / 4
            g.çk[1].kapak.boy = g.çk[0].kapak.boy
            g.çk[2].kapak.boy = g.çk[0].kapak.boy
            g.çk[3].kapak.boy = g.çk[0].kapak.boy
            g.çk[0].kapak.en = g.eni - (g.kapak_arası + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
            g.çk[1].kapak.en = g.eni - (g.kapak_arası + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
            g.çk[2].kapak.en = g.eni - (g.kapak_arası + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
            g.çk[3].kapak.en = g.eni - (g.kapak_arası + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
            g.çk[0].kapak.y_1 = g.yükseklik - (g.çk[0].kapak.alt_gir + g.baza.en + g.çk[0].kapak.boy)
            g.çk[1].kapak.y_1 = g.çk[0].kapak.y_1 - (g.kapak_arası + g.çk[1].kapak.boy)
            g.çk[2].kapak.y_1 = g.çk[1].kapak.y_1 - (g.kapak_arası + g.çk[2].kapak.boy)
            g.çk[3].kapak.y_1 = g.çk[2].kapak.y_1 - (g.kapak_arası + g.çk[3].kapak.boy)
            g.çk[0].y_1 = g.yükseklik - (g.baza.en + g.çk[0].alt_gir + g.alt.düz.malzeme.kalınlık + g.çk[0].yükseklik)
            g.çk[1].y_1 = g.yükseklik - (g.baza.en + g.alt.düz.malzeme.kalınlık + g.çk[1].alt_gir + g.çk[1].yükseklik + (iç_yüksekliği * 0.25))
            g.çk[2].y_1 = g.yükseklik - (g.baza.en + g.alt.düz.malzeme.kalınlık + g.çk[2].alt_gir + g.çk[2].yükseklik + (iç_yüksekliği * 0.50))
            g.çk[3].y_1 = g.yükseklik - (g.baza.en + g.alt.düz.malzeme.kalınlık + g.çk[3].alt_gir + g.çk[3].yükseklik + (iç_yüksekliği * 0.75))
        }
        //--------
        for (var c = 0; c < g.çekmece_sys; c++) {
            if (g.çk[c].dahil) {

                console.log("çekmece kutusuna uğradı tip=1")

                switch (g.çk[c].tip) {
                    case 1: // bilyeli raya göre hesaplama
                        if (g.çk[c].sol_yan.dahil) {
                            g.çk[c].sol_yan.tip = 2
                            g.çk[c].sol_yan.x_1 = g.kln_sol.malzeme.kalınlık + g.sol_yan.malzeme.kalınlık + g.çk[c].sol_gir
                            g.çk[c].sol_yan.y_1 = g.çk[c].y_1
                            g.çk[c].sol_yan.z_1 = (g.derinlik - g.çk[c].ön_gir + g.çk[c].arka_gir) - g.çk[c].derinlik
                            g.çk[c].sol_yan.en = g.çk[c].yükseklik
                            g.çk[c].sol_yan.boy = g.çk[c].derinlik

                            //data_birleştir(g.çk.sol_yan.adı, g.çk.sol_yan.malzeme.adı, g.çk.sol_yan.x_1, g.çk.sol_yan.y_1, g.çk.sol_yan.z_1, g.çk.sol_yan.boy, g.çk.sol_yan.en, g.çk.sol_yan.malzeme.kalınlık, g.çk.sol_yan.tip, 'fill= "blue"');

                        }
                        if (g.çk[c].sağ_yan.dahil) {

                            g.çk[c].sağ_yan.tip = 2
                            g.çk[c].sağ_yan.renk = 'fill="none"'
                            g.çk[c].sağ_yan.x_1 = g.eni - (g.kln_sağ.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.çk[c].sağ_gir + g.çk[c].sağ_yan.malzeme.kalınlık)
                            g.çk[c].sağ_yan.y_1 = g.çk[c].y_1
                            g.çk[c].sağ_yan.z_1 = (g.derinlik - g.çk[c].ön_gir + g.çk[c].arka_gir) - g.çk[c].derinlik
                            g.çk[c].sağ_yan.en = g.çk[c].yükseklik
                            g.çk[c].sağ_yan.boy = g.çk[c].derinlik
                            //data_birleştir(g.çk.sağ_yan.adı, g.çk.sağ_yan.malzeme.adı, g.çk.sağ_yan.x_1, g.çk.sağ_yan.y_1, g.çk.sağ_yan.z_1, g.çk.sağ_yan.boy, g.çk.sağ_yan.en, g.çk.sağ_yan.malzeme.kalınlık, g.çk.sağ_yan.tip, 'fill= "blue"');

                        }
                        if (g.çk[c].arka.dahil) {

                            g.çk[c].arka.tip = 1
                            g.çk[c].arka.renk = 'fill="none"'
                            g.çk[c].arka.x_1 = g.kln_sol.malzeme.kalınlık + g.sol_yan.malzeme.kalınlık + g.çk[c].sol_gir + g.çk[c].sol_yan.malzeme.kalınlık
                            g.çk[c].arka.y_1 = g.çk[c].y_1
                            g.çk[c].arka.z_1 = (g.derinlik - g.çk[c].ön_gir + g.çk[c].arka_gir) - g.çk[c].derinlik
                            g.çk[c].arka.en = g.çk[c].yükseklik
                            g.çk[c].arka.boy = g.eni - (g.kln_sol.malzeme.kalınlık + g.sol_yan.malzeme.kalınlık + g.çk[c].sol_gir + g.çk[c].sol_yan.malzeme.kalınlık +
                                g.kln_sağ.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.çk[c].sağ_gir + g.çk[c].sağ_yan.malzeme.kalınlık);
                            //data_birleştir(g.çk.arka.adı, g.çk.arka.malzeme.adı, g.çk.arka.x_1, g.çk.arka.y_1, g.çk.arka.z_1, g.çk.arka.boy, g.çk.arka.en, g.çk.arka.malzeme.kalınlık, g.çk.arka.tip, 'fill= "blue"');

                        }
                        if (g.çk[c].ön.dahil) {
                            g.çk[c].ön.tip = 1
                            g.çk[c].ön.renk = 'fill="none"'
                            g.çk[c].ön.x_1 = g.kln_sol.malzeme.kalınlık + g.sol_yan.malzeme.kalınlık + g.çk[c].sol_gir + g.çk[c].sol_yan.malzeme.kalınlık
                            g.çk[c].ön.y_1 = g.çk[c].y_1
                            g.çk[c].ön.z_1 = g.derinlik - g.çk[c].ön_gir
                            g.çk[c].ön.en = g.çk[c].yükseklik
                            g.çk[c].ön.boy = g.eni - (g.kln_sol.malzeme.kalınlık + g.sol_yan.malzeme.kalınlık + g.çk[c].sol_gir + g.çk[c].sol_yan.malzeme.kalınlık +
                                g.kln_sağ.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.çk[c].sağ_gir + g.çk[c].sağ_yan.malzeme.kalınlık);
                            //data_birleştir(g.çk.ön.adı, g.çk.ön.malzeme.adı, g.çk.ön.x_1, g.çk.ön.y_1, g.çk.ön.z_1, g.çk.ön.boy, g.çk.ön.en, g.çk.ön.malzeme.kalınlık, g.çk.ön.tip, 'fill= "blue"');

                        }
                        if (g.çk[c].kapak.dahil) {
                            g.çk[c].kapak.tip = 1
                            g.çk[c].kapak.renk = 'fill="none"'
                            g.çk[c].kapak.x_1 = g.çk[c].kapak.sol_gir + (g.kapak_arası / 2)
                            g.çk[c].kapak.z_1 = g.derinlik
                        }
                        break;
                    case 2: // bilyeli raya göre hesaplama
                        console.log("çekmece kutusuna uğradı tip=2")
                        if (g.çk[c].sol_yan.dahil) {
                            g.çk[c].sol_yan.tip = 2
                            g.çk[c].sol_yan.x_1 = g.kln_sol.malzeme.kalınlık + g.sol_yan.malzeme.kalınlık + g.çk[c].sol_gir
                            g.çk[c].sol_yan.y_1 = g.çk[c].y_1
                            g.çk[c].sol_yan.z_1 = (g.derinlik - g.çk[c].ön_gir + g.çk[c].arka_gir) - g.çk[c].derinlik
                            g.çk[c].sol_yan.en = g.çk[c].yükseklik
                            g.çk[c].sol_yan.boy = g.çk[c].derinlik
                            //data_birleştir(g.çk.sol_yan.adı, g.çk.sol_yan.malzeme.adı, g.çk.sol_yan.x_1, g.çk.sol_yan.y_1, g.çk.sol_yan.z_1, g.çk.sol_yan.boy, g.çk.sol_yan.en, g.çk.sol_yan.malzeme.kalınlık, g.çk.sol_yan.tip, 'fill= "blue"');

                        }
                        if (g.çk[c].sağ_yan.dahil) {

                            g.çk[c].sağ_yan.tip = 2
                            g.çk[c].sağ_yan.renk = 'fill="none"'
                            g.çk[c].sağ_yan.x_1 = g.eni - (g.kln_sağ.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.çk[c].sağ_gir + g.çk[c].sağ_yan.malzeme.kalınlık)
                            g.çk[c].sağ_yan.y_1 = g.çk[c].y_1
                            g.çk[c].sağ_yan.z_1 = (g.derinlik - g.çk[c].ön_gir + g.çk[c].arka_gir) - g.çk[c].derinlik
                            g.çk[c].sağ_yan.en = g.çk[c].yükseklik
                            g.çk[c].sağ_yan.boy = g.çk[c].derinlik
                            //data_birleştir(g.çk.sağ_yan.adı, g.çk.sağ_yan.malzeme.adı, g.çk.sağ_yan.x_1, g.çk.sağ_yan.y_1, g.çk.sağ_yan.z_1, g.çk.sağ_yan.boy, g.çk.sağ_yan.en, g.çk.sağ_yan.malzeme.kalınlık, g.çk.sağ_yan.tip, 'fill= "blue"');

                        }
                        if (g.çk[c].arka.dahil) {

                            g.çk[c].arka.tip = 1
                            g.çk[c].arka.renk = 'fill="none"'
                            g.çk[c].arka.x_1 = g.kln_sol.malzeme.kalınlık + g.sol_yan.malzeme.kalınlık + g.çk[c].sol_gir + g.çk[c].sol_yan.malzeme.kalınlık
                            g.çk[c].arka.y_1 = g.çk[c].y_1
                            g.çk[c].arka.z_1 = (g.derinlik - g.çk[c].ön_gir + g.çk[c].arka_gir) - g.çk[c].derinlik
                            g.çk[c].arka.en = g.çk[c].yükseklik
                            g.çk[c].arka.boy = g.eni - (g.kln_sol.malzeme.kalınlık + g.sol_yan.malzeme.kalınlık + g.çk[c].sol_gir + g.çk[c].sol_yan.malzeme.kalınlık +
                                g.kln_sağ.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.çk[c].sağ_gir + g.çk[c].sağ_yan.malzeme.kalınlık);
                            //data_birleştir(g.çk.arka.adı, g.çk.arka.malzeme.adı, g.çk.arka.x_1, g.çk.arka.y_1, g.çk.arka.z_1, g.çk.arka.boy, g.çk.arka.en, g.çk.arka.malzeme.kalınlık, g.çk.arka.tip, 'fill= "blue"');

                        }
                        if (g.çk[c].ön.dahil) {
                            g.çk[c].ön.tip = 1
                            g.çk[c].ön.renk = 'fill="none"'
                            g.çk[c].ön.x_1 = g.kln_sol.malzeme.kalınlık + g.sol_yan.malzeme.kalınlık + g.çk[c].sol_gir + g.çk[c].sol_yan.malzeme.kalınlık
                            g.çk[c].ön.y_1 = g.çk[c].y_1
                            g.çk[c].ön.z_1 = g.derinlik - g.çk[c].ön_gir
                            g.çk[c].ön.en = g.çk[c].yükseklik
                            g.çk[c].ön.boy = g.eni - (g.kln_sol.malzeme.kalınlık + g.sol_yan.malzeme.kalınlık + g.çk[c].sol_gir + g.çk[c].sol_yan.malzeme.kalınlık +
                                g.kln_sağ.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.çk[c].sağ_gir + g.çk[c].sağ_yan.malzeme.kalınlık);
                            //data_birleştir(g.çk.ön.adı, g.çk.ön.malzeme.adı, g.çk.ön.x_1, g.çk.ön.y_1, g.çk.ön.z_1, g.çk.ön.boy, g.çk.ön.en, g.çk.ön.malzeme.kalınlık, g.çk.ön.tip, 'fill= "blue"');

                        }
                        if (g.çk[c].kapak.dahil) {
                            g.çk[c].kapak.tip = 1
                            g.çk[c].kapak.renk = 'fill="none"'
                            g.çk[c].kapak.x_1 = g.çk[c].kapak.sol_gir + (g.kapak_arası / 2)
                            g.çk[c].kapak.z_1 = g.derinlik
                        }
                        break;
                    default:
                        break;
                }
            }
        }

    }

    function ust() {

        switch (g.kasa_tipi) {
            case 1:
                console.log("g.üst.düz.dahil= " + g.üst.düz.dahil)
                if (g.üst.ön_kayıt.dahil) {
                    g.üst.ön_kayıt.tip = 3
                    g.üst.ön_kayıt.renk = 'fill="green"'
                    g.üst.ön_kayıt.x_1 = g.sol_yan.malzeme.kalınlık + g.üst.ön_kayıt.sol_gir + g.kln_sol.malzeme.kalınlık
                    g.üst.ön_kayıt.y_1 = g.üst.ön_kayıt.üst_gir
                    g.üst.ön_kayıt.z_1 = g.derinlik - (g.üst.ön_kayıt.ön_gir + g.üst.ön_kayıt.en)
                    g.üst.ön_kayıt.en = g.üst.ön_kayıt.en
                    g.üst.ön_kayıt.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.üst.ön_kayıt.sol_gir + g.üst.ön_kayıt.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                    //data_birleştir(g.üst.ön_kayıt.adı, g.üst.ön_kayıt.malzeme.adı, g.üst.ön_kayıt.x_1, g.üst.ön_kayıt.y_1, g.üst.ön_kayıt.z_1, g.üst.ön_kayıt.en, g.üst.ön_kayıt.boy, g.üst.ön_kayıt.malzeme.kalınlık, g.üst.ön_kayıt.tip, 'fill= "linen"');

                }
                if (g.üst.arka_kayıt.dahil) {
                    g.üst.arka_kayıt.tip = 3
                    g.üst.arka_kayıt.renk = 'fill="green"'
                    g.üst.arka_kayıt.x_1 = g.sol_yan.malzeme.kalınlık + g.üst.arka_kayıt.sol_gir + g.kln_sol.malzeme.kalınlık
                    g.üst.arka_kayıt.y_1 = g.üst.arka_kayıt.üst_gir
                    g.üst.arka_kayıt.z_1 = g.üst.arka_kayıt.arka_gir
                    g.üst.arka_kayıt.en = g.üst.arka_kayıt.en - (g.üst.arka_kayıt.arka_gir + g.üst.arka_kayıt.ön_gir)
                    g.üst.arka_kayıt.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.üst.arka_kayıt.sol_gir + g.üst.arka_kayıt.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                    //data_birleştir(g.üst.arka_kayıt.adı, g.üst.arka_kayıt.malzeme.adı, g.üst.arka_kayıt.x_1, g.üst.arka_kayıt.y_1, g.üst.arka_kayıt.z_1, g.üst.arka_kayıt.en, g.üst.arka_kayıt.boy, g.üst.arka_kayıt.malzeme.kalınlık, g.üst.arka_kayıt.tip, 'fill= "linen"');

                }
                if (g.üst.düz.dahil) {
                    g.üst.düz.adı = "üst düz"
                    g.üst.düz.tip = 3
                    g.üst.düz.renk = 'fill="green"'
                    g.üst.düz.x_1 = g.sol_yan.malzeme.kalınlık + g.üst.düz.sol_gir
                    g.üst.düz.y_1 = g.üst.düz.üst_gir
                    g.üst.düz.z_1 = g.üst.düz.arka_gir
                    g.üst.düz.en = g.derinlik - (g.üst.düz.arka_gir + g.üst.düz.ön_gir)
                    g.üst.düz.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.üst.düz.sol_gir + g.üst.düz.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                    //data_birleştir(g.üst.adı, g.üst.malzeme.adı, g.üst.x_1, g.üst.y_1, g.üst.z_1, g.üst.en, g.üst.boy, g.üst.malzeme.kalınlık, g.üst.tip, 'fill= "linen"');

                }
                if (g.üst.dik_köşe.dahil) {
                    console.log("üst köşe uğradı")
                    g.üst.dik_köşe.adı = "köşe üst"
                    g.üst.dik_köşe.tip = 3
                    g.üst.dik_köşe.renk = 'fill="green"'
                    g.üst.dik_köşe.x_1 = g.sol_yan.malzeme.kalınlık + g.üst.dik_köşe.sol_gir
                    g.üst.dik_köşe.y_1 = g.üst.dik_köşe.üst_gir
                    g.üst.dik_köşe.z_1 = g.üst.dik_köşe.arka_gir
                    g.üst.dik_köşe.en = g.derinlik - (g.üst.dik_köşe.arka_gir + g.üst.dik_köşe.ön_gir)
                    g.üst.dik_köşe.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.üst.dik_köşe.sol_gir + g.üst.dik_köşe.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                }
                break;
            case 2:
                console.log("g.üst.düz.dahil= " + g.üst.düz.dahil)
                if (g.üst.ön_kayıt.dahil) {
                    g.üst.ön_kayıt.tip = 3
                    g.üst.ön_kayıt.renk = 'fill="green"'
                    g.üst.ön_kayıt.x_1 = g.sol_yan.malzeme.kalınlık + g.üst.ön_kayıt.sol_gir + g.kln_sol.malzeme.kalınlık
                    g.üst.ön_kayıt.y_1 = g.üst.ön_kayıt.üst_gir
                    g.üst.ön_kayıt.z_1 = g.derinlik - (g.üst.ön_kayıt.ön_gir + g.üst.ön_kayıt.en)
                    g.üst.ön_kayıt.en = g.üst.ön_kayıt.en
                    g.üst.ön_kayıt.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.üst.ön_kayıt.sol_gir + g.üst.ön_kayıt.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                    //data_birleştir(g.üst.ön_kayıt.adı, g.üst.ön_kayıt.malzeme.adı, g.üst.ön_kayıt.x_1, g.üst.ön_kayıt.y_1, g.üst.ön_kayıt.z_1, g.üst.ön_kayıt.en, g.üst.ön_kayıt.boy, g.üst.ön_kayıt.malzeme.kalınlık, g.üst.ön_kayıt.tip, 'fill= "linen"');

                }
                if (g.üst.arka_kayıt.dahil) {
                    g.üst.arka_kayıt.tip = 3
                    g.üst.arka_kayıt.renk = 'fill="green"'
                    g.üst.arka_kayıt.x_1 = g.sol_yan.malzeme.kalınlık + g.üst.arka_kayıt.sol_gir + g.kln_sol.malzeme.kalınlık
                    g.üst.arka_kayıt.y_1 = g.üst.arka_kayıt.üst_gir
                    g.üst.arka_kayıt.z_1 = g.üst.arka_kayıt.arka_gir
                    g.üst.arka_kayıt.en = g.üst.arka_kayıt.en - (g.üst.arka_kayıt.arka_gir + g.üst.arka_kayıt.ön_gir)
                    g.üst.arka_kayıt.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.üst.arka_kayıt.sol_gir + g.üst.arka_kayıt.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                    //data_birleştir(g.üst.arka_kayıt.adı, g.üst.arka_kayıt.malzeme.adı, g.üst.arka_kayıt.x_1, g.üst.arka_kayıt.y_1, g.üst.arka_kayıt.z_1, g.üst.arka_kayıt.en, g.üst.arka_kayıt.boy, g.üst.arka_kayıt.malzeme.kalınlık, g.üst.arka_kayıt.tip, 'fill= "linen"');

                }
                if (g.üst.düz.dahil) {
                    g.üst.düz.adı = "üst düz"
                    g.üst.düz.tip = 3
                    g.üst.düz.renk = 'fill="green"'
                    g.üst.düz.x_1 = g.sol_yan.malzeme.kalınlık + g.üst.düz.sol_gir
                    g.üst.düz.y_1 = g.üst.düz.üst_gir
                    g.üst.düz.z_1 = g.üst.düz.arka_gir
                    g.üst.düz.en = g.derinlik - (g.üst.düz.arka_gir + g.üst.düz.ön_gir)
                    g.üst.düz.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.üst.düz.sol_gir + g.üst.düz.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                    //data_birleştir(g.üst.adı, g.üst.malzeme.adı, g.üst.x_1, g.üst.y_1, g.üst.z_1, g.üst.en, g.üst.boy, g.üst.malzeme.kalınlık, g.üst.tip, 'fill= "linen"');

                }
                if (g.üst.dik_köşe.dahil) {
                    console.log("üst köşe uğradı")
                    g.üst.dik_köşe.adı = "köşe üst"
                    g.üst.dik_köşe.tip = 3
                    g.üst.dik_köşe.renk = 'fill="green"'
                    g.üst.dik_köşe.x_1 = g.sol_yan.malzeme.kalınlık + g.üst.dik_köşe.sol_gir
                    g.üst.dik_köşe.y_1 = g.üst.dik_köşe.üst_gir
                    g.üst.dik_köşe.z_1 = g.üst.dik_köşe.arka_gir
                    g.üst.dik_köşe.en = g.derinlik - (g.üst.dik_köşe.arka_gir + g.üst.dik_köşe.ön_gir)
                    g.üst.dik_köşe.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık + g.üst.dik_köşe.sol_gir + g.üst.dik_köşe.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                }

                break;
            case 3:

                break;
            case 4:

                break;
            default:
                break;
        }

    }

    function sag_kapama() {

        if (g.kln_sağ.dahil) {
            g.kln_sağ.adı = "sağ_kapama"
            g.kln_sağ.tip = 2
            g.kln_sağ.x_1 = (g.eni - g.kln_sağ.malzeme.kalınlık)
            g.kln_sağ.y_1 = 0
            g.kln_sağ.z_1 = 0
            g.kln_sağ.renk = 'fill="linen"'
            if (g.kasa_tipi === 1) {
                g.kln_sağ.en = g.derinlik - (g.kln_sağ.ön_gir + g.kln_sağ.arka_gir)
                g.kln_sağ.boy = g.yükseklik - (g.kln_sağ.alt_gir + g.kln_sağ.üst_gir) // g.baza g.bazada eklendi
            } else if (g.kasa_tipi === 2) {
                g.kln_sağ.en = g.derinlik - (g.kln_sağ.ön_gir + g.kln_sağ.arka_gir)
                g.kln_sağ.boy = g.yükseklik - (g.kln_sağ.alt_gir + g.kln_sağ.üst_gir)
            }
            //data_birleştir(g.kln_sağ.adı, g.kln_sağ.malzeme.adı, g.kln_sağ.x_1, g.kln_sağ.y_1, g.kln_sağ.z_1, g.kln_sağ.en, g.kln_sağ.boy, g.kln_sağ.malzeme.kalınlık, g.kln_sağ.tip, 'fill= "linen"');

        } else {
            g.kln_sağ.malzeme.kalınlık = 0
        }
    }

    function sag_yan() {
        //---------------------------------------------
        if (g.sağ_yan.dahil) {
            g.sağ_yan.adı = "sağ_yan"

            if (g.üst.dik_köşe.dahil) {
                g.sağ_yan.tip = 1
                g.sağ_yan.z_1 = g.derinlik - g.sağ_yan.arka_gir
                g.sağ_yan.x_1 = (g.üst.dik_köşe.sol_ön_gir)
                g.sağ_yan.y_1 = g.sağ_yan.üst_gir
            } else {
                g.sağ_yan.tip = 2
                g.sağ_yan.z_1 = g.sağ_yan.arka_gir
                g.sağ_yan.x_1 = (g.eni - (g.sağ_yan.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık))
                g.sağ_yan.y_1 = g.sağ_yan.üst_gir
            }
            g.sağ_yan.renk = 'fill="green"'
            //g.sağ_yan.x_1 = (g.eni - (g.sağ_yan.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık))

            if (g.kasa_tipi === 1) {
                g.sağ_yan.en = g.derinlik - (g.sağ_yan.ön_gir + g.sağ_yan.arka_gir + g.üst.dik_köşe.sol_ön_gir)
                g.sağ_yan.boy = g.yükseklik - (g.sağ_yan.üst_gir + g.sağ_yan.alt_gir)

            } else if (g.kasa_tipi === 2) {
                g.sağ_yan.en = g.derinlik - (g.sağ_yan.ön_gir + g.sağ_yan.arka_gir + g.üst.dik_köşe.sol_ön_gir)
                g.sağ_yan.boy = g.yükseklik - (g.baza.en + g.alt.düz.malzeme.kalınlık + g.sağ_yan.üst_gir + g.sağ_yan.alt_gir)
            }
            //data_birleştir(g.sağ_yan.adı, g.sağ_yan.malzeme.adı, g.sağ_yan.x_1, g.sağ_yan.y_1, g.sağ_yan.z_1, g.sağ_yan.en, g.sağ_yan.boy, g.sağ_yan.malzeme.kalınlık, g.sağ_yan.tip, 'fill= "linen"');

        } else {
            g.sağ_yan.malzemkalınlık = 0
        }
    }

    /*
        function cekmece() {
            if (g.çk[0].kapak.dahil) {
                g.çk[0].kapak.tip = 1

                g.çk[0].kapak.renk = 'fill="green"'
                let topla = g.ank_yükseklik
                g.çk[0].kapak.x_1 = g.kapak_arası / 2
                g.çk[0].kapak.z_1 = g.derinlik
                let fırın_svg = ""
                g.çk[0].kapak.en = g.eni - g.kapak_arası
                g.çk[0].kapak.boy = (g.yükseklik - (g.baza.en + g.ank_yükseklik + g.üst_bşlk + ((g.çk[0].kapak.adet - 1) * g.kapak_arası))) / g.çk[0].kapak.adet;

                for (var i = 1; i <= g.çk[0].kapak.adet; i++) {
                    g.çk[0].kapak.adı = i + ". çekmece"
                    g.çk[0].kapak.y_1 = topla
                    topla = topla + g.çk[0].kapak.boy + g.kapak_arası
                    //data_birleştir(g.çk.kapak.adı, g.çk.kapak.malzeme.adı, g.çk.kapak.x_1, g.çk.kapak.y_1, g.çk.kapak.z_1, g.çk.kapak.en, g.çk.kapak.boy, g.çk.kapak.malzeme.kalınlık, g.çk.kapak.tip, 'fill= "blue"');

                }

            }

        }
    */
    function baza() {
        if (g.baza.dahil) {
            g.baza.adı = "baza"
            g.baza.tip = 1
            g.baza.renk = 'fill="green"'
            g.baza.y_1 = (g.yükseklik - g.baza.en)
            g.baza.z_1 = g.derinlik - 5

            switch (g.kasa_tipi) {
                case 1:

                    g.baza.x_1 = g.sol_yan.malzeme.kalınlık
                    g.baza.en = g.baza.en
                    g.baza.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık)
                    break;
                case 2:
                    g.baza.x_1 = 0
                    g.baza.en = g.baza.en
                    g.baza.boy = g.eni

                    break;
                case 3:
                    g.baza.x_1 = g.sol_yan.malzeme.kalınlık
                    g.baza.en = g.baza.en
                    g.baza.boy = g.eni - (g.sol_yan.malzeme.kalınlık + g.sağ_yan.malzeme.kalınlık)
                    break;
                default:
                    break;
            }
            //data_birleştir(g.baza.adı, g.baza.malzeme.adı, g.baza.x_1, g.baza.y_1, g.baza.z_1, g.baza.boy, g.baza.en, g.baza.malzeme.kalınlık, g.baza.tip, 'fill= "red"');
        } else {

        }
    }

    function kapak() {
        if (g.kapak.dahil && g.kapak2.dahil === false && g.kapak.yönü === "dikey") {
            if (g.kapak.cam_kodu === 1) {
                g.kapak.adı = "1 kapak camlı"
                g.kapak.tip = 4
                g.kapak.renk = 'fill="green"'
                g.kapak.x_1 = g.kln_sol.malzeme.kalınlık + (g.kapak_arası / 2) + g.kapak.sol_gir
                g.kapak.y_1 = g.üst_bşlk + g.kapak.üst_gir
                g.kapak.z_1 = g.derinlik
                g.kapak.en = g.eni - (g.kapak_arası + g.kapak.sol_gir + g.kapak.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                g.kapak.boy = g.yükseklik - (g.baza.en + g.ank_yükseklik + g.üst_bşlk + g.kapak.üst_gir + g.kapak.alt_gir)
                //data_birleştir(g.kapak.adı, g.kapak.malzeme.adı, g.kapak.x_1, g.kapak.y_1, g.kapak.z_1, g.kapak.en, g.kapak.boy, g.kapak.malzeme.kalınlık, g.kapak.tip, g.kapak.renk);
            } else if (g.kapak.cam_kodu === 0) {
                g.kapak.adı = "1 kapak "
                g.kapak.tip = 1
                g.kapak.renk = 'fill="green"'
                g.kapak.x_1 = g.kln_sol.malzeme.kalınlık + (g.kapak_arası / 2) + g.kapak.sol_gir
                g.kapak.y_1 = g.üst_bşlk + g.kapak.üst_gir
                g.kapak.z_1 = g.derinlik
                g.kapak.en = g.eni - (g.kapak_arası + g.kapak.sol_gir + g.kapak.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                g.kapak.boy = g.yükseklik - (g.baza.en + g.ank_yükseklik + g.üst_bşlk + g.kapak.üst_gir + g.kapak.alt_gir)
                //data_birleştir(g.kapak.adı, g.kapak.malzeme.adı, g.kapak.x_1, g.kapak.y_1, g.kapak.z_1, g.kapak.en, g.kapak.boy, g.kapak.malzeme.kalınlık, g.kapak.tip, g.kapak.renk);
            }
        }
        if ((g.kapak.dahil && g.kapak2.dahil && g.kapak.yönü === "dikey")) {
            //console.log("uğradı dikey")
            if (g.kapak.cam_kodu === 1) {
                g.kapak.adı = "1.kapak camlı"
                g.kapak.tip = 4
                g.kapak.renk = 'fill="green"'
                g.kapak.x_1 = (g.kapak_arası / 2) + g.kln_sol.malzeme.kalınlık + g.kapak.sol_gir
                g.kapak.y_1 = g.üst_bşlk + g.kapak.üst_gir
                g.kapak.z_1 = g.derinlik
                g.kapak.en = (g.eni - (g.kapak_arası + g.kapak.sol_gir + g.kapak.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)) / 2
                g.kapak.boy = g.yükseklik - (g.baza.en + g.ank_yükseklik + g.üst_bşlk + g.kapak.üst_gir + g.kapak.alt_gir)
                //data_birleştir(g.kapak.adı, g.kapak.malzeme.adı, g.kapak.x_1, g.kapak.y_1, g.kapak.z_1, g.kapak.en, g.kapak.boy, g.kapak.malzeme.kalınlık, g.kapak.tip, g.kapak.renk);
            } else if (g.kapak.cam_kodu === 0) {
                g.kapak.adı = "1.kapak "
                g.kapak.tip = 1
                g.kapak.renk = 'fill="green"'
                g.kapak.x_1 = (g.kapak_arası / 2) + g.kln_sol.malzeme.kalınlık + g.kapak.sol_gir
                g.kapak.y_1 = g.üst_bşlk + g.kapak.üst_gir
                g.kapak.z_1 = g.derinlik
                g.kapak.en = (g.eni - (g.kapak_arası + g.kapak.sol_gir + g.kapak.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)) / 2
                g.kapak.boy = g.yükseklik - (g.baza.en + g.ank_yükseklik + g.üst_bşlk + g.kapak.üst_gir + g.kapak.alt_gir)
                //data_birleştir(g.kapak.adı, g.kapak.malzeme.adı, g.kapak.x_1, g.kapak.y_1, g.kapak.z_1, g.kapak.en, g.kapak.boy, g.kapak.malzeme.kalınlık, g.kapak.tip, g.kapak.renk);
            }
            if (g.kapak2.cam_kodu === 1) {
                g.kapak2.adı = "2.kapak camlı"
                g.kapak2.tip = 4
                g.kapak2.x_1 = g.kapak.en + (g.kapak_arası / 2)
                g.kapak2.y_1 = g.üst_bşlk
                g.kapak2.z_1 = g.derinlik
                g.kapak2.en = (g.eni - g.kapak_arası) / 2
                g.kapak2.boy = g.yükseklik - (g.baza.en + g.ank_yükseklik + g.üst_bşlk)
                //data_birleştir(g.kapak2.adı, g.kapak2.malzeme.adı, g.kapak2.x_1, g.kapak2.y_1, g.kapak2.z_1, g.kapak2.en, g.kapak2.boy, g.kapak2.malzeme.kalınlık, g.kapak2.tip, g.kapak.renk);
            } else if (g.kapak2.cam_kodu === 0) {
                g.kapak2.adı = "2.kapak"
                g.kapak2.tip = 1
                g.kapak2.x_1 = g.kapak.en + (g.kapak_arası / 2)
                g.kapak2.y_1 = g.üst_bşlk
                g.kapak2.z_1 = g.derinlik
                g.kapak2.en = (g.eni - g.kapak_arası) / 2
                g.kapak2.boy = g.yükseklik - (g.baza.en + g.ank_yükseklik + g.üst_bşlk)
                //data_birleştir(g.kapak2.adı, g.kapak2.malzeme.adı, g.kapak2.x_1, g.kapak2.y_1, g.kapak2.z_1, g.kapak2.en, g.kapak2.boy, g.kapak2.malzeme.kalınlık, g.kapak2.tip, g.kapak.renk);
            }
        }
        //----------------aventos----
        if (g.kapak.dahil && g.kapak2.dahil === false && g.kapak.yönü === "yatay") {
            if (g.kapak.cam_kodu === 1) {
                g.kapak.adı = "1 kapak camlı"
                g.kapak.tip = 4
                g.kapak.renk = 'fill="green"'
                g.kapak.x_1 = g.kln_sol.malzeme.kalınlık + (g.kapak_arası / 2) + g.kapak.sol_gir
                g.kapak.y_1 = g.üst_bşlk + g.kapak.üst_gir
                g.kapak.z_1 = g.derinlik
                g.kapak.en = g.eni - (g.kapak_arası + g.kapak.sol_gir + g.kapak.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                g.kapak.boy = g.yükseklik - (g.baza.en + g.ank_yükseklik + g.üst_bşlk + g.kapak.üst_gir + g.kapak.alt_gir)
                //data_birleştir(g.kapak.adı, g.kapak.malzeme.adı, g.kapak.x_1, g.kapak.y_1, g.kapak.z_1, g.kapak.en, g.kapak.boy, g.kapak.malzeme.kalınlık, g.kapak.tip, g.kapak.renk);

            } else if (g.kapak.cam_kodu === 0) {
                g.kapak.adı = "1 kapak camlı"
                g.kapak.tip = 1
                g.kapak.renk = 'fill="green"'
                g.kapak.x_1 = g.kln_sol.malzeme.kalınlık + (g.kapak_arası / 2) + g.kapak.sol_gir
                g.kapak.y_1 = g.üst_bşlk + g.kapak.üst_gir
                g.kapak.z_1 = g.derinlik
                g.kapak.en = g.eni - (g.kapak_arası + g.kapak.sol_gir + g.kapak.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                g.kapak.boy = g.yükseklik - (g.baza.en + g.ank_yükseklik + g.üst_bşlk + g.kapak.üst_gir + g.kapak.alt_gir)
                //data_birleştir(g.kapak.adı, g.kapak.malzeme.adı, g.kapak.x_1, g.kapak.y_1, g.kapak.z_1, g.kapak.en, g.kapak.boy, g.kapak.malzeme.kalınlık, g.kapak.tip, g.kapak.renk);

            }
        }
        if ((g.kapak.dahil && g.kapak2.dahil && g.kapak.yönü === "yatay")) {
            console.log("kapak uğrado")
            if (g.kapak.cam_kodu === 1) {
                g.kapak.adı = "1.kapak"
                g.kapak.tip = 4
                g.kapak.renk = 'fill="green"'
                g.kapak.x_1 = (g.kapak_arası / 2) + g.kln_sol.malzeme.kalınlık + g.kapak.sol_gir
                g.kapak.y_1 = g.üst_bşlk + g.kapak.üst_gir
                g.kapak.z_1 = g.derinlik
                g.kapak.en = g.eni - (g.kapak_arası + g.kapak.sol_gir + g.kapak.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                g.kapak.boy = (g.yükseklik - (g.baza.en + g.ank_yükseklik + g.üst_bşlk + g.kapak.üst_gir + g.kapak.alt_gir)) / 2
                //data_birleştir(g.kapak.adı, g.kapak.malzeme.adı, g.kapak.x_1, g.kapak.y_1, g.kapak.z_1, g.kapak.en, g.kapak.boy, g.kapak.malzeme.kalınlık, g.kapak.tip, g.kapak.renk);
            } else if (g.kapak.cam_kodu === 0) {
                g.kapak.adı = "1.kapak"
                g.kapak.tip = 1
                g.kapak.renk = 'fill="green"'
                g.kapak.x_1 = (g.kapak_arası / 2) + g.kln_sol.malzeme.kalınlık + g.kapak.sol_gir
                g.kapak.y_1 = g.üst_bşlk + g.kapak.üst_gir
                g.kapak.z_1 = g.derinlik
                g.kapak.en = g.eni - (g.kapak_arası + g.kapak.sol_gir + g.kapak.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                g.kapak.boy = (g.yükseklik - (g.baza.en + g.ank_yükseklik + g.üst_bşlk + g.kapak.üst_gir + g.kapak.alt_gir)) / 2
                //data_birleştir(g.kapak.adı, g.kapak.malzeme.adı, g.kapak.x_1, g.kapak.y_1, g.kapak.z_1, g.kapak.en, g.kapak.boy, g.kapak.malzeme.kalınlık, g.kapak.tip, g.kapak.renk);
            }
            if (g.kapak2.cam_kodu === 1) {
                g.kapak2.adı = "2.kapak"
                g.kapak2.tip = 4
                g.kapak2.x_1 = (g.kapak_arası / 2) + g.kln_sol.malzeme.kalınlık + g.kapak.sol_gir
                g.kapak2.y_1 = g.kapak.boy + (g.kapak_arası / 2)
                g.kapak2.z_1 = g.derinlik
                g.kapak2.en = g.eni - (g.kapak_arası + g.kapak.sol_gir + g.kapak.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                g.kapak2.boy = (g.yükseklik - (g.baza.en + g.ank_yükseklik + g.üst_bşlk + g.kapak.üst_gir + g.kapak.alt_gir)) / 2
                //data_birleştir(g.kapak2.adı, g.kapak2.malzeme.adı, g.kapak2.x_1, g.kapak2.y_1, g.kapak2.z_1, g.kapak2.en, g.kapak2.boy, g.kapak2.malzeme.kalınlık, g.kapak2.tip, g.kapak.renk);
            } else if (g.kapak2.cam_kodu === 0) {
                g.kapak2.adı = "2.kapak"
                g.kapak2.tip = 1
                g.kapak2.boy = (g.yükseklik - (g.baza.en + g.ank_yükseklik + g.üst_bşlk + g.kapak.üst_gir + g.kapak.alt_gir)) / 2
                g.kapak2.x_1 = (g.kapak_arası / 2) + g.kln_sol.malzeme.kalınlık + g.kapak.sol_gir
                g.kapak2.y_1 = g.kapak.boy + (g.kapak_arası / 2)
                g.kapak2.z_1 = g.derinlik
                g.kapak2.en = g.eni - (g.kapak_arası + g.kapak.sol_gir + g.kapak.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                //data_birleştir(g.kapak2.adı, g.kapak2.malzeme.adı, g.kapak2.x_1, g.kapak2.y_1, g.kapak2.z_1, g.kapak2.en, g.kapak2.boy, g.kapak2.malzeme.kalınlık, g.kapak2.tip, g.kapak.renk);
                console.log("cam_kodu=" + g.kapak.cam_kodu)
            }
            if (g.kapak.cam_kodu === 1) {
                g.kapak2.adı = "2.kapak camlı"
                g.kapak2.tip = 4
                g.kapak2.boy = (g.yükseklik - (g.baza.en + g.ank_yükseklik + g.üst_bşlk + g.kapak.üst_gir + g.kapak.alt_gir)) / 2
                g.kapak2.x_1 = (g.kapak_arası / 2) + g.kln_sol.malzeme.kalınlık + g.kapak.sol_gir
                g.kapak2.y_1 = g.kapak.boy + (g.kapak_arası / 2)
                g.kapak2.z_1 = g.derinlik
                g.kapak2.en = g.eni - (g.kapak_arası + g.kapak.sol_gir + g.kapak.sağ_gir + g.kln_sol.malzeme.kalınlık + g.kln_sağ.malzeme.kalınlık)
                //data_birleştir(g.kapak2.adı, g.kapak2.malzeme.adı, g.kapak2.x_1, g.kapak2.y_1, g.kapak2.z_1, g.kapak2.en, g.kapak2.boy, g.kapak2.malzeme.kalınlık, g.kapak2.tip, 'fill= "green"');
                console.log("cam_kodu=" + g.kapak.cam_kodu)
            }

        }

    }

    //---------------------------------
    switch (g.ank_tipi) {
        case 1:
            let sol_ankastre_mesafesi = 0
            let fırın_svg = rect_ön(1, g.x1 + sol_ankastre_mesafesi, g.y1, 60, 10, "white") +
                rect_ön(1, g.x1 + sol_ankastre_mesafesi, g.y1 + 10, 60, 50, "white") + rect_ön(1, g.x1 + 10 + sol_ankastre_mesafesi, g.y1 + 20, 40, 30, "black")
            g.d1_svg = g.d1_svg + fırın_svg
            break;
        case 2:
            sol_ankastre_mesafesi = 2
            let standart_bulaşık_makinası_svg = rect_ön(1, g.x1 + sol_ankastre_mesafesi, g.y1, 60, 10, "white") +
                rect_ön(1, g.x1 + sol_ankastre_mesafesi, g.y1 + 10, 60, 65, "white") + rect_ön(1, g.x1 + 5 + sol_ankastre_mesafesi, g.y1 + 15, 50, 55, "white")
            g.d1_svg = g.d1_svg + standart_bulaşık_makinası_svg
            break;
        case 3:
            sol_ankastre_mesafesi = 0
            let Yarım_ankastre_bulaşık_makinası_svg = rect_ön(1, g.x1 + sol_ankastre_mesafesi, g.y1, 60, 10, "white") +
                rect_ön(1, g.x1 + sol_ankastre_mesafesi, g.y1 + 10, 60, 65, "white")
            g.d1_svg = g.d1_svg + Yarım_ankastre_bulaşık_makinası_svg
            break;
        case 4:
            sol_ankastre_mesafesi = 0
            let tam_ankastre_bulaşık_makinası_svg = rect_ön(1, g.x1 + sol_ankastre_mesafesi, g.y1, 60, 75, "white")
            g.d1_svg = g.d1_svg + tam_ankastre_bulaşık_makinası_svg
            break;
        default:
            break;
    }

    //------tüm çekmece tiplerine göre hesap yapmak-------

    //var parça = new parça()

    // ------------
    function aventos() {

    }

    //---------------------------------

    if (g.boş === 1) { // alt boşluk

    } else {

    }

    if (g.boş === 2) { //üst boşluk

    } else {

    }
    var font = 12
    var yazı = g.eni; //------
    if (formFactor === "Desktop") {
        font = 12
    } else {
        font = 18
    }

    g.text1 = g.p_text;

    //let g1 = g
    return {
        g1: g,
        sol_boy: sol_boy,
    };

    //BULUNACAK

    //-------------------------------------
};