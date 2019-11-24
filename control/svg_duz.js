// Filename: public/svg_duz.js
//
// Code written in public files is shared by your site's
// Backend, page code, and site code environments.
//
// Use public files to hold utility functions that can
// be called from multiple locations in your site's code.
/*
module.exports function add(param1, param2) {
	return param1 + param2;
}*/
/*
function d(no, eni, yüksekliği, açı) {
	this.m_no = 0
	this.eni = 400
	this.yüksekliği = 280
	this.açı = 90
	this.ölçü_üst = ""
	this.ölçü_alt = ""
	this.duvar_svg = ""
	this.duvar_svg_üst = ""
	this.toplam_text = ""
	this.d3_tüm = ""
	this.izo_tüm = ""
}
d[0] = new d()
d[1] = new d()
d[2] = new d()
d[3] = new d()
*/
//----------------------------
let r = {
    kapak: '#f9f9f9ff',
    sol_yan: '#e6e6e6ff',
    sağ_yan: '#ccccccff',
    üst: '#999999ff',
    alt: '#96918bff'
}
//function data_birleştir(d_no1, n1, ad, ma, p_x_1, p_y_1, p_z_1, p_en, p_boy, p_kalınlık, p_tip, p_renk) {
let taşı
let d_taşı

//let modüller
module.exports.data_birleştir = function data_birleştir(d_no1, n1, ad, ma, p_x_1, p_y_1, p_z_1, p_en, p_boy,
                                                        p_kalınlık, s_gir, sol_gir, k_acı, p_tip, p_renk) {

    let mod = taşı,
        d = d_taşı
    console.log("ad=" + ad)
    let p_x = mod[d_no1][n1].x1 + p_x_1;
    let p_y = mod[d_no1][n1].y1 + p_y_1;
    let p_z = mod[d_no1][n1].z1 + p_z_1;
    console.log("mod[d_no1][n1].y1=" + mod[d_no1][n1].y1)
    switch (d_no1) {
        case 0:
            //console.log("parça 0 uğradı")
            let tut = d[d_no1].eni - p_x
            let tut1 = mod[d_no1][n1].eni - p_x_1
            //let tut1 = mod[d_no1][n1].x1 - p_x_1
            mod[d_no1][n1].izo_kapak = mod[d_no1][n1].izo_kapak + svg_0(tut1, p_y_1, p_z_1, p_en, p_boy, p_kalınlık, s_gir, sol_gir, k_acı, p_tip, p_renk)
            mod[d_no1][n1].d3 = mod[d_no1][n1].d3 + svg_0(tut, p_y, p_z, p_en, p_boy, p_kalınlık, s_gir, sol_gir, k_acı, p_tip, p_renk)
            mod[d_no1][n1].d1_svg = mod[d_no1][n1].d1_svg + rect_ön(p_x, p_y, p_z, p_en, p_boy, p_kalınlık, s_gir, sol_gir, k_acı, p_tip, p_renk)
            mod[d_no1][n1].d1_svg_üst = mod[d_no1][n1].d1_svg_üst + rect_üst(p_x, p_y, p_z, p_en, p_boy, p_kalınlık, s_gir, sol_gir, k_acı, p_tip, p_renk)
            mod[d_no1][n1].p_text = mod[d_no1][n1].p_text + (ad + "=" + p_en + "X" + p_boy + "_" + ma + "\n")
            //console.log("rect_ön" + rect_ön(p_x, p_y, p_z, p_en, p_boy, p_kalınlık, p_tip, p_renk))
            break;
        case 1:
            //console.log("parça 1 uğradı")
            mod[d_no1][n1].izo_kapak = mod[d_no1][n1].izo_kapak + svg_ön(p_x_1, p_y_1, p_z_1, p_en, p_boy, p_kalınlık, s_gir, sol_gir, k_acı, p_tip, p_renk)
            mod[d_no1][n1].d3 = mod[d_no1][n1].d3 + svg_ön(p_x, p_y, p_z, p_en, p_boy, p_kalınlık, s_gir, sol_gir, k_acı, p_tip, p_renk)
            mod[d_no1][n1].d1_svg = mod[d_no1][n1].d1_svg + rect_ön(p_x, p_y, p_z, p_en, p_boy, p_kalınlık, s_gir, sol_gir, k_acı, p_tip, p_renk)
            mod[d_no1][n1].d1_svg_üst = mod[d_no1][n1].d1_svg_üst + rect_üst(p_x, p_y, p_z, p_en, p_boy, s_gir, sol_gir, k_acı, p_kalınlık, p_tip, p_renk)
            mod[d_no1][n1].p_text = mod[d_no1][n1].p_text + (ad + "=" + p_en + "X" + p_boy + "_" + ma + "\n")
            break;
        case 2:

            break;
        case 3:

            break;
        default:
            break;
    }
    /*
        //let rect = svg_ciz(p_x, p_y, p_z, p_en, p_boy, p_kalınlık, p_tip, p_renk)
        mod[d_no1][n1].d1_svg = mod[d_no1][n1].d1_svg + rect_ön(p_x, p_y, p_z, p_en, p_boy, p_kalınlık, p_tip, p_renk)
        mod[d_no1][n1].d1_svg_üst = mod[d_no1][n1].d1_svg_üst + rect_üst(p_x, p_y, p_z, p_en, p_boy, p_kalınlık, p_tip, p_renk)
        mod[d_no1][n1].p_text = mod[d_no1][n1].p_text + (ad + "=" + p_en + "X" + p_boy + "_" + ma + "\n")
    */
    return mod
}

