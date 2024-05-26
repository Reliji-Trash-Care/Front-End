/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Daftar } from "../Daftar";
import { LogoPlaceholder } from "../LogoPlaceholder";
import { Masuk } from "../Masuk";
import { MenuItem } from "../MenuItem";
// import imGe from "../../../static/img/group-7.png"
// import gmBa from "../../assets/group-7.png"


export const NavbarGuest = ({ className, logoPlaceholderGroup = "" , menuItemDivClassName }) => {

  return (
    <div
      className={`flex w-[1440px] items-start justify-between px-[120px] py-[10px] relative bg-white rounded-[0px_0px_15px_15px] shadow-[0px_2px_10px_#00000040] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] ${className}`}
    >
      <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
        <LogoPlaceholder
          className="!flex-[0_0_auto] !bg-[unset]"
          elijiTrashCareClassName="!mt-[-1.41px] !ml-[-5.64px]"
          src={logoPlaceholderGroup}
          groupClassName="!h-[25.37px] !w-[25.43px]"
        />
        <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
          <MenuItem
            className="!flex-[0_0_auto]"
            divClassName={menuItemDivClassName}
            property1="default"
            text="Beranda"
          />

          <MenuItem
            className="!flex-[0_0_auto]"
            divClassName="!text-primary-2"
            property1="default"
            text="Tentang Kami"
            // href="/tentangkami"
            // target="_blank"
            // component="a"
            // onClick={handleCase}
          />
          <MenuItem className="!flex-[0_0_auto]" divClassName="!text-primary-2" property1="default" text="Layanan" />
          <MenuItem className="!flex-[0_0_auto]" divClassName="!text-primary-2" property1="default" text="Berita" />
        </div>
      </div>
      <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
        <Masuk className="!flex-[0_0_auto]" property1="default" />
        <Daftar className="!flex-[0_0_auto]" property1="default" />
      </div>
    </div>
  );
};

NavbarGuest.propTypes = {
  logoPlaceholderGroup: PropTypes.string,
};
