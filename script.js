/* 
'Lavash': {
                    info: 'Big Cheese',
                    price: 15000
                },
                'Hot-dog': {
                    info: 'mini',
                    price: 8500
                },
                'Cola': {
                    info: '1.5 L',
                    price: 9000
                }
console.log(Sizning buyurtmangiz: Lavash Big Cheese, Hot-dog mini, Cola 1.5 L,  | yetqazib berish xizmati
    bilan bo'lgan narx 41500 yetkazish xaqqi (9000)); */




    function calc(obj) {

        let users = cartObj()


        for(key in users) {
            
            
            let sum = 0
            for (key2 in users[key]) {
                if(key2 == 'price'){
                    sum = sum + users[key][key2] + 9000
                }
            }
            
            
            for(key2 in users[key]) {
                
                if(key2 == 'info') {

                    let a = `${key} ${users[key][key2]}`
                    console.log(`Sizning buyurtmangiz: ${a} | Yetkazib berish xizmati bilan bo'lgan narx ${sum} (9000)`);
                }
            }
            
            
        }

        console.log(obj);
    }
    
    calc(cartObj())