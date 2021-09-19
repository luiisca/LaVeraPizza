"use strict";
export const state = {
  onView: false,
  scrollbar: {},
  mapsCarIcon: HTMLElement,

  usersLocation: {},
  mapInstance: {},

  directionsService: {},
  directionsRenderer: {},

  popup: {},
  route: {
    result: {},
    status: "",
    travelDistance: "",
    travelDuration: "",
    middleStepCoors: {},
  },
  mapEl: HTMLElement,
};

const getUsersLocation = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.watchPosition(
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
export const initMap = async function () {
  try {
    state.usersLocation = await getUsersLocation();

    state.mapInstance = new google.maps.Map(state.mapEl, {
      center: state.usersLocation,
      zoom: 15,
    });

    console.log(state.usersLocation, "1users location");
    console.log(map, "2map instance");

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

        console.log(state.route.travelDistance, "15popup class travelDis");
        console.log(state.route.travelDuration, "16popup class travelDur");

        distanceSpan.textContent = `${state.route.travelDistance}`;
        durationSpan.textContent = `${state.route.travelDuration}`;

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
    state.directionsService = new google.maps.DirectionsService();
    state.directionsRenderer = new google.maps.DirectionsRenderer();

    console.log(state.directionsService, "3initmap directionsService");
    console.log(state.directionsRenderer, "4initmap  directionsRenderer");

    state.directionsRenderer.setMap(state.mapInstance);

    const calcRoute = async function () {
      try {
        console.log("5calcroute try");

        const request = {
          origin: state.usersLocation,
          destination: {
            lat: -9.122253649985707,
            lng: -78.52881618909174,
          },
          travelMode: "DRIVING",
        };

        const resolved = function (result, status) {
          state.route.result = result;
          state.route.status = status;
          console.log(state.route.result, "6resolved function inside");
          console.log(state.route.status, "7resolved function status outsie");

          // Neccesary variables to place marker on the right spot and show distance and travel duration
          const middleSteps = Math.round(
            state.route.result.routes[0].legs[0].steps.length / 2 - 1
          );
          console.log(middleSteps, "8resolved function middlesteps");
          state.route.middleStepCoors = {
            lat: state.route.result.routes[0].legs[0].steps[
              middleSteps
            ].lat_lngs[0].lat(),
            lng: state.route.result.routes[0].legs[0].steps[
              middleSteps
            ].lat_lngs[0].lng(),
          };
          console.log(
            state.route.middleStepCoors,
            "9resolved function middleStepcoors"
          );
          state.route.travelDuration =
            state.route.result.routes[0].legs[0].duration.text;
          state.route.travelDistance =
            state.route.result.routes[0].legs[0].distance.text;

          // Send state.route.result object to get the route automatcally rendered by directionsRenderer
          if (state.route.status === "OK") {
            state.directionsRenderer.setDirections(state.route.result);
            console.log(
              state.route.status,
              "10resolved function status inside if"
            );
          }
        };

        await state.directionsService.route(request, resolved).then(() => {
          console.log("11inside await route function");
        });
      } catch (err) {
        console.error(err, "calcroute");
      }
    };
    await calcRoute();
    const { lat, lng } = state.route.middleStepCoors;
    console.log(lat, lng, "12initmap lat,lng from middleStepCoors");
    state.popup = new Popup(
      new google.maps.LatLng(lat, lng),
      state.popupContent
    );
    console.log(state.popup, "21popup instance");
    state.popup.setMap(state.mapInstance);
    if (state.popup) return;
    console.log("22did it return?");
  } catch (err) {
    console.error(err, "initmap");
  }
};
