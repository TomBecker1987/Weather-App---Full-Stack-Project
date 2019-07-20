class Renderer {
    constructor(){}
    renderData(allCityData){
        $("#main-container").empty();
        let source = $("#main-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template({city:allCityData})
        $("#main-container").append(newHTML)
        $(".save-button").on("click",function(){
            let cityName = $(this).closest(".city").find(".city-name").text()
            tempManager.saveCityData(cityName)
        })
        $(".remove-button").on("click",function(){
            let cityName = $(this).closest(".city").find(".city-name").text()
            tempManager.removeCity(cityName)
        })
    }
}