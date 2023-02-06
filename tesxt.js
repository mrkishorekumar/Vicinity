let data = {
    name: "",
    sector: "PRIVATE",
    type: "THEATRE",
    description: "",
    address: {
        street: "",
        area: "",
        city: "",
        state: "",
        country: "",
        pinCode: ""
    },
    images: [
        {
            name: "a",
            url: "",
            description: ""
        },
        {
            name: "b",
            url: "",
            description: ""
        },
        {
            name: "c",
            url: "",
            description: ""
        }
    ],
    videos: [
        {
            name: "",
            url: "",
            description: ""
        }
    ],
    accessibilityFeatures: [
        {
            name: "",
            image: {
                name: "",
                url: "",
                description: ""
            },
            video: {
                name: "",
                url: "",
                description: ""
            },
        }
    ],
    buildingOwnerId: 1
};



let newData = {...data, ["images"] : [...data.images, {...data.images[0], ["name"] : "kishore"}]}

console.log(newData)