module.exports.ciz = function ciz(mod, d, d_no1) {
    taşı = mod
    d_taşı = d
    //n1=d[d_no].m_no
    //console.log("n1=" + n1 + " d_no1=" + d_no1)
    let d_no = d_no1

    switch (d_no1) {
        case 0:

            for (var n1 = d[d_no].m_no; n1 >= 1; n1--) {
                mod[d_no1][n1].izo_kapak = ""
                mod[d_no1][n1].d3 = ""
                mod[d_no1][n1].d1_svg = ""
                mod[d_no1][n1].d1_svg_üst = ""
                mod[d_no1][n1].p_text = ""
                if (mod[d_no1][n1].raf.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].raf.adı, mod[d_no1][n1].raf.malzeme.adı, mod[d_no1][n1].raf.x_1, mod[d_no1][n1].raf.y_1, mod[d_no1][n1].raf.z_1, mod[d_no1][n1].raf.en, +
                        mod[d_no1][n1].raf.boy, mod[d_no1][n1].raf.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].raf.tip, r.kapak);
                }
                if (mod[d_no1][n1].ark_kş.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].ark_kş.adı, mod[d_no1][n1].ark_kş.malzeme.adı, mod[d_no1][n1].ark_kş.x_1, mod[d_no1][n1].ark_kş.y_1, mod[d_no1][n1].ark_kş.z_1, mod[d_no1][n1].ark_kş.boy, mod[d_no1][n1].ark_kş.en, mod[d_no1][n1].ark_kş.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].ark_kş.tip, r.kapak);
                }
                if (mod[d_no1][n1].sabit_raf.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].sabit_raf.adı, mod[d_no1][n1].sabit_raf.malzeme.adı, mod[d_no1][n1].sabit_raf.x_1, mod[d_no1][n1].sabit_raf.y_1, mod[d_no1][n1].sabit_raf.z_1, mod[d_no1][n1].sabit_raf.en, mod[d_no1][n1].sabit_raf.boy, mod[d_no1][n1].sabit_raf.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].sabit_raf.tip, r.kapak);
                }
                if (mod[d_no1][n1].arkalık.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].arkalık.adı, mod[d_no1][n1].arkalık.malzeme.adı, mod[d_no1][n1].arkalık.x_1, mod[d_no1][n1].arkalık.y_1, mod[d_no1][n1].arkalık.z_1, mod[d_no1][n1].arkalık.en, mod[d_no1][n1].arkalık.boy, mod[d_no1][n1].arkalık.malzeme.kalınlık, mod[d_no1][n1].üst.dik_köşe.sol_ön_gir, mod[d_no1][n1].üst.dik_köşe.sağ_ön_gir, mod[d_no1][n1].üst.dik_köşe.köşe_açı, mod[d_no1][n1].arkalık.tip, r.kapak);
                }
                if (mod[d_no1][n1].alt.düz.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].alt.düz.adı, mod[d_no1][n1].alt.düz.malzeme.adı, mod[d_no1][n1].alt.düz.x_1, mod[d_no1][n1].alt.düz.y_1, mod[d_no1][n1].alt.düz.z_1, mod[d_no1][n1].alt.düz.en, mod[d_no1][n1].alt.düz.boy, mod[d_no1][n1].alt.düz.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].alt.düz.tip, r.alt);
                }
                if (mod[d_no1][n1].alt.dik_köşe.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].alt.dik_köşe.adı, mod[d_no1][n1].alt.dik_köşe.malzeme.adı, mod[d_no1][n1].alt.dik_köşe.x_1, mod[d_no1][n1].alt.dik_köşe.y_1, mod[d_no1][n1].alt.dik_köşe.z_1, mod[d_no1][n1].alt.dik_köşe.en, mod[d_no1][n1].alt.dik_köşe.boy, mod[d_no1][n1].alt.dik_köşe.malzeme.kalınlık, mod[d_no1][n1].alt.dik_köşe.sol_ön_gir, mod[d_no1][n1].alt.dik_köşe.sağ_ön_gir, mod[d_no1][n1].alt.dik_köşe.köşe_açı, mod[d_no1][n1].alt.dik_köşe.tip, r.üst);
                }

                if (mod[d_no1][n1].kln_sağ.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].kln_sağ.adı, mod[d_no1][n1].kln_sağ.malzeme.adı, mod[d_no1][n1].kln_sağ.x_1, mod[d_no1][n1].kln_sağ.y_1, mod[d_no1][n1].kln_sağ.z_1, mod[d_no1][n1].kln_sağ.en, mod[d_no1][n1].kln_sağ.boy, mod[d_no1][n1].kln_sağ.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].kln_sağ.tip, r.kapak);
                }
                if (mod[d_no1][n1].sağ_yan.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].sağ_yan.adı, mod[d_no1][n1].sağ_yan.malzeme.adı, mod[d_no1][n1].sağ_yan.x_1, mod[d_no1][n1].sağ_yan.y_1, mod[d_no1][n1].sağ_yan.z_1, mod[d_no1][n1].sağ_yan.en, mod[d_no1][n1].sağ_yan.boy, mod[d_no1][n1].sağ_yan.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].sağ_yan.tip, r.sağ_yan);
                }
                if (mod[d_no1][n1].çekmece_var) {
                    for (var c = 0; c < mod[d_no1][n1].çekmece_sys; c++) {
                        if (mod[d_no1][n1].çk[c].sol_yan.dahil) {
                            data_birleştir(d_no1, n1, mod[d_no1][n1].çk[c].sol_yan.adı, mod[d_no1][n1].çk[c].sol_yan.malzeme.adı, mod[d_no1][n1].çk[c].sol_yan.x_1, mod[d_no1][n1].çk[c].sol_yan.y_1, mod[d_no1][n1].çk[c].sol_yan.z_1, mod[d_no1][n1].çk[c].sol_yan.boy, mod[d_no1][n1].çk[c].sol_yan.en, mod[d_no1][n1].çk[c].sol_yan.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].çk[c].sol_yan.tip, r.kapak);
                        }
                        if (mod[d_no1][n1].çk[c].sağ_yan.dahil) {
                            data_birleştir(d_no1, n1, mod[d_no1][n1].çk[c].sağ_yan.adı, mod[d_no1][n1].çk[c].sağ_yan.malzeme.adı, mod[d_no1][n1].çk[c].sağ_yan.x_1, mod[d_no1][n1].çk[c].sağ_yan.y_1, mod[d_no1][n1].çk[c].sağ_yan.z_1, mod[d_no1][n1].çk[c].sağ_yan.boy, mod[d_no1][n1].çk[c].sağ_yan.en, mod[d_no1][n1].çk[c].sağ_yan.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].çk[c].sağ_yan.tip, r.kapak);
                        }
                        if (mod[d_no1][n1].çk[c].arka.dahil) {
                            data_birleştir(d_no1, n1, mod[d_no1][n1].çk[c].arka.adı, mod[d_no1][n1].çk[c].arka.malzeme.adı, mod[d_no1][n1].çk[c].arka.x_1, mod[d_no1][n1].çk[c].arka.y_1, mod[d_no1][n1].çk[c].arka.z_1, mod[d_no1][n1].çk[c].arka.boy, mod[d_no1][n1].çk[c].arka.en, mod[d_no1][n1].çk[c].arka.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].çk[c].arka.tip, r.kapak);
                        }
                        if (mod[d_no1][n1].çk[c].ön.dahil) {
                            data_birleştir(d_no1, n1, mod[d_no1][n1].çk[c].ön.adı, mod[d_no1][n1].çk[c].ön.malzeme.adı, mod[d_no1][n1].çk[c].ön.x_1, mod[d_no1][n1].çk[c].ön.y_1, mod[d_no1][n1].çk[c].ön.z_1, mod[d_no1][n1].çk[c].ön.boy, mod[d_no1][n1].çk[c].ön.en, mod[d_no1][n1].çk[c].ön.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].çk[c].ön.tip, r.kapak);
                        }

                    }

                }
                //---------------------------------------------
                if (mod[d_no1][n1].üst.ön_kayıt.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].üst.ön_kayıt.adı, mod[d_no1][n1].üst.ön_kayıt.malzeme.adı, mod[d_no1][n1].üst.ön_kayıt.x_1, mod[d_no1][n1].üst.ön_kayıt.y_1, mod[d_no1][n1].üst.ön_kayıt.z_1, mod[d_no1][n1].üst.ön_kayıt.en, mod[d_no1][n1].üst.ön_kayıt.boy, mod[d_no1][n1].üst.ön_kayıt.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].üst.ön_kayıt.tip, r.üst);
                }
                if (mod[d_no1][n1].üst.arka_kayıt.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].üst.arka_kayıt.adı, mod[d_no1][n1].üst.arka_kayıt.malzeme.adı, mod[d_no1][n1].üst.arka_kayıt.x_1, mod[d_no1][n1].üst.arka_kayıt.y_1, mod[d_no1][n1].üst.arka_kayıt.z_1, mod[d_no1][n1].üst.arka_kayıt.en, mod[d_no1][n1].üst.arka_kayıt.boy, mod[d_no1][n1].üst.arka_kayıt.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].üst.arka_kayıt.tip, r.üst);
                }
                if (mod[d_no1][n1].üst.düz.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].üst.düz.adı, mod[d_no1][n1].üst.düz.malzeme.adı, mod[d_no1][n1].üst.düz.x_1, mod[d_no1][n1].üst.düz.y_1, mod[d_no1][n1].üst.düz.z_1, mod[d_no1][n1].üst.düz.en, mod[d_no1][n1].üst.düz.boy, mod[d_no1][n1].üst.düz.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].üst.düz.tip, r.üst);
                }
                if (mod[d_no1][n1].üst.dik_köşe.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].üst.dik_köşe.adı, mod[d_no1][n1].üst.dik_köşe.malzeme.adı, mod[d_no1][n1].üst.dik_köşe.x_1, mod[d_no1][n1].üst.dik_köşe.y_1, mod[d_no1][n1].üst.dik_köşe.z_1, mod[d_no1][n1].üst.dik_köşe.en, mod[d_no1][n1].üst.dik_köşe.boy, mod[d_no1][n1].üst.dik_köşe.malzeme.kalınlık, mod[d_no1][n1].üst.dik_köşe.sol_ön_gir, mod[d_no1][n1].üst.dik_köşe.sağ_ön_gir, mod[d_no1][n1].üst.dik_köşe.köşe_açı, mod[d_no1][n1].üst.dik_köşe.tip, r.üst);
                }
                //------------------------
                if (mod[d_no1][n1].baza.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].baza.adı, mod[d_no1][n1].baza.malzeme.adı, mod[d_no1][n1].baza.x_1, mod[d_no1][n1].baza.y_1, mod[d_no1][n1].baza.z_1, mod[d_no1][n1].baza.boy, mod[d_no1][n1].baza.en, mod[d_no1][n1].baza.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].baza.tip, r.kapak);
                }
                if (mod[d_no1][n1].sol_yan.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].sol_yan.adı, mod[d_no1][n1].sol_yan.malzeme.adı, mod[d_no1][n1].sol_yan.x_1, mod[d_no1][n1].sol_yan.y_1, mod[d_no1][n1].sol_yan.z_1, +
                        mod[d_no1][n1].sol_yan.en, mod[d_no1][n1].sol_yan.boy, mod[d_no1][n1].sol_yan.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].sol_yan.tip, r.sol_yan);
                }
                if (mod[d_no1][n1].kln_sol.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].kln_sol.adı, mod[d_no1][n1].kln_sol.malzeme.adı, mod[d_no1][n1].kln_sol.x_1, mod[d_no1][n1].kln_sol.y_1, mod[d_no1][n1].kln_sol.z_1, +
                        mod[d_no1][n1].kln_sol.en, mod[d_no1][n1].kln_sol.boy, mod[d_no1][n1].kln_sol.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].kln_sol.tip, r.kapak);
                }
                if (mod[d_no1][n1].çekmece_var) {
                    for (var c3 = 0; c3 < mod[d_no1][n1].çekmece_sys; c3++) {
                        if (mod[d_no1][n1].çk[c3].kapak.dahil) {
                            data_birleştir(d_no1, n1, mod[d_no1][n1].çk[c3].kapak.adı, mod[d_no1][n1].çk[c3].kapak.malzeme.adı, mod[d_no1][n1].çk[c3].kapak.x_1, mod[d_no1][n1].çk[c3].kapak.y_1, mod[d_no1][n1].çk[c3].kapak.z_1, mod[d_no1][n1].çk[c3].kapak.en, mod[d_no1][n1].çk[c3].kapak.boy, mod[d_no1][n1].çk[c3].kapak.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].çk[c3].kapak.tip, r.kapak);
                        }
                    }
                }
                if (mod[d_no1][n1].kapak.dahil && mod[d_no1][n1].kapak2.dahil === false) {

                    data_birleştir(d_no1, n1, mod[d_no1][n1].kapak.adı, mod[d_no1][n1].kapak.malzeme.adı, mod[d_no1][n1].kapak.x_1, mod[d_no1][n1].kapak.y_1, mod[d_no1][n1].kapak.z_1, mod[d_no1][n1].kapak.en, mod[d_no1][n1].kapak.boy, mod[d_no1][n1].kapak.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].kapak.tip, r.kapak);

                }
                if ((mod[d_no1][n1].kapak.dahil && mod[d_no1][n1].kapak2.dahil)) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].kapak.adı, mod[d_no1][n1].kapak.malzeme.adı, mod[d_no1][n1].kapak.x_1, mod[d_no1][n1].kapak.y_1, mod[d_no1][n1].kapak.z_1, mod[d_no1][n1].kapak.en, mod[d_no1][n1].kapak.boy, mod[d_no1][n1].kapak.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].kapak.tip, r.kapak);
                    data_birleştir(d_no1, n1, mod[d_no1][n1].kapak2.adı, mod[d_no1][n1].kapak2.malzeme.adı, mod[d_no1][n1].kapak2.x_1, mod[d_no1][n1].kapak2.y_1, mod[d_no1][n1].kapak2.z_1, mod[d_no1][n1].kapak2.en, mod[d_no1][n1].kapak2.boy, mod[d_no1][n1].kapak2.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].kapak2.tip, r.kapak);
                }
            }
            break;
        case 1:

            for (var n1 = 1; n1 <= d[d_no].m_no; n1++) {
                mod[d_no1][n1].izo_kapak = ""
                mod[d_no1][n1].d3 = ""
                mod[d_no1][n1].d1_svg = ""
                mod[d_no1][n1].d1_svg_üst = ""
                mod[d_no1][n1].p_text = ""
                if (mod[d_no1][n1].kln_sol.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].kln_sol.adı, mod[d_no1][n1].kln_sol.malzeme.adı, mod[d_no1][n1].kln_sol.x_1, mod[d_no1][n1].kln_sol.y_1, mod[d_no1][n1].kln_sol.z_1, +
                        mod[d_no1][n1].kln_sol.en, mod[d_no1][n1].kln_sol.boy, mod[d_no1][n1].kln_sol.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].kln_sol.tip, 'fill= "black"');
                }
                if (mod[d_no1][n1].sol_yan.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].sol_yan.adı, mod[d_no1][n1].sol_yan.malzeme.adı, mod[d_no1][n1].sol_yan.x_1, mod[d_no1][n1].sol_yan.y_1, mod[d_no1][n1].sol_yan.z_1, +
                        mod[d_no1][n1].sol_yan.en, mod[d_no1][n1].sol_yan.boy, mod[d_no1][n1].sol_yan.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].sol_yan.tip, r.sol_yan);
                }
                if (mod[d_no1][n1].raf.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].raf.adı, mod[d_no1][n1].raf.malzeme.adı, mod[d_no1][n1].raf.x_1, mod[d_no1][n1].raf.y_1, mod[d_no1][n1].raf.z_1, mod[d_no1][n1].raf.en, +
                        mod[d_no1][n1].raf.boy, mod[d_no1][n1].raf.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].raf.tip, r.saol_yan);
                }
                if (mod[d_no1][n1].ark_kş.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].ark_kş.adı, mod[d_no1][n1].ark_kş.malzeme.adı, mod[d_no1][n1].ark_kş.x_1, mod[d_no1][n1].ark_kş.y_1, mod[d_no1][n1].ark_kş.z_1, mod[d_no1][n1].ark_kş.boy, mod[d_no1][n1].ark_kş.en, mod[d_no1][n1].ark_kş.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].ark_kş.tip, r.kapak);
                }
                if (mod[d_no1][n1].sabit_raf.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].sabit_raf.adı, mod[d_no1][n1].sabit_raf.malzeme.adı, mod[d_no1][n1].sabit_raf.x_1, mod[d_no1][n1].sabit_raf.y_1, mod[d_no1][n1].sabit_raf.z_1, mod[d_no1][n1].sabit_raf.en, mod[d_no1][n1].sabit_raf.boy, mod[d_no1][n1].sabit_raf.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].sabit_raf.tip, r.kapak);
                }
                if (mod[d_no1][n1].arkalık.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].arkalık.adı, mod[d_no1][n1].arkalık.malzeme.adı, mod[d_no1][n1].arkalık.x_1, mod[d_no1][n1].arkalık.y_1, mod[d_no1][n1].arkalık.z_1, mod[d_no1][n1].arkalık.en, mod[d_no1][n1].arkalık.boy, mod[d_no1][n1].arkalık.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].arkalık.tip, r.kapak);
                }
                if (mod[d_no1][n1].alt.düz.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].alt.düz.adı, mod[d_no1][n1].alt.düz.malzeme.adı, mod[d_no1][n1].alt.düz.x_1, mod[d_no1][n1].alt.düz.y_1, mod[d_no1][n1].alt.düz.z_1, mod[d_no1][n1].alt.düz.en, mod[d_no1][n1].alt.düz.boy, mod[d_no1][n1].alt.düz.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].alt.düz.tip, r.alt);
                }
                if (mod[d_no1][n1].alt.dik_köşe.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].alt.dik_köşe.adı, mod[d_no1][n1].alt.dik_köşe.malzeme.adı, mod[d_no1][n1].alt.dik_köşe.x_1, mod[d_no1][n1].alt.dik_köşe.y_1, mod[d_no1][n1].alt.dik_köşe.z_1, mod[d_no1][n1].alt.dik_köşe.en, mod[d_no1][n1].alt.dik_köşe.boy, mod[d_no1][n1].alt.dik_köşe.malzeme.kalınlık, mod[d_no1][n1].alt.dik_köşe.sol_ön_gir, mod[d_no1][n1].alt.dik_köşe.sağ_ön_gir, mod[d_no1][n1].alt.dik_köşe.köşe_açı, mod[d_no1][n1].alt.dik_köşe.tip, r.üst);
                }
                if (mod[d_no1][n1].baza.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].baza.adı, mod[d_no1][n1].baza.malzeme.adı, mod[d_no1][n1].baza.x_1, mod[d_no1][n1].baza.y_1, mod[d_no1][n1].baza.z_1, mod[d_no1][n1].baza.boy, mod[d_no1][n1].baza.en, mod[d_no1][n1].baza.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].baza.tip, r.kapak);
                }
                if (mod[d_no1][n1].çekmece_var) {
                    for (var c1 = 0; c1 < mod[d_no1][n1].çekmece_sys; c1++) {
                        if (mod[d_no1][n1].çk[c1].sol_yan.dahil) {
                            data_birleştir(d_no1, n1, mod[d_no1][n1].çk[c1].sol_yan.adı, mod[d_no1][n1].çk[c1].sol_yan.malzeme.adı, mod[d_no1][n1].çk[c1].sol_yan.x_1, mod[d_no1][n1].çk[c1].sol_yan.y_1, mod[d_no1][n1].çk[c1].sol_yan.z_1, mod[d_no1][n1].çk[c1].sol_yan.boy, mod[d_no1][n1].çk[c1].sol_yan.en, mod[d_no1][n1].çk[c1].sol_yan.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].çk[c1].sol_yan.tip, r.kapak);
                        }
                        if (mod[d_no1][n1].çk[c1].sağ_yan.dahil) {
                            data_birleştir(d_no1, n1, mod[d_no1][n1].çk[c1].sağ_yan.adı, mod[d_no1][n1].çk[c1].sağ_yan.malzeme.adı, mod[d_no1][n1].çk[c1].sağ_yan.x_1, mod[d_no1][n1].çk[c1].sağ_yan.y_1, mod[d_no1][n1].çk[c1].sağ_yan.z_1, mod[d_no1][n1].çk[c1].sağ_yan.boy, mod[d_no1][n1].çk[c1].sağ_yan.en, mod[d_no1][n1].çk[c1].sağ_yan.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].çk[c1].sağ_yan.tip, r.kapak);
                        }
                        if (mod[d_no1][n1].çk[c1].arka.dahil) {
                            data_birleştir(d_no1, n1, mod[d_no1][n1].çk[c1].arka.adı, mod[d_no1][n1].çk[c1].arka.malzeme.adı, mod[d_no1][n1].çk[c1].arka.x_1, mod[d_no1][n1].çk[c1].arka.y_1, mod[d_no1][n1].çk[c1].arka.z_1, mod[d_no1][n1].çk[c1].arka.boy, mod[d_no1][n1].çk[c1].arka.en, mod[d_no1][n1].çk[c1].arka.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].çk[c1].arka.tip, r.kapak);
                        }
                        if (mod[d_no1][n1].çk[c1].ön.dahil) {
                            data_birleştir(d_no1, n1, mod[d_no1][n1].çk[c1].ön.adı, mod[d_no1][n1].çk[c1].ön.malzeme.adı, mod[d_no1][n1].çk[c1].ön.x_1, mod[d_no1][n1].çk[c1].ön.y_1, mod[d_no1][n1].çk[c1].ön.z_1, mod[d_no1][n1].çk[c1].ön.boy, mod[d_no1][n1].çk[c1].ön.en, mod[d_no1][n1].çk[c1].ön.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].çk[c1].ön.tip, r.kapak);
                        }

                    }

                }

                if (mod[d_no1][n1].üst.ön_kayıt.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].üst.ön_kayıt.adı, mod[d_no1][n1].üst.ön_kayıt.malzeme.adı, mod[d_no1][n1].üst.ön_kayıt.x_1, mod[d_no1][n1].üst.ön_kayıt.y_1, mod[d_no1][n1].üst.ön_kayıt.z_1, mod[d_no1][n1].üst.ön_kayıt.en, mod[d_no1][n1].üst.ön_kayıt.boy, mod[d_no1][n1].üst.ön_kayıt.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].üst.ön_kayıt.tip, r.üst);
                }
                if (mod[d_no1][n1].üst.arka_kayıt.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].üst.arka_kayıt.adı, mod[d_no1][n1].üst.arka_kayıt.malzeme.adı, mod[d_no1][n1].üst.arka_kayıt.x_1, mod[d_no1][n1].üst.arka_kayıt.y_1, mod[d_no1][n1].üst.arka_kayıt.z_1, mod[d_no1][n1].üst.arka_kayıt.en, mod[d_no1][n1].üst.arka_kayıt.boy, mod[d_no1][n1].üst.arka_kayıt.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].üst.arka_kayıt.tip, r.üst);
                }
                if (mod[d_no1][n1].üst.düz.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].üst.düz.adı, mod[d_no1][n1].üst.düz.malzeme.adı, mod[d_no1][n1].üst.düz.x_1, mod[d_no1][n1].üst.düz.y_1, mod[d_no1][n1].üst.düz.z_1, mod[d_no1][n1].üst.düz.en, mod[d_no1][n1].üst.düz.boy, mod[d_no1][n1].üst.düz.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].üst.düz.tip, r.üst);
                }
                if (mod[d_no1][n1].üst.dik_köşe.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].üst.dik_köşe.adı, mod[d_no1][n1].üst.dik_köşe.malzeme.adı, mod[d_no1][n1].üst.dik_köşe.x_1, mod[d_no1][n1].üst.dik_köşe.y_1, mod[d_no1][n1].üst.dik_köşe.z_1, mod[d_no1][n1].üst.dik_köşe.en, mod[d_no1][n1].üst.dik_köşe.boy, mod[d_no1][n1].üst.dik_köşe.malzeme.kalınlık, mod[d_no1][n1].üst.dik_köşe.sol_ön_gir, mod[d_no1][n1].üst.dik_köşe.sağ_ön_gir, mod[d_no1][n1].üst.dik_köşe.köşe_açı, mod[d_no1][n1].üst.dik_köşe.tip, r.üst);
                }

                if (mod[d_no1][n1].kln_sağ.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].kln_sağ.adı, mod[d_no1][n1].kln_sağ.malzeme.adı, mod[d_no1][n1].kln_sağ.x_1, mod[d_no1][n1].kln_sağ.y_1, mod[d_no1][n1].kln_sağ.z_1, mod[d_no1][n1].kln_sağ.en, mod[d_no1][n1].kln_sağ.boy, mod[d_no1][n1].kln_sağ.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].kln_sağ.tip, r.kapak);
                }
                if (mod[d_no1][n1].sağ_yan.dahil) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].sağ_yan.adı, mod[d_no1][n1].sağ_yan.malzeme.adı, mod[d_no1][n1].sağ_yan.x_1, mod[d_no1][n1].sağ_yan.y_1, mod[d_no1][n1].sağ_yan.z_1, mod[d_no1][n1].sağ_yan.en, mod[d_no1][n1].sağ_yan.boy, mod[d_no1][n1].sağ_yan.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].sağ_yan.tip, r.sağ_yan);
                }
                if (mod[d_no1][n1].çekmece_var) {
                    for (var c2 = 0; c2 < mod[d_no1][n1].çekmece_sys; c2++) {
                        if (mod[d_no1][n1].çk[c2].kapak.dahil) {
                            data_birleştir(d_no1, n1, mod[d_no1][n1].çk[c2].kapak.adı, mod[d_no1][n1].çk[c2].kapak.malzeme.adı, mod[d_no1][n1].çk[c2].kapak.x_1, mod[d_no1][n1].çk[c2].kapak.y_1, mod[d_no1][n1].çk[c2].kapak.z_1, mod[d_no1][n1].çk[c2].kapak.en, mod[d_no1][n1].çk[c2].kapak.boy, mod[d_no1][n1].çk[c2].kapak.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].çk[c2].kapak.tip, r.kapak);
                        }
                    }
                }
                if (mod[d_no1][n1].kapak.dahil && mod[d_no1][n1].kapak2.dahil === false) {

                    data_birleştir(d_no1, n1, mod[d_no1][n1].kapak.adı, mod[d_no1][n1].kapak.malzeme.adı, mod[d_no1][n1].kapak.x_1, mod[d_no1][n1].kapak.y_1, mod[d_no1][n1].kapak.z_1, mod[d_no1][n1].kapak.en, mod[d_no1][n1].kapak.boy, mod[d_no1][n1].kapak.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].kapak.tip, r.kapak);

                }
                if ((mod[d_no1][n1].kapak.dahil && mod[d_no1][n1].kapak2.dahil)) {
                    data_birleştir(d_no1, n1, mod[d_no1][n1].kapak.adı, mod[d_no1][n1].kapak.malzeme.adı, mod[d_no1][n1].kapak.x_1, mod[d_no1][n1].kapak.y_1, mod[d_no1][n1].kapak.z_1, mod[d_no1][n1].kapak.en, mod[d_no1][n1].kapak.boy, mod[d_no1][n1].kapak.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].kapak.tip, r.kapak);
                    data_birleştir(d_no1, n1, mod[d_no1][n1].kapak2.adı, mod[d_no1][n1].kapak2.malzeme.adı, mod[d_no1][n1].kapak2.x_1, mod[d_no1][n1].kapak2.y_1, mod[d_no1][n1].kapak2.z_1, mod[d_no1][n1].kapak2.en, mod[d_no1][n1].kapak2.boy, mod[d_no1][n1].kapak2.malzeme.kalınlık, 0, 0, 0, mod[d_no1][n1].kapak2.tip, r.kapak);
                }

            }
            break;
        case 2:

            break;
        case 3:

            break;
        default:
            break;
    }
    return mod
}

