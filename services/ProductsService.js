const PRODUCTS = [
    {
        id: 1,
        name: "Xiaomi Redmi Note 11 Pro 5G (8GB+128GB)",
        price: 4099000,
        image: require("../assets/product_images/phone.jpg"),
        description:
          "6.67 inch with AMOLED 120hz display, and 108 MP triple camera allow you to capture better quality, and smooth scrolling and fast click response with 360hz touch sampling rate ...",
    },
    {
        id: 2,
        name: "Xiaomi TV A2 32inch",
        price: 2199000,
        image: require("../assets/product_images/tv.jpg"),
        description:
          "HD Display, speaker supports Dolby Audio™, DTS-X, dan DTS® Virtual:X Sound, Android TV, with Major contents like Netflix, Prime Video, and YouTube preinstalled and lots of applications are available on google play ...",
    },
    {
        id: 3,
        name: "Xiaomi RedmiBook 15 (8GB+512GB SSD)",
        price: 7999000,
        image: require("../assets/product_images/laptop.png"),
        description:
          "15,6 FHD display allow you to watch any videos/movies with high quality while, this laptop comes with windows 10 home, and fast processor with intel core 13 1115G4 ..."
    },
    {
        id: 4,
        name: "Redmi Buds 3 Lite (Black)",
        price: 249000,
        image: require("../assets/product_images/buds.png"),
        description:
          "Play the beat with redmi buds 3 pro with bluetooth wireless speaker, dynamic driver 6mm"
    }

]

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product) => product.id == id);
}