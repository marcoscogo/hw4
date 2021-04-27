window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

  // Create a variable to measure length of database
  let rideMaster = json

  // Loop through the ride database
  for (i = 0; i < rideMaster.length; i++) {

    // Create a variable for memory storage
    let ride = json[i]
    
    // Add HTML design on top of JS
    let rideClass
    let borderColor
    if (ride.purpleRequested == true) {
      rideClass = `Noober Purple`
      borderColor = `purple`
    } else if (ride.numberOfPassengers > 3) {
      rideClass = `Noober XL`
      borderColor = `green`
    } else {
      rideClass = `Noober X`
      borderColor = `black`
    }
    let rideList = document.querySelector(`.rides`)

    // Use ride details to add HTML components
    rideList.insertAdjacentHTML(`beforeend`,
    `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${rideClass}</span>
    </h1>
    <div class="border-4 border-${borderColor}-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${ride.numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${ride.pickupLocation.address}</p>
          <p>${ride.pickupLocation.city} , ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ride.dropoffLocation.address}</p>
          <p>${ride.dropoffLocation.city} , ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
        </div>
      </div>
    </div>`)
  }

})