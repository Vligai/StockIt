function toggleDropDown(event) {
  console.log(event.currentTarget);
  $(event.currentTarget).toggleClass("closed");
}

function makeResultHTML(data) {
  let iconClass = data["Recommendation"].toLowerCase();

  return `<div class="dropdown result closed" onclick="toggleDropDown(event)">
            <section class="content">
                <div class="icon ${iconClass}"></div>
                <p> ${data["Ticker"]} </p>
                <p> ${data["Current Price"]} </p>
                <div class="btn-dropdown">
                    <p><strong>${data["Recommendation"]}</strong></p>
                    <div class="icon"></div>
                </div>
            </section>
            <section class="dropdown-content">
                <article class="data">
                    <h3 class="title">Stats</h3>
                    <p class="data-row">
                        <span class="data-head">Current Volume:</span>
                        ${data["Current Volume"]}
                    </p>
                    <p class="data-row">
                        <span class="data-head">90-Day Volume:</span>
                        ${data["90-day Volume"]}
                    </p>
                    <p class="data-row">
                        <span class="data-head">Relative Volume:</span>
                        ${data["Relative Volume"]}
                    </p>
                    <p class="data-row">
                        <span class="data-head">RSI:</span>
                        ${data["RSI"]}
                    </p>
                    <p class="data-row">
                        <span class="data-head">50-day MA:</span>
                        ${data["Relative Volume"]}
                    </p>
                    <p class="data-row">
                        <span class="data-head">200-day MA Volume:</span>
                        ${data["Relative Volume"]}
                    </p>
                    <p class="data-row">
                        <span class="data-head">Price Target:</span>
                        ${data["Price Target"]}
                    </p>
                    <p class="data-row">
                        <span class="data-head">Time Horizon:</span>
                        ${data["Time Horizon"]}
                    </p>
                    <p class="data-row">
                        <span class="data-head">Stop Loss Level:</span>
                        ${data["Stop Loss Level"]}
                    </p>
                    <p class="data-row">
                        <span class="data-head">Risk Reward:</span>
                        ${data["Risk Reward"]}
                    </p>
                </article>
                <article class="description">
                    <h3 class="title">Why?</h3>
                    <p class="text">
                        Alibaba's earnings report came in above expectations, showing YOY growth of 40%. 'Single's Day'
                        sales exceeded last year's figures by 30%, while outlooks and earnings forecasts continue to be
                        upbeat for the name.
                    </p>
                </article>
            </section>
        </div>`;
}

function loadData() {
  return new Promise((resolve, reject) => {
    Papa.parse("/public/data/stocks.csv", {
      dynamicTyping: true,
      download: true,
      header: true,
      complete(res) {
        if (res.errors.length > 0) {
          reject(res);
        }
        resolve(res);
      }
    })
  });
}


let recommendations = [];
let filteredRecs = [];
let resultsContainer;

function init() {
  resultsContainer = $("#results");
  loadData()
      .then((results) => {
        recommendations = results.data;
      }).then(renderData);
}

function renderData() {
  for (let rec of recommendations) {
    resultsContainer.append(makeResultHTML(rec));
  }
}