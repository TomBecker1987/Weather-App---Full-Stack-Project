class TempManager {
    constructor(){
        this.cityData = []
    }
    async getDataFromDB(){
        let data
        let run = await $.get('/cities',function(response){
            data = response
        })
        this.cityData = data
    }
    async getCityData(cityName){
        let myData
        let result = await $.get(`/city/${cityName}`,function(data){
            let dateString = data.current.last_updated
            // let myDate = new Date(dateString)
            let temperature = data.current.temp_c
    
            myData = {
                name: data.location.name,
                updatedAt: dateString,
                temperature: temperature,
                condition: data.current.condition.text,
                conditionPic: data.current.condition.icon
            }
        })
        this.cityData.push(myData)
    }

    saveCityData(cityName){
        let data = this.cityData.find(c => c.name == cityName)
        $.ajax({
            url: `/city/${cityName}`,
            method: "POST",
            data: data ,
            success: function () {
                console.log("post successful")
            }
        })
    }
    removeCity(cityName){
        $.ajax({
            url: `/city/${cityName}`,
            method: "DELETE",
            success: function () {
                console.log("deletion successful")
            }
        })
        loadPage()
    }

}



