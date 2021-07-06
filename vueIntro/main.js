
const app = Vue.createApp({
    data(){
        return{
            product: "Product Name",
            productDescription: "Product description",
            image: "https://via.placeholder.com/400x400",
            url:"https://example.com",
            inventory:15,
            details: ["details 1","details 2","details 3"],
            variants: [
                {id:1234,color:"green"},
                {id:1235,color:"blue"},
            ]
        }
    }
})