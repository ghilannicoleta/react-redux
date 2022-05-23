import RenderImages from "../../utils/RenderImages"
import ImageLogo from "../ImageLogo"
import MenuContactItems from "./MenuItems"
import MenuLanguages from "./MenuLanguages";
import MenuNavigation from "./MenuNavigation";
import MenuCart from "./MenuCart";
import MenuLogin from "./MenuLogin";

const Menu = () => {
  return (
    <header className="header fixed blok top-0 z-50 w-full h-44 bg-black/70">

      <div className="container p-6 h-44 w-1/1 mx-auto flex justify-between">
        <ImageLogo />
        <div className="flex-wrap flex justify-center w-5/6 m-auto ">

          <div className=" flex justify-between h-16 w-5/6">

            <MenuContactItems />

            <div className='img-logo flex'>
              {RenderImages()}
            </div>
            <MenuLanguages />
          </div>

          <div className="flex justify-between h-16 w-5/6">
            <MenuNavigation />

            <div className="flex gap-x-6">
              <MenuLogin />
              <MenuCart />
            </div>

          </div>
        </div>

      </div>


    </header>


  );
};

export default Menu;
