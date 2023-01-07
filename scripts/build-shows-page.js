//Function

function listShows(shows)   {
    for (let i = 0; i < shows.length; i++) {
        
        //List Items
        const showsScheduleLi = document.createElement("li");
        showsScheduleLi.classList.add("showsSchedule__item");
        showsScheduleElem.appendChild(showsScheduleLi);

        //Date
        const showInfoDateWrap = document.createElement ("div");
        showInfoDateWrap.classList.add("showsSchedule__date--wrapper");
        showsScheduleLi.appendChild(showInfoDateWrap);

        const showInfoDate = document.createElement("h3");
        showInfoDate.classList.add("showsSchedule__box");
        showInfoDate.classList.add("showsSchedule__box--date");
        showInfoDate.innerText = shows[i].date;
        showInfoDateWrap.appendChild(showInfoDate);

        //Venue
        const showInfoVenueWrap = document.createElement ("div");
        showInfoVenueWrap.classList.add("showsSchedule__venue--wrapper");
        showsScheduleLi.appendChild(showInfoVenueWrap);

        const showInfoVenue = document.createElement("h3");
        showInfoVenue.classList.add("showsSchedule__box");
        showInfoVenue.innerText = shows[i].place;
        showInfoVenueWrap.appendChild(showInfoVenue);

        //Location
        const showInfoLocationWrap = document.createElement ("div");
        showInfoLocationWrap.classList.add("showsSchedule__venue--wrapper");
        showsScheduleLi.appendChild(showInfoLocationWrap);
     
        const showInfoLocation = document.createElement("h3");
        showInfoLocation.classList.add("showsSchedule__box");
        showInfoLocation.innerText = shows[i].place;
        showInfoLocationWrap.appendChild(showInfoLocation);
        
        





    }
}