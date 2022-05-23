import { combineReducers } from "redux";
import setSubMenuDisplayState from "./menu/subMenu.reducer";
import getContactData from "./menu/getContactaData.reducer";
import getNavMenu from "./menu/getNavMenu.reducer";
import setSubMenuNavDisplay from "./menu/subMenuNav.reducer";
import setSubMenuCartDisplay from "./menu/subMenuCart.reducer";
import getProductsData from "./content/getProductsData.reducer";
import getProductsByCategoryId from "./content/getProductsByCategoryId.reducer";

const rootReducer = combineReducers({
    subMenuDisplay: setSubMenuDisplayState,
    contactData: getContactData,
    navMenuData: getNavMenu,
    subMenuNavDisplay: setSubMenuNavDisplay,
    subMenuCartDisplay: setSubMenuCartDisplay,

    productsData: getProductsData,
    productsDataById : getProductsByCategoryId
})

export default rootReducer;