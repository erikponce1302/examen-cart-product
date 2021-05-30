import { types } from "../types";

const initialState = {
    products: [],
    productFilter: [],
    productDetail: {
        announced: "",
        audioJack: "",
        battery: "",
        bluetooth: "",
        brand: "",
        chipset: "",
        cpu: "",
        dimentions: "",
        displayResolution: "",
        displaySize: "",
        displayType: "",
        edge: "",
        externalMemory: "",
        gprs: "",
        gpu: "",
        id: "",
        imgUrl: "",
        model: "",
        networkTechnology: "",
        os: "",
        price: "",
        primaryCamera: "",
        radio: "",
        ram: "",
        secondaryCmera: "",
        sensors: "",
        sim: "",
        speaker: "",
        status: "",
        usb: "",
        nfc: "",
        weight: "",
        gps: "",
        networkSpeed: "",
        wlan: [],
        colors: [],
        internalMemory:[],
        options: {
            colors: [{code: "", name: ""}],
            storages: [{code: "", name: ""}]
        },
    }
}

const product = ( state= initialState, action ) => {
    switch (action.type) {
        case types.productSetAll:
            return {
                ...state,
                products: action.payload.data
            }
        case types.productSetById:
            return {
                ...state,
                productDetail: action.payload.data
            }
        case types.productClean:
            return {
                ...state,
                productDetail: initialState.productDetail
            }
        case types.productFilterSet:
            return {
                ...state,
                productFilter: action.payload.data
            }
        default:
            return {...state};
    }
}

export default product;