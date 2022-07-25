


fetch(`./db/partners.json`)
    .then((response) => response.json())
    .then((data) => {
        renderItem(data)
    })


    .catch((error) => {
        // console.log(error);
    }
    );


const renderItem = (data) => {
    data.forEach(function (elem){
        console.log(elem)
    })

}