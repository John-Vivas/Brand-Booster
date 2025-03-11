// import mercadopago from "mercadopago";
// export const createOrder = async (req, res) => {
//     mercadopago.configuretions.access_token({
//         access_token: "TEST-2308492934823358-022320-c41698b42f32babecac12e60aecdc734-742665654"
//     })

//     const result = await mercadopago.preferences.create({
//         items: [
//             {
//                 title: "Laptop"
//                 , unit_price: 200.000
//                 , currency_id: "CO",
//                 quantity: 1
//             }
//         ]
//     })
//     res.send('creating order')

// };

import { MercadoPagoConfig, Preference } from "mercadopago";

// Configurar MercadoPago con el nuevo método
const client = new MercadoPagoConfig({
    accessToken: "TEST-2308492934823358-022320-c41698b42f32babecac12e60aecdc734-742665654"
});

export const createOrder = async (req, res) => {

    // const preference = new Preference(client);

    // const result = await preference.create({
    //     items: [
    //         {
    //             title: "Laptop",
    //             unit_price: 200000, 

    //             currency_id: "COP", 
    //             quantity: 1
    //         }
    //     ]
    // });
    // console.log(result)
    res.send('creating order');

};
