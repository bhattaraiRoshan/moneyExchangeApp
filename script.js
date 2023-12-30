ApiUrl = 'https://v6.exchangerate-api.com/v6/b951616ff58282446c085090/latest/USD'




const displayData = (data)=>{
console.log(data);
    const {conversion_rates: CR, time_last_update_utc: updateTime } = data;
    let d = new Date(updateTime)
    let sydneyTime = d.toLocaleString(undefined, {timeZone: 'Australia/Sydney'})
    
    

}








const fetchData = () =>{

    fetch(ApiUrl)
    .then((response)=> response.json())
    .then((data)=>{
        displayData(data)
    })
}


fetchData()