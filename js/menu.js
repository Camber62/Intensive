const restourant = 'gusi-lebedi'


fetch(`./db/${restourant}.json`)
    .then((response) => response.json())
    .then((data) => {
        renderItem(data)
    })


    .catch((error) => {
            // console.log(error);
        }
    );


const renderItem = (data) => {

    console.log(data)
}