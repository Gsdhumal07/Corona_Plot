function updatemap(){
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp =>{
        // console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude= element.longitude;

            cases = element.infected;
            if (cases >250){
                color = "rgb(250,0,0)"
            }
            else {
                color =`rgb(${cases} ,0 ,0)`
            }

            new mapboxgl.Marker({
                draggable:true,
                color: color
            })
                .setLngLat([longitude ,latitude])
                .addTo(map);
        });
    })
}

updatemap();