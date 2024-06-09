import { FiturChatPengelola } from "../../components/FiturChatPengelola";
import { FiturDeteksi } from "../../components/FiturDeteksi";
import { FiturJadwalSampah } from "../../components/FiturJadwalSampah";
import { FiturTagihanIuran } from "../../components/FiturTagihanIuran";
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import { SideBarWrapper } from "../../components/SideBarWrapper";
import { SubJudulFix } from "../../components/SubJudulFix";

export const HomeAdmin = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[2181px] relative">
        <FiturJadwalSampah
          calendar="../../../static/img/calendar-5.png"
          className="!absolute !left-[323px] !top-[86px]"
          property1="default"
        />
        <FiturTagihanIuran
          className="!absolute !left-[834px] !top-[86px]"
          group="../../../static/img/group-1000002067-2.png"
          property1="default"
        />
        <FiturChatPengelola className="!absolute !left-[324px] !top-[243px]" property1="default" />
        <div className="flex w-[997px] h-[62px] items-center justify-between pt-[20px] pb-0 px-0 absolute top-[2034px] left-[324px] border-t-[0.5px] [border-top-style:solid] border-variable-collection-pure-black">
          <button className="all-[unset] box-border items-start inline-flex relative flex-[0_0_auto]">
            <div className="items-center justify-center gap-[8px] inline-flex relative flex-[0_0_auto]">
              <img className="relative w-[20px] h-[20px]" alt="Arrow left" src="../../../static/img/arrow-left.svg" />
              <div className="font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black leading-[var(--text-sm-medium-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                Sebelumnya
              </div>
            </div>
          </button>
          <div className="inline-flex items-start gap-[2px] relative flex-[0_0_auto]">
            <div className="relative w-[40px] h-[40px] bg-primary-1 rounded-[8px] overflow-hidden">
              <div className="w-[40px] h-[40px] items-center justify-center p-[12px] rounded-[8px] flex relative">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  1
                </div>
              </div>
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
              <div className="w-[40px] h-[40px] items-center justify-center p-[12px] rounded-[8px] flex relative">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  2
                </div>
              </div>
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
              <div className="w-[40px] h-[40px] items-center justify-center p-[12px] rounded-[8px] flex relative">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  3
                </div>
              </div>
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
              <div className="w-[40px] h-[40px] items-center justify-center p-[12px] rounded-[8px] flex relative">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  ...
                </div>
              </div>
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
              <div className="w-[40px] h-[40px] items-center justify-center p-[12px] rounded-[8px] flex relative">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  8
                </div>
              </div>
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
              <div className="w-[40px] h-[40px] items-center justify-center p-[12px] rounded-[8px] flex relative">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  9
                </div>
              </div>
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
              <div className="w-[40px] h-[40px] items-center justify-center p-[12px] rounded-[8px] flex relative">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  10
                </div>
              </div>
            </div>
          </div>
          <button className="all-[unset] box-border items-start inline-flex relative flex-[0_0_auto]">
            <div className="items-center justify-center gap-[8px] inline-flex relative flex-[0_0_auto]">
              <div className="font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black leading-[var(--text-sm-medium-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                Selanjutnya
              </div>
              <img className="relative w-[20px] h-[20px]" alt="Arrow right" src="../../../static/img/arrow-right.svg" />
            </div>
          </button>
        </div>
        <div className="absolute w-[486px] h-[491px] top-[471px] left-[324px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
          <div className="flex flex-col w-[451px] items-start gap-[32px] absolute top-[16px] left-[18px]">
            <div className="flex-col items-start gap-[24px] self-stretch w-full flex-[0_0_auto] flex relative">
              <img
                className="relative self-stretch w-full h-[238.12px] ml-[-0.17px] mr-[-0.17px] object-cover"
                alt="Sampah di TPA talang"
                src="../../../static/img/sampah-di-tpa-talang-gulo-kota-jambi-5-1.png"
              />
              <div className="flex-col h-[100px] gap-px flex items-start relative self-stretch w-full">
                <p className="relative self-stretch h-[34px] mt-[-1.00px] font-body-1-bold font-[number:var(--body-1-bold-font-weight)] text-tersier-2 text-[length:var(--body-1-bold-font-size)] tracking-[var(--body-1-bold-letter-spacing)] leading-[var(--body-1-bold-line-height)] [font-style:var(--body-1-bold-font-style)]">
                  Jambi.tribunnews.com • 22 Maret 2024
                </p>
                <div className="h-[60px] gap-[16px] flex items-start relative self-stretch w-full">
                  <p className="relative flex-1 mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-tersier-2 text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                    Atasi Persoalan Sampah, Pemkot Jambi Keluarkan Instruksi Wali Kota
                  </p>
                  <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap.svg" />
                </div>
                <p className="relative self-stretch mb-[-55.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                  Atasi permasalahan sampah Pemerintah Kota (Pemkot) Jambi mengeluarkan instruksi Wali Kota No 5 Tahun
                  2024.
                </p>
              </div>
            </div>
          </div>
          <div className="left-[6px] flex w-[451px] items-start gap-[8px] absolute top-[443px]">
            <div className="items-start mix-blend-multiply inline-flex relative flex-[0_0_auto]">
              <div className="items-center justify-center px-[10px] py-[2px] bg-primary-1 rounded-[16px] inline-flex relative flex-[0_0_auto]">
                <div className="font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-center leading-[var(--body-2-semibold-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-2-semibold-font-size)] tracking-[var(--body-2-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Sampah
                </div>
              </div>
            </div>
            <div className="items-start mix-blend-multiply inline-flex relative flex-[0_0_auto]">
              <div className="items-center justify-center px-[10px] py-[2px] bg-primary-1 rounded-[16px] inline-flex relative flex-[0_0_auto]">
                <div className="font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-center leading-[var(--body-2-semibold-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-2-semibold-font-size)] tracking-[var(--body-2-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Instruksi Wali Kota
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[486px] h-[491px] top-[471px] left-[834px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
          <div className="flex flex-col w-[451px] items-start gap-[32px] absolute top-[16px] left-[18px]">
            <div className="flex-col items-start gap-[24px] self-stretch w-full flex-[0_0_auto] flex relative">
              <img
                className="relative self-stretch w-full h-[235px] object-cover"
                alt="Img"
                src="../../../static/img/img-20240308-150338-1-1.png"
              />
              <div className="flex-col h-[100px] gap-px flex items-start relative self-stretch w-full">
                <p className="relative self-stretch h-[34px] mt-[-1.00px] font-body-1-bold font-[number:var(--body-1-bold-font-weight)] text-tersier-2 text-[length:var(--body-1-bold-font-size)] tracking-[var(--body-1-bold-letter-spacing)] leading-[var(--body-1-bold-line-height)] [font-style:var(--body-1-bold-font-style)]">
                  Infojambi.com • 8 Maret 2024
                </p>
                <div className="h-[60px] gap-[16px] flex items-start relative self-stretch w-full">
                  <p className="relative flex-1 mt-[-1.00px] [font-family:'Nunito',Helvetica] font-bold text-tersier-2 text-[18px] tracking-[0.09px] leading-[27px]">
                    DLH Provinsi Jambi Ajak Masyarakat Bersihkan Sampah di Danau Sipin
                  </p>
                  <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap-5.svg" />
                </div>
                <p className="relative self-stretch mb-[-35.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                  Dinas Lingkungan Hidup (DLH) Provinsi Jambi melakukan aksi Bersih Negeri, memperingati Hari Peduli
                  Sampah Nasional (HPSN) 2024.
                </p>
              </div>
            </div>
          </div>
          <div className="left-[6px] flex w-[451px] items-start gap-[8px] absolute top-[443px]">
            <div className="items-start mix-blend-multiply inline-flex relative flex-[0_0_auto]">
              <div className="items-center justify-center px-[10px] py-[2px] bg-primary-1 rounded-[16px] inline-flex relative flex-[0_0_auto]">
                <div className="font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-center leading-[var(--body-2-semibold-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-2-semibold-font-size)] tracking-[var(--body-2-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Sampah
                </div>
              </div>
            </div>
            <div className="items-start mix-blend-multiply inline-flex relative flex-[0_0_auto]">
              <div className="items-center justify-center px-[10px] py-[2px] bg-primary-1 rounded-[16px] inline-flex relative flex-[0_0_auto]">
                <div className="font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-center leading-[var(--body-2-semibold-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-2-semibold-font-size)] tracking-[var(--body-2-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Dinas Lingkungan Hidup
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[486px] h-[491px] top-[986px] left-[324px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
          <div className="flex flex-col w-[451px] items-start gap-[32px] absolute top-[16px] left-[18px]">
            <div className="flex-col items-start gap-[24px] self-stretch w-full flex-[0_0_auto] flex relative">
              <img
                className="relative self-stretch w-full h-[239px] object-cover"
                alt="Lautan sampah"
                src="../../../static/img/lautan-sampah-berserakan-dipinggiran-jalan-kota-jambi-169-1.png"
              />
              <div className="flex-col h-[100px] gap-px flex items-start relative self-stretch w-full">
                <p className="relative self-stretch h-[34px] mt-[-1.00px] font-body-1-bold font-[number:var(--body-1-bold-font-weight)] text-tersier-2 text-[length:var(--body-1-bold-font-size)] tracking-[var(--body-1-bold-letter-spacing)] leading-[var(--body-1-bold-line-height)] [font-style:var(--body-1-bold-font-style)]">
                  detikSumbagsel • 1 Februari 2024
                </p>
                <div className="h-[60px] gap-[16px] flex items-start relative self-stretch w-full">
                  <p className="relative flex-1 mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-tersier-2 text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                    Jorok! Sampah Menumpuk di Pinggir Jalan Lintas Telanaipura Jambi
                  </p>
                  <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap-5.svg" />
                </div>
                <p className="relative self-stretch mb-[-35.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                  Sampah berserakan di sepanjang pinggir jalan lintas di Kelurahan Teluk Kenali, Kecamatan Telanaipura,
                  Kota Jambi.
                </p>
              </div>
            </div>
          </div>
          <div className="left-[6px] flex w-[451px] items-start gap-[8px] absolute top-[443px]">
            <div className="items-start mix-blend-multiply inline-flex relative flex-[0_0_auto]">
              <div className="items-center justify-center px-[10px] py-[2px] bg-primary-1 rounded-[16px] inline-flex relative flex-[0_0_auto]">
                <div className="font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-center leading-[var(--body-2-semibold-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-2-semibold-font-size)] tracking-[var(--body-2-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Sampah Liar
                </div>
              </div>
            </div>
            <div className="items-start mix-blend-multiply inline-flex relative flex-[0_0_auto]">
              <div className="items-center justify-center px-[10px] py-[2px] bg-primary-1 rounded-[16px] inline-flex relative flex-[0_0_auto]">
                <div className="font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-center leading-[var(--body-2-semibold-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-2-semibold-font-size)] tracking-[var(--body-2-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Jalan Lintas
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[486px] h-[491px] top-[986px] left-[834px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
          <div className="flex flex-col w-[451px] items-start gap-[32px] absolute top-[16px] left-[18px]">
            <div className="flex-col items-start gap-[24px] self-stretch w-full flex-[0_0_auto] flex relative">
              <img
                className="relative self-stretch w-full h-[239px] object-cover"
                alt="Img"
                src="../../../static/img/img-20240104-wa0123-1.png"
              />
              <div className="flex-col h-[100px] gap-px flex items-start relative self-stretch w-full">
                <p className="relative self-stretch h-[34px] mt-[-1.00px] font-body-1-bold font-[number:var(--body-1-bold-font-weight)] text-tersier-2 text-[length:var(--body-1-bold-font-size)] tracking-[var(--body-1-bold-letter-spacing)] leading-[var(--body-1-bold-line-height)] [font-style:var(--body-1-bold-font-style)]">
                  Infopublik.id • 4 Januari 2024
                </p>
                <div className="h-[60px] gap-[16px] flex items-start relative self-stretch w-full">
                  <p className="relative flex-1 mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-tersier-2 text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                    Pemkot Jambi Denda Masyarakat yang Buang Sampah Sembarangan
                  </p>
                  <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap-5.svg" />
                </div>
                <p className="relative self-stretch mb-[-35.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                  Dua orang oknum warga Kota Jambi tertangkap tangan membuang sampah tidak&nbsp;&nbsp;pada waktunya.
                </p>
              </div>
            </div>
          </div>
          <div className="left-[9px] flex w-[451px] items-start gap-[8px] absolute top-[443px]">
            <div className="items-start mix-blend-multiply inline-flex relative flex-[0_0_auto]">
              <div className="items-center justify-center px-[10px] py-[2px] bg-primary-1 rounded-[16px] inline-flex relative flex-[0_0_auto]">
                <div className="font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-center leading-[var(--body-2-semibold-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-2-semibold-font-size)] tracking-[var(--body-2-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Sampah Liar
                </div>
              </div>
            </div>
            <div className="items-start mix-blend-multiply inline-flex relative flex-[0_0_auto]">
              <div className="items-center justify-center px-[10px] py-[2px] bg-primary-1 rounded-[16px] inline-flex relative flex-[0_0_auto]">
                <div className="font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-center leading-[var(--body-2-semibold-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-2-semibold-font-size)] tracking-[var(--body-2-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Denda
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[486px] h-[491px] top-[1501px] left-[324px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
          <div className="flex flex-col w-[451px] items-start gap-[32px] absolute top-[16px] left-[18px]">
            <div className="flex-col items-start gap-[24px] self-stretch w-full flex-[0_0_auto] flex relative">
              <img
                className="relative self-stretch w-full h-[240px] object-cover"
                alt="Img"
                src="../../../static/img/01hfbavvv0kxve2xb3d9jjv6w8-1.png"
              />
              <div className="flex-col h-[100px] gap-px flex items-start relative self-stretch w-full">
                <p className="relative self-stretch h-[34px] mt-[-1.00px] font-body-1-bold font-[number:var(--body-1-bold-font-weight)] text-tersier-2 text-[length:var(--body-1-bold-font-size)] tracking-[var(--body-1-bold-letter-spacing)] leading-[var(--body-1-bold-line-height)] [font-style:var(--body-1-bold-font-style)]">
                  Kumparan.com • 19 November 2023
                </p>
                <div className="h-[60px] gap-[16px] flex items-start relative self-stretch w-full">
                  <p className="relative flex-1 mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-tersier-2 text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                    Botol Plastik: Ancaman Lingkungan yang Mendesak untuk Dihadapi?
                  </p>
                  <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap-5.svg" />
                </div>
                <p className="relative self-stretch mb-[-35.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                  Negara Indonesia merupakan salah satu negara yang menghasilkan limbah plastic yang cukup tinggi
                </p>
              </div>
            </div>
          </div>
          <div className="left-[6px] flex w-[451px] items-start gap-[8px] absolute top-[443px]">
            <div className="items-start mix-blend-multiply inline-flex relative flex-[0_0_auto]">
              <div className="items-center justify-center px-[10px] py-[2px] bg-primary-1 rounded-[16px] inline-flex relative flex-[0_0_auto]">
                <div className="font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-center leading-[var(--body-2-semibold-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-2-semibold-font-size)] tracking-[var(--body-2-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Botol Plastik
                </div>
              </div>
            </div>
            <div className="items-start mix-blend-multiply inline-flex relative flex-[0_0_auto]">
              <div className="items-center justify-center px-[10px] py-[2px] bg-primary-1 rounded-[16px] inline-flex relative flex-[0_0_auto]">
                <div className="font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-center leading-[var(--body-2-semibold-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-2-semibold-font-size)] tracking-[var(--body-2-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Ancaman
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[486px] h-[491px] top-[1501px] left-[834px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
          <div className="flex flex-col w-[451px] items-start gap-[32px] absolute top-[16px] left-[18px]">
            <div className="flex-col items-start gap-[24px] self-stretch w-full flex-[0_0_auto] flex relative">
              <img
                className="relative self-stretch w-full h-[238px] object-cover"
                alt="Element sampah"
                src="../../../static/img/30082019-sampah-648316104d498a39ae413ce2-1.png"
              />
              <div className="flex-col h-[100px] gap-px flex items-start relative self-stretch w-full">
                <p className="relative self-stretch h-[34px] mt-[-1.00px] font-body-1-bold font-[number:var(--body-1-bold-font-weight)] text-tersier-2 text-[length:var(--body-1-bold-font-size)] tracking-[var(--body-1-bold-letter-spacing)] leading-[var(--body-1-bold-line-height)] [font-style:var(--body-1-bold-font-style)]">
                  Kompasiana.com • 9 Juni 2023
                </p>
                <div className="h-[60px] gap-[16px] flex items-start relative self-stretch w-full">
                  <p className="relative flex-1 mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-tersier-2 text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                    Jambi Hadapi Masalah Serius dengan Tingginya Jumlah Sampah
                  </p>
                  <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap-5.svg" />
                </div>
                <p className="relative self-stretch mb-[-35.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                  Kota Jambi menghadapi masalah serius akibat meningkatnya jumlah sampah yang belum teratasi dengan
                  baik.
                </p>
              </div>
            </div>
          </div>
          <div className="left-[6px] flex w-[451px] items-start gap-[8px] absolute top-[443px]">
            <div className="items-start mix-blend-multiply inline-flex relative flex-[0_0_auto]">
              <div className="items-center justify-center px-[10px] py-[2px] bg-primary-1 rounded-[16px] inline-flex relative flex-[0_0_auto]">
                <div className="font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-center leading-[var(--body-2-semibold-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-2-semibold-font-size)] tracking-[var(--body-2-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Sampah
                </div>
              </div>
            </div>
            <div className="items-start mix-blend-multiply inline-flex relative flex-[0_0_auto]">
              <div className="items-center justify-center px-[10px] py-[2px] bg-primary-1 rounded-[16px] inline-flex relative flex-[0_0_auto]">
                <div className="font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-center leading-[var(--body-2-semibold-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-2-semibold-font-size)] tracking-[var(--body-2-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Kota Jambi
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubJudulFix
          className="!gap-[15px] !flex !absolute !left-[324px] !w-[996px] !top-[408px]"
          line="../../../static/img/line-18-1.svg"
          lineClassName="!self-stretch !w-full"
          subSubJudulClassName="!flex-1 !flex !grow"
          text="Berita Seputar Sampah"
        />
        <FiturDeteksi
          className="!absolute !left-[834px] !top-[243px]"
          group="../../../static/img/group-1000002107-2.png"
          property1="default"
        />
        <a href="/login"></a>
        <NavbarUserFitur className="!fixed !left-[324px] !top-0" profilArrowDown="../../../static/img/arrow-down-2-3.svg" />
        <SideBarWrapper
          className="!h-[2248px] !fixed !left-0 !top-0"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
          sideBarDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          sideBarPropertyDefaultClassName="!flex-[0_0_auto] !bg-secondary-1"
        />
      </div>
    </div>
  );
};