const radian = 30 * Math.PI / 180;
let cos = Math.cos(radian);
let sin = Math.sin(radian);

function duvar(d, renk) {

    let z1 = 0,
        x1 = 0,
        y1 = 0
    let en = d[0].eni,
        boy = d[0].yüksekliği,
        kalınlık = 10

    let duvar_0 = '<g id="duvar" ' + renk + ' fill-opacity="1" stroke="black" stroke-width="0.3"	> ' +
        '<path d="m ' + (z1 * cos) + " " + (z1 * sin) + 'm ' + (-x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + (-en * cos) + " " + (+en * sin) + ' v' + " " + boy + " " + 'l' + " " + (+en * cos) + " " + (-en * sin) + 'z  " />' +
        '<path d="m ' + (z1 * cos) + " " + (z1 * sin) + 'm ' + (-x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + (en * cos) + " " + (en * sin) + ' v' + " " + boy + " " + 'l' + " " + (-en * cos) + " " + (-en * sin) + 'z  " />' +
        //'<path d="m ' + (+z1 * cos) + " " + (z1 * sin) + 'm ' + (-x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + (en * cos) + " " + (-en * sin) + ' v' + " " + boy + " " + 'l' + " " + (-en * cos) + " " + (en * sin) + 'z  " />' +
        /*'<path d="m ' + (-(z1 + kalınlık) * cos) + " " + ((z1 + kalınlık) * sin) + 'm ' + (x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + en * cos + " " + en * sin + ' v' + " " + boy + " " + 'l' + " " + (-en * cos) + " " + (-en * sin) + 'z  " />' +
        '<path d="m ' + (-(z1 + kalınlık) * cos) + " " + ((z1 + kalınlık) * sin) + 'm ' + (x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + kalınlık * cos + " " + (-kalınlık * sin) + ' l' + " " + en * cos + " " + en * sin + 'l' + " " + (-kalınlık * cos) + " " + (kalınlık * sin) + " " + 'z " />' +
        '<path d="m ' + (-(z1 + kalınlık) * cos) + " " + ((z1 + kalınlık) * sin) + 'm ' + (x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + 'm ' + (en * cos) + " " + (en * sin) + ' l' + " " + kalınlık * cos + " " + (-kalınlık * sin) + ' v' + " " + boy + " " + 'l' + " " + (-kalınlık * cos) + " " + (kalınlık * sin) + " " + 'z " />' +*/
        '</g>'
    return duvar_0
}

module.exports.svg_ön = function svg_ön(x1, y1, z1, en, boy, kalınlık, s_gir, sol_gir, k_acı, tip, renk) {
    let renk1 = 'fill=' + renk;
    let izo_path = "";
    //console.log("x1=" + x1 + " y1=" + y1 + " z1=" + z1 + " en=" + en + " boy=" + boy + "kalınlı=" + kalınlık + " s_gir=" + s_gir + "sol_gir=" + sol_gir + " tip=" + tip + "renk=" + renk)
    switch (tip) {
        case 1: //kapak çizizmi-----ön parça
            izo_path = '<g id="kapak " ' + renk1 + ' fill-opacity="1" stroke="black" stroke-width="0.3"	> ' +
                '<path d="m ' + (-z1 * cos) + " " + (z1 * sin) + 'm ' + (x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + en * cos + " " + en * sin + ' v' + " " + boy + " " + 'l' + " " + (-en * cos) + " " + (-en * sin) + 'z  " />' +
                '<path d="m ' + (-(z1 + kalınlık) * cos) + " " + ((z1 + kalınlık) * sin) + 'm ' + (x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + en * cos + " " + en * sin + ' v' + " " + boy + " " + 'l' + " " + (-en * cos) + " " + (-en * sin) + 'z  " />' +
                '<path d="m ' + (-(z1 + kalınlık) * cos) + " " + ((z1 + kalınlık) * sin) + 'm ' + (x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + kalınlık * cos + " " + (-kalınlık * sin) + ' l' + " " + en * cos + " " + en * sin + 'l' + " " + (-kalınlık * cos) + " " + (kalınlık * sin) + " " + 'z " />' +
                '<path d="m ' + (-(z1 + kalınlık) * cos) + " " + ((z1 + kalınlık) * sin) + 'm ' + (x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + 'm ' + (en * cos) + " " + (en * sin) + ' l' + " " + kalınlık * cos + " " + (-kalınlık * sin) + ' v' + " " + boy + " " + 'l' + " " + (-kalınlık * cos) + " " + (kalınlık * sin) + " " + 'z " />' +
                '</g>'
            break;
        case 2: //sol_yan çizim-----yan parça
            izo_path = '<g id="sol_yan " ' + renk1 + ' fill-opacity="1" stroke="black"	stroke-width="0.3"> ' +
                '<path d="m ' + (-z1 * cos) + " " + (z1 * sin) + 'm ' + (x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + (-en * cos) + " " + en * sin + ' v' + " " + boy + " " + 'l' + " " + (en * cos) + " " + (-en * sin) + 'z  " />' +
                '<path d="m ' + (-(z1) * cos) + " " + ((z1) * sin) + 'm ' + ((x1 + kalınlık) * cos) + " " + ((x1 + kalınlık) * sin) + 'm ' + 0 + " " + (y1) + ' l' + (-en * cos) + " " + en * sin + ' v' + " " + boy + " " + 'l' + " " + (en * cos) + " " + (-en * sin) + 'z " />' +
                '<path d="m ' + (-z1 * cos) + " " + ((z1) * sin) + 'm ' + (x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + (-en * cos) + " " + (en * sin) + ' l' + " " + kalınlık * cos + " " + kalınlık * sin + 'l' + " " + (en * cos) + " " + (-en * sin) + " " + 'z " />' +
                '<path d="m ' + (-(z1 + en * cos)) + " " + (z1 + en * sin) + 'm ' + (x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + kalınlık * cos + " " + kalınlık * sin + ' v' + " " + boy + " " + 'l' + " " + (-kalınlık * cos) + " " + (-kalınlık * sin) + 'z " />' +
                '</g>'

            break;

        case 3: //üst çizizmi-------üst parça
            izo_path = '<g id="üst " ' + renk1 + ' fill-opacity="1" stroke="black" stroke-width="0.3"	> ' +
                '<path d="m ' + (-z1 * cos) + " " + (z1 * sin) + 'm ' + (x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + (boy * cos) + " " + boy * sin + ' l' + " " + (-en * cos) + " " + (en * sin) + " " + 'l' + " " + (-boy * cos) + " " + (-boy * sin) + 'z  " />' +
                '<path d="m ' + ((-z1) * cos) + " " + ((z1) * sin) + 'm ' + ((x1) * cos) + " " + ((x1) * sin) + 'm ' + 0 + " " + (y1 + kalınlık) + ' l' + " " + (boy * cos) + " " + boy * sin + ' l' + " " + (-en * cos) + " " + (en * sin) + " " + 'l' + " " + (-boy * cos) + " " + (-boy * sin) + ' l' + " " + (en * cos) + " " + (-en * sin) + ' z " />' +
                '</g>'
            break;
        case 4: //kapak çizizmi-----ön parça_camlı
            izo_path = '<g id="kapak "  ' + renk1 + ' fill-opacity="1" stroke="black" stroke-width="0.3"	> ' +
                '<path d="m ' + (-z1 * cos) + " " + (z1 * sin) + 'm ' + (x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + en * cos + " " + en * sin + ' v' + " " + boy + " " + 'l' + " " + (-en * cos) + " " + (-en * sin) + 'z  " />' +
                '<path d="m ' + (-(z1 + kalınlık) * cos) + " " + ((z1 + kalınlık) * sin) + 'm ' + (x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + en * cos + " " + en * sin + ' v' + " " + boy + " " + 'l' + " " + (-en * cos) + " " + (-en * sin) + 'z  " />' +
                '<path d="m ' + (-(z1 + kalınlık) * cos) + " " + ((z1 + kalınlık) * sin) + 'm ' + (x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + kalınlık * cos + " " + (-kalınlık * sin) + ' l' + " " + en * cos + " " + en * sin + 'l' + " " + (-kalınlık * cos) + " " + (kalınlık * sin) + " " + 'z " />' +
                '<path d="m ' + (-(z1 + kalınlık) * cos) + " " + ((z1 + kalınlık) * sin) + 'm ' + (x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + 'm ' + (en * cos) + " " + (en * sin) + ' l' + " " + kalınlık * cos + " " + (-kalınlık * sin) + ' v' + " " + boy + " " + 'l' + " " + (-kalınlık * cos) + " " + (kalınlık * sin) + " " + 'z "  />' +
                '</g>'
            break;
        default:
            break;

    }

    return izo_path
}

module.exports.svg_0 = function svg_0(x1, y1, z1, en, boy, kalınlık, s_gir, sol_gir, k_acı, tip, renk) {
    let ek1 = `<defs>
    <radialGradient id="myGradient" >
      <stop offset="5%"  stop-color=#f9f9f9ff />
      <stop offset="95%" stop-color=#f2f2f2ff />
    </radialGradient>
  </defs>`;
    let renk1 = 'fill=' + renk
    let renk11 = 'fill="url(#myGradient)"'
    let izo_path = "";
    console.log("x1=" + x1 + " y1=" + y1 + " z1=" + z1 + " en=" + en + " boy=" + boy + "kalınlı=" + kalınlık + " s_gir=" + s_gir + "sol_gir=" + sol_gir + " tip=" + tip + "renk=" + renk)
    switch (tip) {
        case 1: //kapak çizizmi-----ön parça
            izo_path = ek1 +
                '<g id="kapak " ' + renk11 + ' fill-opacity="1" stroke="black" stroke-width="0.3"	> ' +
                '<path d="m ' + (+z1 * cos) + " " + (z1 * sin) + 'm ' + (-x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + (en * cos) + " " + (-en * sin) + ' v' + " " + boy + " " + 'l' + " " + (-en * cos) + " " + (en * sin) + 'z  " />' +
                '<path d="m ' + (+(z1 + kalınlık) * cos) + " " + ((z1 + kalınlık) * sin) + 'm ' + (-x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + (en * cos) + " " + (-en * sin) + ' v' + " " + boy + " " + 'l' + " " + (-en * cos) + " " + (en * sin) + 'z  " />' +
                '<path d="m ' + (+(z1) * cos) + " " + ((z1) * sin) + 'm ' + (-x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + (kalınlık * cos) + " " + (kalınlık * sin) + ' l' + " " + en * cos + " " + (-en * sin) + 'l' + " " + (-kalınlık * cos) + " " + (-kalınlık * sin) + " " + 'z " />' +
                '<path d="m ' + (+(z1) * cos) + " " + ((z1) * sin) + 'm ' + (-x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + kalınlık * cos + " " + (kalınlık * sin) + ' v' + " " + boy + " " + 'l' + " " + (-kalınlık * cos) + " " + (-kalınlık * sin) + " " + 'z " />' +
                '</g>' + ek1
            break;
        case 2: //sol_yan çizim-----yan parça
            izo_path = '<g id="sol_yan " ' + renk1 + ' fill-opacity="1" stroke="black" stroke-width="0.3"	> ' +
                '<path d="m ' + (z1 * cos) + " " + (z1 * sin) + 'm ' + (-x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + (en * cos) + " " + (en * sin) + ' v' + " " + boy + " " + 'l' + " " + (-en * cos) + " " + (-en * sin) + 'z  " />' +
                '<path d="m ' + ((z1) * cos) + " " + ((z1) * sin) + 'm ' + (-(x1 - kalınlık) * cos) + " " + ((x1 - kalınlık) * sin) + 'm ' + 0 + " " + (y1) + ' l' + (en * cos) + " " + (en * sin) + ' v' + " " + boy + " " + 'l' + " " + (-en * cos) + " " + (-en * sin) + 'z " />' +
                '<path d="m ' + (z1 * cos) + " " + ((z1) * sin) + 'm ' + (-x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + (en * cos) + " " + (en * sin) + ' l' + " " + (kalınlık * cos) + " " + (-kalınlık * sin) + 'l' + " " + (-en * cos) + " " + (-en * sin) + " " + 'z " />' +
                '<path d="m ' + ((z1 + en * cos)) + " " + (z1 + en * sin) + 'm ' + (-x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + kalınlık * cos + " " + (-kalınlık * sin) + ' v' + " " + boy + " " + 'l' + " " + (-kalınlık * cos) + " " + (+kalınlık * sin) + 'z " />' +
                '</g>'

            break;

        case 3: //üst çizizmi-------üst parça

            izo_path = '<g id="üst " ' + renk1 + ' fill-opacity="1" stroke="black" stroke-width="0.3"	> ' +
                '<path d="m ' + (z1 * cos) + " " + (z1 * sin) + 'm ' + (-x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + (boy * cos) + " " + (-boy * sin) + ' l' + " " + (en * cos) + " " + (en * sin) + " " + 'l' + " " + (-(boy - sol_gir) * cos) + " " + ((boy - sol_gir) * sin) + ' l' + " " + (-(s_gir) * cos) + " " + (-(s_gir) * sin) + 'l' + " " + (-(sol_gir) * cos) + " " + ((sol_gir) * sin) + 'z  " />' +
                //'<path d="m ' + ((z1) * cos) + " " + ((z1) * sin) + 'm ' + (-(x1) * cos) + " " + ((x1) * sin) + 'm ' + 0 + " " + (y1 + kalınlık) + ' l' + " " + (boy * cos) + " " + (-boy * sin) + ' l' + " " + (en * cos) + " " + (en * sin) + " " + 'l' + " " + (-boy * cos) + " " + (boy * sin) + ' z " />' +
                '</g>'

            break;
        case 4: //kapak çizizmi-----ön parça_camlı
            izo_path = '<g id="kapak " ' + renk1 + ' fill-opacity="1" stroke="black" stroke-width="0.3"	> ' +
                '<path d="m ' + (+z1 * cos) + " " + (z1 * sin) + 'm ' + (-x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + (en * cos) + " " + (-en * sin) + ' v' + " " + boy + " " + 'l' + " " + (-en * cos) + " " + (en * sin) + 'z  " />' +
                '<path d="m ' + (+(z1 + kalınlık) * cos) + " " + ((z1 + kalınlık) * sin) + 'm ' + (-x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + (en * cos) + " " + (-en * sin) + ' v' + " " + boy + " " + 'l' + " " + (-en * cos) + " " + (en * sin) + 'z  " />' +
                '<path d="m ' + (+(z1) * cos) + " " + ((z1) * sin) + 'm ' + (-x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + (kalınlık * cos) + " " + (kalınlık * sin) + ' l' + " " + en * cos + " " + (-en * sin) + 'l' + " " + (-kalınlık * cos) + " " + (-kalınlık * sin) + " " + 'z " />' +
                '<path d="m ' + (+(z1) * cos) + " " + ((z1) * sin) + 'm ' + (-x1 * cos) + " " + (x1 * sin) + 'm ' + 0 + " " + (y1) + ' l' + " " + kalınlık * cos + " " + (kalınlık * sin) + ' v' + " " + boy + " " + 'l' + " " + (-kalınlık * cos) + " " + (-kalınlık * sin) + " " + 'z " />' +
                '</g>'
            break;
        default:
            break;

    }

    return izo_path
}

module.exports.rect_ön = function rect_ön(x1, y1, z1, en, boy, kalınlık, s_gir, sol_gir, k_acı, tip, renk11) {
    let rect_1 = "";
    let renk1 = 'fill:' + renk11
    let stroke = "black"
    let ek = "             "
    /*`<radialGradient id = "g1" cx = "50%" cy = "50%" r = "50%">
            <stop stop-color = "black" offset = "0%"/>
            <stop stop-color = "teal" offset = "50%"/>
            <stop stop-color = "white" offset = "100%"/>
        </radialGradient>`*/

    switch (tip) {
        case 1:

            rect_1 = '<rect ' +
                'x=' + x1 + " " +
                'y=' + y1 + " " +
                'width=' + en + " " +
                'height=' + boy + " " +
                'style="' + " " +
                renk1 + ';' +
                'stroke:' + stroke + ';' +
                'stroke-width:1' + ';' +
                'fill-opacity:' + 0.5 + ';' +
                'stroke-opacity:1"/>' + ';' +
                ek;

            break;
        case 2:
            rect_1 = '<rect ' +
                'x=' + x1 + " " +
                'y=' + y1 + " " +
                'width=' + kalınlık + " " +
                'height=' + boy + " " +
                'style="' + "  " +
                renk1 + ';' +
                'stroke:' + stroke + ';' +
                'stroke-width:0.1' + ';' +
                'fill-opacity:' + 0.5 + ';' +
                'stroke-opacity:1"/>';

            break;
        case 3:
            rect_1 = '<rect ' +
                'x=' + x1 + " " +
                'y=' + y1 + " " +
                'width=' + boy + " " +
                'height=' + kalınlık + " " +
                'style="' + " " +
                renk1 + ';' +
                'stroke:' + stroke + ';' +
                'stroke-width:0.1' + ';' +
                'fill-opacity:' + 0.5 + ';' +
                'stroke-opacity:1"/>';

            break;
        case 4:
            rect_1 = '<rect ' +
                'x=' + x1 + " " +
                'y=' + y1 + " " +
                'width=' + en + " " +
                'height=' + boy + " " +
                'style="' + " " +
                renk1 + ';' +
                'stroke:' + stroke + ';' +
                'stroke-width:0.1' + ';' +
                'fill-opacity:' + 0.5 + ';' +
                'stroke-opacity:1"/>';
            '<rect ' +
            'x=' + (x1 + 6) + " " +
            'y=' + (y1 + 6) + " " +
            'width=' + (en - 12) + " " +
            'height=' + (boy - 12) + " " +
            'style="' + " " +
            renk1 + ';' +
            'stroke:' + stroke + ';' +
            'stroke-width:0.1' + ';' +
            'fill-opacity:' + 0.5 + ';' +
            'stroke-opacity:1"/>';

            break;

        default:
            break;

    }
    //console.log("rect_ön=" + rect.ön)
    return rect_1

}

module.exports.rect_üst = function rect_üst(x1, y1, z1, en, boy, kalınlık, s_gir, sol_gir, k_acı, tip, renk11) {
    let rect_2 = "";
    let renk1 = 'fill:' + renk11
    let stroke = "black"
    let ek = "             "
    /*`<radialGradient id = "g1" cx = "50%" cy = "50%" r = "50%">
            <stop stop-color = "black" offset = "0%"/>
            <stop stop-color = "teal" offset = "50%"/>
            <stop stop-color = "white" offset = "100%"/>
        </radialGradient>`*/
    switch (tip) {
        case 1:

            rect_2 = '<rect ' +
                'x=' + x1 + " " +
                'y=' + z1 + " " +
                'width=' + en + " " +
                'height=' + kalınlık + " " +
                'style="' + " " +
                renk1 + ';' +
                'stroke:' + stroke + ';' +
                'stroke-width:1' + ';' +
                'fill-opacity:' + 0.5 + ';' +
                'stroke-opacity:1"/>';

            break;
        case 2:

            rect_2 = '<rect ' +
                'x=' + x1 + " " +
                'y=' + z1 + " " +
                'width=' + kalınlık + " " +
                'height=' + en + " " +
                'style="' + " " +
                renk1 + ';' +
                'stroke:' + stroke + ';' +
                'stroke-width:0.1' + ';' +
                'fill-opacity:' + 0.5 + ';' +
                'stroke-opacity:1"/>';
            break;
        case 3:

            rect_2 = '<rect ' +
                'x=' + x1 + " " +
                'y=' + z1 + " " +
                'width=' + boy + " " +
                'height=' + en + " " +
                'style="' + " " +
                renk1 + ';' +
                'stroke:' + stroke + ';' +
                'stroke-width:0.1' + ';' +
                'fill-opacity:' + 0.5 + ';' +
                'stroke-opacity:1"/>' + ';' +
                ek;
            break;
        case 4:

            rect_2 = '<rect ' +
                'x=' + x1 + " " +
                'y=' + z1 + " " +
                'width=' + en + " " +
                'height=' + kalınlık + " " +
                'style="' + " "
            renk1 + ';' +
            'stroke:' + stroke + ';' +
            'stroke-width:0.1' + ';' +
            'fill-opacity:' + 0.5 + ';' +
            'stroke-opacity:1"/>';

            break;

        default:
            break;

    }
    //console.log("rect_ön=" + rect.ön)
    return rect_2
}

/*
module.exports function svg_ciz(x1, y1, z1, en, boy, kalınlık, tip, renk11) {
	//svg_ön(p_x, p_y, p_z, p_en, p_boy, p_kalınlık, p_tip, p_renk)
	let renk1 = 'fill:' + renk11
	let stroke = "black"
	let rect = {
		ön: "",
		üst: "",
	}

	let ek = "             "
	/*`<radialGradient id = "g1" cx = "50%" cy = "50%" r = "50%">
            <stop stop-color = "black" offset = "0%"/>
            <stop stop-color = "teal" offset = "50%"/>
            <stop stop-color = "white" offset = "100%"/>
        </radialGradient>`

	switch (tip) {
	case 1:

		rect.ön = '<rect ' +
			'x=' + x1 + " " +
			'y=' + y1 + " " +
			'width=' + en + " " +
			'height=' + boy + " " +
			'style="' + " " +
			renk1 + ';' +
			'stroke:' + stroke + ';' +
			'stroke-width:1' + ';' +
			'fill-opacity:' + 0.5 + ';' +
			'stroke-opacity:1"/>' + ';' +
			ek;
		rect.üst = '<rect ' +
			'x=' + x1 + " " +
			'y=' + z1 + " " +
			'width=' + en + " " +
			'height=' + kalınlık + " " +
			'style="' + " " +
			renk1 + ';' +
			'stroke:' + stroke + ';' +
			'stroke-width:1' + ';' +
			'fill-opacity:' + 0.5 + ';' +
			'stroke-opacity:1"/>';

		break;
	case 2:
		rect.ön = '<rect ' +
			'x=' + x1 + " " +
			'y=' + y1 + " " +
			'width=' + kalınlık + " " +
			'height=' + boy + " " +
			'style="' + "  " +
			renk1 + ';' +
			'stroke:' + stroke + ';' +
			'stroke-width:0.1' + ';' +
			'fill-opacity:' + 0.5 + ';' +
			'stroke-opacity:1"/>';
		rect.üst = '<rect ' +
			'x=' + x1 + " " +
			'y=' + z1 + " " +
			'width=' + kalınlık + " " +
			'height=' + en + " " +
			'style="' + " " +
			renk1 + ';' +
			'stroke:' + stroke + ';' +
			'stroke-width:0.1' + ';' +
			'fill-opacity:' + 0.5 + ';' +
			'stroke-opacity:1"/>';
		break;
	case 3:
		rect.ön = '<rect ' +
			'x=' + x1 + " " +
			'y=' + y1 + " " +
			'width=' + boy + " " +
			'height=' + kalınlık + " " +
			'style="' + " " +
			renk1 + ';' +
			'stroke:' + stroke + ';' +
			'stroke-width:0.1' + ';' +
			'fill-opacity:' + 0.5 + ';' +
			'stroke-opacity:1"/>';
		rect.üst = '<rect ' +
			'x=' + x1 + " " +
			'y=' + z1 + " " +
			'width=' + boy + " " +
			'height=' + en + " " +
			'style="' + " " +
			renk1 + ';' +
			'stroke:' + stroke + ';' +
			'stroke-width:0.1' + ';' +
			'fill-opacity:' + 0.5 + ';' +
			'stroke-opacity:1"/>' + ';' +
			ek;
		break;
	case 4:
		rect.ön = '<rect ' +
			'x=' + x1 + " " +
			'y=' + y1 + " " +
			'width=' + en + " " +
			'height=' + boy + " " +
			'style="' + " " +
			renk1 + ';' +
			'stroke:' + stroke + ';' +
			'stroke-width:0.1' + ';' +
			'fill-opacity:' + 0.5 + ';' +
			'stroke-opacity:1"/>';
		'<rect ' +
		'x=' + (x1 + 6) + " " +
		'y=' + (y1 + 6) + " " +
		'width=' + (en - 12) + " " +
		'height=' + (boy - 12) + " " +
		'style="' + " " +
		renk1 + ';' +
			'stroke:' + stroke + ';' +
			'stroke-width:0.1' + ';' +
			'fill-opacity:' + 0.5 + ';' +
			'stroke-opacity:1"/>';
		rect.üst = '<rect ' +
			'x=' + x1 + " " +
			'y=' + z1 + " " +
			'width=' + en + " " +
			'height=' + kalınlık + " " +
			'style="' + " "
		renk1 + ';' +
			'stroke:' + stroke + ';' +
			'stroke-width:0.1' + ';' +
			'fill-opacity:' + 0.5 + ';' +
			'stroke-opacity:1"/>';

		break;

	default:
		break;

	}
	//console.log("rect_ön=" + rect.ön)
	return rect

}
*/

//----------------------------------
// The following code demonstrates how to call the add
// function from your site's page code or site code.

/*
import {add} from 'public/svg_duz.js'

$w.onReady(function () {
    let sum = add(6,7);
    console.log(sum);
});
*/

//The following code demonstrates how to call the add
//function in one of your site's backend files.

/*
import {add} from 'public/svg_duz.js'

module.exports function usingFunctionFromPublic(a, b) {
	return add(a,b);
}
*/