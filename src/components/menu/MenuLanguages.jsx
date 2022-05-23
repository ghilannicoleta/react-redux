import i18n from "../../i18n/i18n";


export const MenuLanguages = () => {
  return (
    <div className="text-[rgba(255,255,255,.5)] cursor-pointer">
      <button
      onClick={() => i18n.changeLanguage('ro')}
      className="hover:text-yellow-400 ">Ro</button> |
      <button
      onClick={() => i18n.changeLanguage('en')}
      className="hover:text-yellow-400 pl-1">En</button>
    </div>
  );
};

export default MenuLanguages;
