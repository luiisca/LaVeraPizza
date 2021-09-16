"use strict";
export const state = {
  onView: false,
  // map: {}
};
let map;

const getUsersLocation = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        resolve({ lat, lng });
      },
      (err) => {
        const error = `ERROR ${err.code}: ${err.message}`;
        reject(error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
      }
    );
  });
};
let sent = false;
export const initMap = async function () {
  try {
    const usersLocation = await getUsersLocation();
    map = new google.maps.Map(document.getElementById("map"), {
      center: usersLocation,
      zoom: 15,
    });
    console.log(usersLocation, "1users location");
    console.log(map, "2map instance");
    let popup;
    let middleStepCoors;
    let travelDuration;
    let travelDistance;
    class Popup extends google.maps.OverlayView {
      position;
      containerDiv;
      constructor(posi, content) {
        super();
        this.position = posi;
        console.log(content, "13popup constructor content");
        console.log(posi, "14popup class posi");
        // This zero-height div is positioned at the bottom of the bubble.
        const bubbleAnchor = document.createElement("div");
        const distanceSpan = document.querySelector(".distance");
        const durationSpan = document.querySelector(".duration");

        content.classList.add("popup-bubble");
        bubbleAnchor.classList.add("popup-bubble-anchor");

        console.log(travelDistance, "15popup class travelDis");
        console.log(travelDuration, "16popup class travelDur");

        distanceSpan.textContent = `${travelDistance}`;
        durationSpan.textContent = `${travelDuration}`;

        bubbleAnchor.appendChild(content);
        // This zero-height div is positioned at the bottom of the tip.
        this.containerDiv = document.createElement("div");
        this.containerDiv.classList.add("popup-container");
        this.containerDiv.appendChild(bubbleAnchor);
        // Optionally stop clicks, etc., from bubbling up to the map.
        Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
      }
      /** Called when the popup is added to the map. */
      onAdd() {
        this.getPanes().floatPane.appendChild(this.containerDiv);
        console.log("17popup class onadd function");
      }
      /** Called when the popup is removed from the map. */
      onRemove() {
        if (this.containerDiv.parentElement) {
          this.containerDiv.parentElement.removeChild(this.containerDiv);
          console.log("18popup class onremove function in if");
        }
        console.log("18popup class onremove function");
      }
      /** Called each frame when the popup needs to draw itself. */
      draw() {
        const divPosition = this.getProjection().fromLatLngToDivPixel(
          this.position
        );
        // Hide the popup when it is far out of view.
        const display =
          Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
            ? "block"
            : "none";
        console.log(display, "19poup class draw function display value");
        if (display === "block") {
          this.containerDiv.style.left = divPosition.x + "px";
          this.containerDiv.style.top = divPosition.y + "px";
          console.log("20popup class draw function if1");
        }

        if (this.containerDiv.style.display !== display) {
          this.containerDiv.style.display = display;
          console.log("20popup class draw function if2");
        }
        console.log("20popup class draw function");
      }
    }
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    console.log(directionsService, "3initmap directionsService");
    console.log(directionsRenderer, "4initmap  directionsRenderer");

    directionsRenderer.setMap(map);

    const calcRoute = async function () {
      try {
        console.log("5calcroute try");
        const request = {
          origin: usersLocation,
          destination: {
            lat: -9.122253649985707,
            lng: -78.52881618909174,
          },
          travelMode: "DRIVING",
        };

        const resolved = function (result, status) {
          sent = true;
          console.log(result, "6resolved function inside");
          console.log(status, "7resolved function status outsie");

          // Neccesary variables to place marker on the right spot and show distance and travel duration
          const middleSteps = Math.round(
            result.routes[0].legs[0].steps.length / 2 - 1
          );
          console.log(middleSteps, "8resolved function middlesteps");
          middleStepCoors = {
            lat: result.routes[0].legs[0].steps[middleSteps].lat_lngs[0].lat(),
            lng: result.routes[0].legs[0].steps[middleSteps].lat_lngs[0].lng(),
          };
          console.log(middleStepCoors, "9resolved function middleStepcoors");
          travelDuration = result.routes[0].legs[0].duration.text;
          travelDistance = result.routes[0].legs[0].distance.text;

          // Send result object to get the route automatcally rendered by directionsRenderer
          if (status === "OK") {
            directionsRenderer.setDirections(result);
            console.log(status, "10resolved function status inside if");
          }
        };

        await directionsService.route(request, resolved).then(() => {
          console.log(sent, "11inside await route function");
        });
      } catch (err) {
        console.error(err, "calcroute");
      }
    };
    await calcRoute();
    const { lat, lng } = middleStepCoors;
    console.log(lat, lng, "12initmap lat,lng from middleStepCoors");
    popup = new Popup(
      new google.maps.LatLng(lat, lng),
      document.getElementById("content")
    );
    console.log(popup, "21popup instance");
    popup.setMap(map);
    if (popup) return;
    console.log("22did it return?");
  } catch (err) {
    console.error(err, "initmap");
  }
};
