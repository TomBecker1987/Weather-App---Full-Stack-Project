let render = new Renderer()
let tempManager = new TempManager()

const loadPage = async function(){
    let run = await tempManager.getDataFromDB()
    let data = tempManager.cityData
    render.renderData(data)
}

const handleSearch = async function(){
    let input = $("#city-input").val()
    $("#city-input").empty()
    let data = await tempManager.getCityData(input)
    console.log(tempManager.cityData)
    render.renderData(tempManager.cityData)
}

//***************************************

loadPage()


$("#search-button").on("click", function(){
    handleSearch()
})



