function workCall() {
    const content = document.getElementById('content');
    const openDialog = document.getElementById('open_dialog');
    const dialog = document.getElementById('dialog');
    const close = document.getElementById('close');
    const submit = document.getElementById('submit');
    const location = document.getElementById('location_entry');
    const grid = document.createElement('div');

    //initialise the use later variables with null.
    let newLocation = null;
    let response = null;
    let jsonData = null;

    openDialog.addEventListener("click", () => {
        dialog.showModal();
    });

    close.addEventListener("click", (e) => {
        e.preventDefault();
        dialog.close();
        clearDialogInputs();
    });

    function locationData(l) {
        this.l = l;
    }

    submit.addEventListener('click', async function () {
        grid.innerHTML = "";
        await setLocation();
        dialog.close();
        clearDialogInputs();
        displayInfo();
    });

    async function setLocation() {
        newLocation = new locationData(location.value);

        try {
            response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5305e84e6228402ba1c105707232612&q=${newLocation.l}`, { mode: 'cors' });
            jsonData = await response.json(); // Parsing of JSON string to JavaScipt object.
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    function displayInfo() {
        const name = document.createElement('p');
        const nameInput = document.createElement('p');
        const country = document.createElement('p');
        const countryInput = document.createElement('p');
        const time = document.createElement('p');
        const timeInput = document.createElement('p');
        const temp = document.createElement('p');
        const tempInput = document.createElement('p');
        const feel = document.createElement('p');
        const feelInput = document.createElement('p');
        const gust = document.createElement('p');
        const gustInput = document.createElement('p');
        const prec = document.createElement('p');
        const precInput = document.createElement('p');
        const pressure = document.createElement('p');
        const pressureInput = document.createElement('p');
        const direction = document.createElement('p');
        const directionInput = document.createElement('p');
        const degree = document.createElement('p');
        const degreeInput = document.createElement('p');
        const wind = document.createElement('p');
        const windInput = document.createElement('p');
        const humidity = document.createElement('p');
        const humidityInput = document.createElement('p');
        const uv = document.createElement('p');
        const uvInput = document.createElement('p');
        const visiblilty = document.createElement('p');
        const visibliltyInput = document.createElement('p');
        const day = document.createElement('p');
        const dayInput = document.createElement('p');

        grid.id = "grid";
        name.textContent = "Entered location "
        nameInput.textContent = jsonData.location.name;
        country.textContent = "Country "
        countryInput.textContent = jsonData.location.country;
        time.textContent = "Date and Time "
        timeInput.textContent = jsonData.location.localtime + " in 24 hour format";
        temp.textContent = "Temperature "
        tempInput.textContent = jsonData.current.temp_c + "°C";
        feel.textContent = "Feels like "
        feelInput.textContent = jsonData.current.feelslike_c + "°C";
        gust.textContent = "Gust Speed ";
        gustInput.textContent = jsonData.current.gust_kph + " Kph";
        prec.textContent = "Precipitation Percentage "
        precInput.textContent = jsonData.current.precip_mm + " mm";
        pressure.textContent = "Pressure "
        pressureInput.textContent = jsonData.current.pressure_mb + " mb";
        direction.textContent = "Wind Direction "
        directionInput.textContent = jsonData.current.wind_dir;
        degree.textContent = "Degree of Wind "
        degreeInput.textContent = jsonData.current.wind_degree + "°";
        wind.textContent = "Wind Speed ";
        windInput.textContent = jsonData.current.wind_kph + " Kph";
        humidity.textContent = "Humidity ";
        humidityInput.textContent = jsonData.current.humidity + "﹪";
        uv.textContent = "Ultraviolet Index ";
        uvInput.textContent = jsonData.current.uv + " uv";
        visiblilty.textContent = "Visiblity ";
        visibliltyInput.textContent = jsonData.current.vis_km + " Km visible";
        day.textContent = "Time of day "
        dayInput.textContent = jsonData.current.is_day ? "It is Day time as of now" : "It is Night time as of now";

        grid.appendChild(name);
        grid.appendChild(nameInput);
        grid.appendChild(country);
        grid.appendChild(countryInput);
        grid.appendChild(time);
        grid.appendChild(timeInput);
        grid.appendChild(feel);
        grid.appendChild(feelInput);
        grid.appendChild(gust);
        grid.appendChild(gustInput);
        grid.appendChild(prec);
        grid.appendChild(precInput);
        grid.appendChild(pressure);
        grid.appendChild(pressureInput);
        grid.appendChild(direction);
        grid.appendChild(directionInput);
        grid.appendChild(degree);
        grid.appendChild(degreeInput);
        grid.appendChild(wind);
        grid.appendChild(windInput);
        grid.appendChild(humidity);
        grid.appendChild(humidityInput);
        grid.appendChild(uv);
        grid.appendChild(uvInput);
        grid.appendChild(visiblilty);
        grid.appendChild(visibliltyInput);
        grid.appendChild(day);
        grid.appendChild(dayInput);
        content.appendChild(grid);
    }

    function clearDialogInputs() {
        location.value = "";
    }
}

export default workCall;
