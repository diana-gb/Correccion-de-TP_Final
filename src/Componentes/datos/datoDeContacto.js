const contactos = [
    {
        id: 1,
        name:'Mariela Geist', 
        img_profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwsDdZpzmVp8Di1odIdEiExRyUjuMgMlZpnQ&s',
        last_time_connected: 'ahora',
        is_connected: true,
        message: [
        { 
            id: 2,
            author: 'Mariela Geist',
            content: 'Hola buen dia queria saber si tienen tierra de Diatomeas',
            timestamp: '8:33'
        },
        { 
            id: 3,
            author:'Semilleria PG+' ,
            content: 'Hola buen dia si hay, tengo bolsas de 3 y 5 kg',
            timestamp: '8:34'
        },
        { 
            id: 4,
            author: 'Mariela Geist',
            content: 'Gracias antes del medio dia paso',
            timestamp:'8:34'
        },
        ]
    },
    {
        id: 5,
        name:'Insumos Jardineria',
        img_profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9m33cIC8HwHKCbIcfP04OQjMsGBkSbe75kw&s',
        last_time_connected:'9:44',
        is_connected: false,
        message: [
        { 
            id: 6,
            author: 'Insumos Jardineria',
            content: 'Hola buen dia tengo listo tu pedido',
            timestamp: '8:50'
        },
        { 
            id: 7,
            author: 'Semilleria PG+',
            content: 'Buen dia, gracias',
            timestamp: '8:55'
        }
        ]
    },
    {
        id: 12,
        name:'Juan Carlos',
        img_profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaN4USIgX9LvaPTAXpKDFDJC-aWE6a7_8hwQ&s',
        last_time_connected: 'ahora',
        is_connected: true,
        message: [
        { 
            id: 13,
            author: 'Juan Carlos Pais',
            content: 'Buenass tienen fertilizante liquido para orquideas?',
            timestamp:  '14:58'
        },
        { 
            id: 14,
            author: 'Semilleria PG+',
            content: 'Gracias por escribirnos, en este momento no estamos trabajado te responderemos a la brevedad',
            timestamp: '14:58'
        }
        ]
    },
    {
        id: 15,
        name:'Agustin Torres',
        img_profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmpw7NdS8pakbgDQ80n1at1pOzX7-roi3DA&s',
        last_time_connected: '16:54',
        is_connected: false,
        message: [
        { 
            id: 16,
            author: 'Manuel S',
            content: 'Buenas tardes tienen semillas de melon? estoy buscando la variedad esa que le dicen escrito',
            timestamp: '16:10'
        },
        { 
            id: 17,
            author: 'Semilleria PG+',
            content: 'Hola buenas tardes, si tenemos es el de tipo Cantaloupe',
            timestamp: '16:17'
        },
        { 
            id: 18,
            author: 'Manuel S',
            content: 'Gracias',
            timestamp: '16:17'
        }
        ]
    },
    {
        id: 19,
        name:'Emilia Estrella',
        img_profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIpHLxfBmGKkqKOcthlGu1_hF5SbWguGVhw&s',
        last_time_connected: 'Ahora',
        is_connected: true,
        message: [
        { 
            id: 20,
            author: 'Semilleria PG+',
            content: 'Hola Emilia, te olvidaste de llevar los plantines',
            timestamp: '16:05'
        },
        { 
            id: 21,
            author: 'Emilia Estrella',
            content: 'uuhh no me di cuenta gracias!! en un rato los busco',
            timestamp: '16:08'
        }
        ]
    },
    {
        id: 22,
        name:'Ivan Terrible',
        img_profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOW2wmgmHEwp518vg5YYQhDrjuTKSMruiAQ&s',
        last_time_connected: '02:58',
        is_connected: false,
        message: [
        { 
            id: 23,
            author: 'Ivan Terrible',
            content: 'Hola buenas noches tienen leña ???',
            timestamp: '22:55'
        },
        { 
            id: 24,
            author: 'Semilleria PG+',
            content: 'Gracias por escribirnos, en este momento no estamos trabajado te responderemos a la brevedad',
            timestamp: '22:55'
        },
        { 
            id: 25,
            author: 'Ivan Terrible',
            content: 'HOLAAAAAAA',
            timestamp: '23:15'
        },
        {
            id: 26,
            author: 'Semilleria PG+',
            content: 'Gracias por escribirnos, en este momento no estamos trabajado te responderemos a la brevedad',
            timestamp: '23:15'
        }
        ]
    },
    {
        id: 27,
        name:'Roman Cardoni',
        img_profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEEasT6TzJWKg8M9ls4r2qFHLHA6Nzybur7g&s',
        last_time_connected: '18:23',
        is_connected: false,
        message: [
        { 
            id: 28,
            author: 'Roman Cardoni',
            content: 'Hola tienen algo para pulgones',
            timestamp: '17:30'
        },
        { 
            id: 29,
            author: 'Semilleria PG+',
            content: 'Hola si en que formulacion buscabas?',
            timestamp: '17:31'
        },
        { 
            id: 30,
            author: 'Roman Cardoni',
            content: 'No se bien es para un arbol de mandarina que plante hace poco',
            timestamp: '17:31'
        },
        { 
            id: 31,
            author: 'Semilleria PG+',
            content: 'tengo un formulado de cenizas con ajo que capaz te sirve y sino kerosene y fosforos',
            timestamp: '17:32'
        },
        { 
            id: 32,
            author: 'Roman Cardoni',
            content: 'Dale dale pruebo con los dos',
            timestamp: '17:32'
        }
        ]
    },
    {
        id: 8,
        name:'Wendy Campbell-Purdie', 
        img_profile: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCdZwHnxIsy8MMm9I5lX2SOPbuZ58Mfzbitrywps0yqcp4tPvqlBgMxZsojcDpLdCMVpZ9R4b8E4mrUCNreBZMV1hg2IFGufOJOcI_eKtP',
        last_time_connected: '10:43',
        is_connected: false,
        message: [
        { 
            id: 9,
            author: 'Wendy Campbell-Purdie',
            content: 'Hola tenes mas ejemplares de guayabo, me quede corta',
            timestamp: '9:17'
        },
        { 
            id: 10,
            author: 'Semilleria PG+',
            content: 'Hola, llegan para la tarde',
            timestamp: '9:33'
        },
        { 
            id: 11,
            author: 'Wendy Campbell-Purdie',
            content: 'Dale, te encargo 50',
            timestamp: '9:39'
        },
        ]
    },
    {
        id: 33,
        name:'Antonela D',
        img_profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Fr%C3%BChling_bl%C3%BChender_Kirschenbaum.jpg/500px-Fr%C3%BChling_bl%C3%BChender_Kirschenbaum.jpg',
        last_time_connected: 'Ahora',
        is_connected: true,
        message: [
        { 
            id: 34,
            author: 'Antonela D',
            content: 'Hola como estas? tenes el contacto del muchacho que hace trabajos de jardineria',
            timestamp: '18:11'
        },
        {
            id: 35,
            author: 'Semilleria PG+',
            content: 'Hola Anto si, Juan Pablo se llama ya te lo paso',
            timestamp: '18:15'
        }
        ]
    }
]

export default contactos