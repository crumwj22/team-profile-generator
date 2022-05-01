const renderManagerHTML = function (manager) {
  return `
    <div class="container">
        <div class="row ">
            <div class="col-12 d-flex justify-content-center" style="max-width: 1000px; margin: 3em auto; flex-wrap: wrap;">
                <div class="card" style="margin: 20px;">
                    <div class="card-header">
                        <h2 class="card-title">Name</h2>
                        <h3 class="card-title">Manager</h3>                        
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: </li>
                            <li class="list-group-item">Email: </li>
                            <li class="list-group-item">Office Number: </li>
                        </ul>
                    </div>
                </div>`;
};

const renderEngineerHTML = function (engineer) {
  return `
    <div class="card" style="margin: 20px;">
                    <div class="card-header">
                        <h2 class="card-title">Name</h2>
                        <h3 class="card-title">Engineer</h3>                        
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: </li>
                            <li class="list-group-item">Email: </li>
                            <li class="list-group-item">Office Number: </li>
                        </ul>
                    </div>
                </div>`;
};

const renderInternHTML = function (intern) {
  return `
    <div class="card" style="margin: 20px;">
    <div class="card-header">
        <h2 class="card-title">Name</h2>
        <h3 class="card-title">Intern</h3>                        
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: </li>
            <li class="list-group-item">Email: </li>
            <li class="list-group-item">Office Number: </li>
        </ul>
    </div>
</div>`;
};
