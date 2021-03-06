const renderManagerHTML = function (manager) {
  return `
    <div class="container">
        <div class="row ">
            <div class="col-12 d-flex justify-content-center" style="max-width: 1000px; margin: 3em auto; flex-wrap: wrap;">
                <div class="card" style="margin: 20px;">
                    <div class="card-header">
                        <h2 class="card-title">${manager.getName()}</h2>
                        <h3 class="card-title">Manager</h3>                        
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email:
                                <a href= "mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                            </li>
                            <li class="list-group-item">Office Number:
                                <a href= "${manager.getOfficeNumber()}"> ${manager.getOfficeNumber()}</a>
                            </li>
                        </ul>
                    </div>
                </div>`;
};

const renderEngineerHTML = function (engineer) {
  return `
    <div class="card" style="margin: 20px;">
                    <div class="card-header">
                        <h2 class="card-title">${engineer.getName()}</h2>
                        <h3 class="card-title">Engineer</h3>                        
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">Email:
                                <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                                </li>
                            <li class="list-group-item">GitHub:
                                <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>
                            </li>
                        </ul>
                    </div>
                </div>`;
};

const renderInternHTML = function (intern) {
  return `
    <div class="card" style="margin: 20px;">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">Intern</h3>                        
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email:
                <a href= "mailto:${intern.getEmail()}">${intern.getEmail()}</a>
            </li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>`;
};

const renderHTML = function (teamArray) {
  // for (create for loop for all of the cards, then create new variable and assign all of the cards into the new variable. Then put that variable on line 83)
  let callCards = ``;

  for (let i = 0; i < teamArray.length; i++) {
    if (teamArray[i].getRole() == "manager") {
      callCards += renderManagerHTML(teamArray[i]);
    }
    if (teamArray[i].getRole() == "engineer") {
      callCards += renderEngineerHTML(teamArray[i]);
    }
    if (teamArray[i].getRole() == "intern") {
      callCards += renderInternHTML(teamArray[i]);
    }
  }
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
    crossorigin="anonymous">

    <title>Document</title>
</head>


<body>

    <header>

        <header class="container-fluid bg-danger text-light mb-5 p-3">
            <div class="d-flex justify-content-center">
            <h1>My Team</h1>
            </div>
        </header>

    </header>

    ${callCards}
</div>

</body>
</html>`;
};

module.exports = renderHTML;
