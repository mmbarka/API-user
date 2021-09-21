
let dataUsers = [];


const fetchUsers = async () => {
    await fetch('https://randomuser.me/api/?results=24')
    .then((res) => res.json())
    .then((data) => dataUsers = data.results)
};


const displayUser = async () => {
    await fetchUsers();

    const dateConvert = (date) =>{
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            day: 'numeric', 
            year: 'numeric',
            month: 'long' 
        });
        return newDate;
    }

    const dayCal = (date) => {
        let today = new Date();
        let todayTimestamp = Date.parse(today);

        registeredTimestamp = Date.parse(date);

        let day = Math.floor((todayTimestamp - registeredTimestamp)/(86400000));
        return day;
    }
    
    document.body.innerHTML = dataUsers.map((user) => 
        `<div class="card">
            <img src="${user.picture.large}" alt="photo de ${user.name.first} ${user.name.last}" /img>
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.location.city}, ${dateConvert(user.dob.date)}</p>
            <em>Membre depuis: ${dayCal(user.registered.date)}  jours</em>
        </div>`
    ).join("");
};

displayUser();