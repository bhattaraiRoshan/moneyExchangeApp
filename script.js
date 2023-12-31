const ApiUrl = 'https://v6.exchangerate-api.com/v6/b951616ff58282446c085090/latest/USD';
const currencyContainer = document.querySelector('#currency-one1')
const exchangeCurrency = document.querySelector('#currency-two')
const updateTimeElm = document.querySelector('.updateTime');
const amountOne = document.querySelector('#amount_one')
const currencyDiv = document.querySelectorAll('.currency')
const amountTwo = document.querySelector('#amount-two')
const rateElm = document.querySelector('.rate')





const displayData = (data)=>{

    const {conversion_rates: CR, time_last_update_utc: updateTime } = data;
    let d = new Date(updateTime)
    let sydneyTime = d.toLocaleString(undefined, {timeZone: 'Australia/Sydney'})
    updateTimeElm.innerHTML = `Last Updated: ${sydneyTime}`
    let str = ''
    let str2 = ''

    

    for(let elm in CR){
        // console.log(elm);

        str += `
        
        <option value="${elm}">${elm}</option>
        
        
        `;

        str2 += `
        <option value="${elm}">${elm}</option>
        `
    }

    currencyContainer.innerHTML = str
    exchangeCurrency.innerHTML = str2

    currencyContainer.addEventListener('change', (e)=>{
        
        for(let key in CR){
            
            if(e.target.value === key){
                amountOne.value = CR[key]
            }
        }
    
        
    })

    amountOne.addEventListener('keyup', (e)=>{

        console.log(e.target.value);
    })

    exchangeCurrency.addEventListener('change', (e)=>{

        for(let key in CR){

            if(e.target.value === key){

                amountTwo.value = CR[key] * amountOne.value
            }


        }



    })

    amountTwo.addEventListener('keyup', (e)=>{
        console.log(e.target.value);
    })

   
    
    

}








const fetchData = () =>{


    try {

        fetch(ApiUrl)
        .then((response)=> response.json())
        .then((data)=>{
            displayData(data)
        })
        
    } catch (error) {

        console.log(error);
        
    }
}


fetchData()