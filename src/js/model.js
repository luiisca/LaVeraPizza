"use strict";
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
        timeout: 10000,
        maximumAge: 0,
      }
    );
  });
};

export const initMap = async function () {
  const usersLocation = await getUsersLocation();
  console.log(usersLocation);
  map = new google.maps.Map(document.getElementById("map"), {
    center: usersLocation,
    zoom: 15,
  });
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
      // This zero-height div is positioned at the bottom of the bubble.
      const bubbleAnchor = document.createElement("div");
      const distanceSpan = document.querySelector(".distance");
      const durationSpan = document.querySelector(".duration");

      content.classList.add("popup-bubble");
      bubbleAnchor.classList.add("popup-bubble-anchor");

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
    }
    /** Called when the popup is removed from the map. */
    onRemove() {
      if (this.containerDiv.parentElement) {
        this.containerDiv.parentElement.removeChild(this.containerDiv);
      }
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

      if (display === "block") {
        this.containerDiv.style.left = divPosition.x + "px";
        this.containerDiv.style.top = divPosition.y + "px";
      }

      if (this.containerDiv.style.display !== display) {
        this.containerDiv.style.display = display;
      }
    }
  }
  console.log(google.maps);
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  directionsRenderer.setMap(map);

  const calcRoute = async function () {
    const request = {
      origin: usersLocation,
      destination: {
        lat: -9.122253649985707,
        lng: -78.52881618909174,
      },
      travelMode: "DRIVING",
    };
    await directionsService.route(request, function (result, status) {
      console.log(result);
      // Neccesary variables to place marker on the right spot and show distance and travel duration
      const middleSteps = Math.round(
        result.routes[0].legs[0].steps.length / 2 - 1
      );
      middleStepCoors = {
        lat: result.routes[0].legs[0].steps[middleSteps].lat_lngs[0].lat(),
        lng: result.routes[0].legs[0].steps[middleSteps].lat_lngs[0].lng(),
      };
      travelDuration = result.routes[0].legs[0].duration.text;
      travelDistance = result.routes[0].legs[0].distance.text;

      const { lat, lng } = middleStepCoors;
      popup = new Popup(
        new google.maps.LatLng(lat, lng),
        document.getElementById("content")
      );
      popup.setMap(map);
      // Tests
      console.log(result.routes[0].legs[0].steps[middleSteps].lat_lngs[0]);

      // Send result object to get the route automatcally rendered by directionsRenderer
      if (status === "OK") {
        directionsRenderer.setDirections(result);
      }
    });
  };
  calcRoute();
};
