window.addEventListener('load', (event) => {
    let username;
    username = "nkebenyane";
    requestUserRepos(username);
    console.log(username + ' page is fully loaded');
});


function requestUserRepos(username) {

    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // GitHub endpoint, dynamically passing in specified username
    const url = `https://api.github.com/users/${username}/repos`;

    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', url, true);

    // When request is received
    // Process it here
    xhr.onload = function () {

        // Parse API data into JSON
        const data = JSON.parse(this.response);

        // Loop over each object in data array
        // for (let i in data) {

            // Get the row with id of of userRepos
            let row = document.getElementById('row');

            // Create variable that will create col's to be added to row
            // let col = document.createElement('col');

            // Add Bootstrap list item class to each col
            // col.classList.add('col-xs-12' ,'col-sm-6' ,'col-md-4')

            // Create the html markup for each col
            row.innerHTML = (`
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="filter webdesign">
                        <div class="each-item">
                            <img class="port-image"
                                src="img/projects/p9.jpg" />
                            <div class="cap1">
                                <h3 class="text-capitalize">${data[2].name}</h3>
                                <p>${data[2].description}</p>
                            </div>
                            <div class="cap2 text-center">
                                <p><a href="${data[2].html_url}" class="btn btn-primary">View Repo</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="filter webdesign">
                        <div class="each-item">
                            <img class="port-image"
                                src="img/projects/p10.jpg" />
                            <div class="cap1">
                                <h3 class="text-capitalize">${data[8].name}</h3>
                                <p>${data[8].description}</p>
                            </div>
                            <div class="cap2 text-center">
                                <p><a href="${data[8].html_url}" class="btn btn-primary">View Repo</a></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="filter webdesign">
                        <div class="each-item">
                            <img class="port-image"
                                src="img/projects/p11.jpg" />
                            <div class="cap1">
                                <h3 class="text-capitalize">${data[9].name}</h3>
                                <p>${data[9].description}</p>
                            </div>
                            <div class="cap2 text-center">
                                <p><a href="${data[9].html_url}" class="btn btn-primary">View Repo</a></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="filter webdesign">
                        <div class="each-item">
                            <img class="port-image"
                                src="img/projects/p12.jpg" />
                            <div class="cap1">
                                <h3 class="text-capitalize">${data[12].name}</h3>
                                <p>${data[12].description}</p>
                            </div>
                            <div class="cap2 text-center">
                                <p><a href="${data[12].html_url}" class="btn btn-primary">View Repo</a></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="filter system">
                        <div class="each-item">
                            <img class="port-image"
                                src="img/projects/p1.jpg" />
                            <div class="cap1">
                                <h3 class="text-capitalize">${data[11].name}</h3>
                                <p>${data[11].description}</p>
                            </div>
                            <div class="cap2 text-center">
                                <p><a href="${data[11].html_url}" class="btn btn-primary">View Repo</a></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="filter system">
                        <div class="each-item">
                            <img class="port-image"
                                src="img/projects/p13.png" />
                            <div class="cap1">
                                <h3 class="text-capitalize">${data[14].name}</h3>
                                <p>${data[14].description}</p>
                            </div>
                            <div class="cap2 text-center">
                                <p><a href="${data[14].html_url}" class="btn btn-primary">View Repo</a></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);

            // Append each col to the row
            // row.appendChild(col);

        // }

    }

    // Send the request to the server
    xhr.send();

}