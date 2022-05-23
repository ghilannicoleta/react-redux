const API_BASE_ADDRESS = 'http://localhost:3004'


export default class Api {

    static getContactData() {
        const url = API_BASE_ADDRESS + "/phoneNumbers";
        return fetch(url, {
            method: 'GET'
        }).then((data) => data.json())
    }

    static getNavMenu() {
        const url = API_BASE_ADDRESS + "/nav";
        return fetch(url, {
            method: 'GET'
        }).then((data) => data.json())
    }

    static getProductsData() {
        const url = API_BASE_ADDRESS + "/products";
        return fetch(url, {
            method: 'GET'
        }).then((data) => data.json())
    }

    static getProductsByCategoryId(id) {
        const url = API_BASE_ADDRESS + `/products/${id}`;
        return fetch(url, {
            method: 'GET'
        }).then((data) => data.json())
    }

}


