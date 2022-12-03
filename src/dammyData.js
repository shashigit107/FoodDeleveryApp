
export const itemsData = [
       {
              _id: "1",
              type: "nonVeg",
              selected: true,
              Img: require("./images/best_restaurent_1.jpg")
       },
       {
              _id: "2",
              type: "Veg",
              selected: false,
              Img: require("./images/VegFood.png")
       },
       {
              _id: "3",
              type: "fastFood",
              selected: false,
              Img: require("./images/fastFood.png")
       },
       {
              _id: "4",
              type: "softDink",
              selected: false,
              Img: require("./images/coffee.jpeg")
       },
       {
              _id: "5",
              type: "dessert",
              selected: false,
              Img: require("./images/dessert.png")
       },
       {
              _id: "6",
              type: "Alcohal",
              selected: false,
              Img: require("./images/alcohal.jpg")
       }
]
export const verticalFlatListData = [
       {
              _id: "1",
              type: "nonVeg",
              resturant: [
                     {
                            id: '11',
                            quantity:1,
                            price:400,
                            restaurantName:"Zehra",
                            Img: require("./images/chicken_biryani.png"),
                            viewImage: [
                                   {
                                          Img: require("./images/chicken_biryani.png")
                                   },
                                   {
                                          Img: require("./images/chicken_cury.png")
                                   },
                                   {
                                          Img: require("./images/chicken_biryani.png")
                                   },
                                   {
                                          Img: require("./images/chicken_cury.png")
                                   }
                            ]
                     },
                     {
                            id: '12',
                            quantity:1,
                            price:200,
                            restaurantName:"Kings Roll",
                            Img: require("./images/chicken_cury.png"),
                            viewImage: [
                                   {
                                          Img: require("./images/chicken_biryani.png")
                                   },
                                   {
                                          Img: require("./images/chicken_cury.png")
                                   }
                            ]
                     },
                     {
                            id: '13',
                            quantity:1,
                            price:300,
                            restaurantName:"Kaleem Biryani",
                            Img: require("./images/chicken_fry.png"),
                            viewImage: [
                                   {
                                          Img: require("./images/chicken_biryani.png")
                                   },
                                   {
                                          Img: require("./images/chicken_cury.png")
                                   }
                            ]
                     },
                     {
                            id: '14',
                            quantity:1,
                            price:100,
                            restaurantName:"Hydrabadi Chicken Shop",
                            Img: require("./images/chicken_rosted.png"),
                            viewImage: [
                                   {
                                          Img: require("./images/chicken_biryani.png")
                                   },
                                   {
                                          Img: require("./images/chicken_cury.png")
                                   }
                            ]
                     },
              ]

       },
       {
              _id: "2",
              type: "Veg",
              resturant: [
                     {
                            id: '11',
                            quantity:1,
                            price:400,
                            restaurantName:"Stayam Food Shop",
                            Img: require("./images/veg_panir_do_payaja.jpg"),
                            viewImage: [
                                   {
                                          Img: require("./images/veg_panir_do_payaja.jpg")
                                   },
                                   {
                                          Img: require("./images/veg_dhosa.jpg")
                                   }
                            ]
                     },
                     {
                            id: '12',
                            quantity:1,
                            price:400,
                            restaurantName:"Ranjan Food Shop",
                            Img: require("./images/veg_dhosa.jpg"),
                            viewImage: [
                                   {
                                          Img: require("./images/veg_panir_do_payaja.jpg")
                                   },
                                   {
                                          Img: require("./images/veg_dhosa.jpg")
                                   }
                            ]
                     },
                     {
                            id: '13',
                            quantity:1,
                            price:120,
                            restaurantName:"Shashi Food Shop",
                            Img: require("./images/veg_panir_handi.jpg"),
                            viewImage: [
                                   {
                                          Img: require("./images/veg_panir_do_payaja.jpg")
                                   },
                                   {
                                          Img: require("./images/veg_dhosa.jpg")
                                   }
                            ]
                     },
                     {
                            id: '14',
                            quantity:1,
                            price:290,
                            // restaurantName:"Stayam Food Shop",
                            restaurantName:"Mamata Food Shop",
                            Img: require("./images/veg_thali.png"),
                            viewImage: [
                                   {
                                          Img: require("./images/veg_panir_do_payaja.jpg")
                                   },
                                   {
                                          Img: require("./images/veg_dhosa.jpg")
                                   }
                            ]
                     },
              ]
       },
       {
              _id: "3",
              type: "fastFood",
              resturant: [
                     {
                            id: '11',
                            quantity:1,
                            price:40,
                            restaurantName:"nisha Food Shop",
                            Img: require("./images/fastFood_burger.jpg"),
                            viewImage: [
                                   {
                                          Img: require("./images/fastFood_burger.jpg")
                                   },
                                   {
                                          Img: require("./images/fastFood_maggie.png")
                                   }
                            ]
                     },
                     {
                            id: '12',
                            quantity:1,
                            price:50,
                            restaurantName:"rashi Food Shop",
                            Img: require("./images/fastFood_maggie.png"),
                            viewImage: [
                                   {
                                          Img: require("./images/fastFood_burger.jpg")
                                   },
                                   {
                                          Img: require("./images/fastFood_maggie.png")
                                   }
                            ]
                     },
                     {
                            id: '13',
                            quantity:1,
                            price:60,
                            restaurantName:"sumit Food Shop",
                            Img: require("./images/fastFood_samosa.jpg"),
                            viewImage: [
                                   {
                                          Img: require("./images/fastFood_burger.jpg")
                                   },
                                   {
                                          Img: require("./images/fastFood_maggie.png")
                                   }
                            ]
                     },
                     {
                            id: '14',
                            quantity:1,
                            price:70,
                            restaurantName:"Ankit Food Shop",
                            Img: require("./images/fastFood.png"),
                            viewImage: [
                                   {
                                          Img: require("./images/fastFood_burger.jpg")
                                   },
                                   {
                                          Img: require("./images/fastFood_maggie.png")
                                   }
                            ]
                     },
              ]
       },
       {
              _id: "4",
              type: "softDink",
              resturant: [
                     {
                            id: '11',
                            quantity:1,
                            price:90,
                            restaurantName:"nisha Wine Shop",
                            Img: require("./images/softDrink_coco_cola.jpg"),
                            viewImage: [
                                   {
                                          Img: require("./images/softDrink_coco_cola.jpg")
                                   },
                                   {
                                          Img: require("./images/softDrink_maza.jpg")
                                   }
                            ]
                     },
                     {
                            id: '12',
                            quantity:1,
                            price:95,
                            restaurantName:"kunal Wine Shop",
                            Img: require("./images/softDrink_maza.jpg"),
                            viewImage: [
                                   {
                                          Img: require("./images/softDrink_coco_cola.jpg")
                                   },
                                   {
                                          Img: require("./images/softDrink_maza.jpg")
                                   }
                            ]
                     },

              ]
       },
       {
              _id: "5",
              type: "dessert",
              resturant: [
                     {
                            id: '11',
                            quantity:1,
                            price:400,
                            restaurantName:"kunal desert Shop",
                            Img: require("./images/dessert_whilte_rasogulla.png"),
                            viewImage: [
                                   {
                                          Img: require("./images/dessert_whilte_rasogulla.png")
                                   },
                                   {
                                          Img: require("./images/dessert.png")
                                   }
                            ]
                     },
                     {
                            id: '12',
                            quantity:1,
                            price:540,
                            restaurantName:" rashi Shop",
                            Img: require("./images/dessert.png"),
                            restaurantName:"kunal Wine Shop",
                            viewImage: [
                                   {
                                          Img: require("./images/dessert_whilte_rasogulla.png")
                                   },
                                   {
                                          Img: require("./images/dessert.png")
                                   }
                            ]
                     },
                     {
                            id: '13',
                            quantity:1,
                            price:60,
                            restaurantName:" rashi Shop",
                            Img: require("./images/dessert_laddu.png"),
                            viewImage: [
                                   {
                                          Img: require("./images/dessert_whilte_rasogulla.png")
                                   },
                                   {
                                          Img: require("./images/dessert.png")
                                   }
                            ]
                     },

              ]
       },
       {
              _id: "6",
              type: "Alcohal",
              resturant: [
                     {
                            id: '11',
                            quantity:1,
                            price:490,
                            Img: require("./images/alcohal_redWine.jpg"),
                            restaurantName:" rashi wine Shop",
                            viewImage: [
                                   {
                                          Img: require("./images/alcohal_redWine.jpg")
                                   },
                                   {
                                          Img: require("./images/alcohal_jackDaniels.jpg")
                                   }
                            ]
                     },
                     {
                            id: '12',
                            quantity:1,
                            price:900,
                            restaurantName:" rashi wine Shop",
                            Img: require("./images/alcohal_jackDaniels.jpg"),
                            viewImage: [
                                   {
                                          Img: require("./images/alcohal_redWine.jpg")
                                   },
                                   {
                                          Img: require("./images/alcohal_jackDaniels.jpg")
                                   }
                            ]
                     },

              ]
       }

]


