System.register(["./PigService", "./Pig"], function (exports_1, context_1) {
    "use strict";
    var PigService_1, Pig_1, pigsController, dynamicCategory;
    var __moduleName = context_1 && context_1.id;
    function pigInfoDisplay() {
        var pigs = pigsController.getAll();
        var pigRow = '';
        for (let i = 0; i < pigs.length; i++) {
            console.log(pigs[i]);
            var cateRow = '';
            switch (pigs[i].category) {
                case 0:
                    cateRow = 'Grey';
                    break;
                case 1:
                    cateRow = 'Chestnut';
                    break;
                case 2:
                    cateRow = 'White';
                    break;
                case 3:
                    cateRow = 'Black';
                    break;
            }
            pigRow +=
                `<tr>
            <td class="pigName">` + pigs[i].name + `</td>
            <td class="pigCategory">` + cateRow + `</td>
            <td><button class="moreInfoButton" id="moreInfoButton")">More Info</button></td>
            <td><button class="deleteBotton" id="deleteButton">Delete</button></td>
        </tr>`;
        }
        ;
        var head = `<th>Name</th>
         <th>Category</th>
        <th></th>`;
        document.getElementById('tableHead').innerHTML = head;
        document.getElementById('tableContext').innerHTML = pigRow;
        var moreInfoButton = document.querySelectorAll("button[id=moreInfoButton]");
        var deleteButton = document.querySelectorAll("button[id=deleteButton]");
        // More info table 
        for (let i = 0; i < pigs.length; i++) {
            moreInfoButton[i].addEventListener('click', function () {
                var rowPig = pigs[i];
                var abilityInfo = '';
                var cateRow = '';
                switch (pigs[i].category) {
                    case 0:
                        cateRow = 'Grey';
                        abilityInfo = "Swimming";
                        break;
                    case 1:
                        cateRow = 'Chestnut';
                        abilityInfo = "Linguistics";
                        break;
                    case 2:
                        cateRow = 'White';
                        abilityInfo = "Running";
                        break;
                    case 3:
                        cateRow = 'Black';
                        abilityInfo = "Strength";
                        break;
                }
                document.getElementById('nameInfo').innerHTML = rowPig.name;
                document.getElementById('weightInfo').innerHTML = rowPig.weight.toString();
                document.getElementById('heightInfo').innerHTML = rowPig.height.toString();
                document.getElementById('personalityInfo').innerHTML = rowPig.distinctPersonality;
                document.getElementById('categoryInfo').innerHTML = cateRow;
                document.getElementById('breedInfo').innerHTML = rowPig.breed;
                document.getElementById('abilityInfo').innerHTML = abilityInfo;
                document.getElementById('abilityNumber').innerHTML = rowPig.ability;
            });
        }
        // delete button
        for (let i = 0; i < pigs.length; i++) {
            deleteButton[i].addEventListener('click', function () {
                if (window.confirm("Are you sure to delete this pig?") == true) {
                    let pigID = pigs[i].id;
                    pigsController.delete(pigID);
                    pigs.slice(i, 1);
                    pigInfoDisplay();
                }
            });
        }
    }
    return {
        setters: [
            function (PigService_1_1) {
                PigService_1 = PigService_1_1;
            },
            function (Pig_1_1) {
                Pig_1 = Pig_1_1;
            }
        ],
        execute: function () {
            pigsController = new PigService_1.PigsController();
            dynamicCategory = document.getElementById('categoryInput');
            dynamicCategory.addEventListener('change', function () {
                var abilityInfo = "";
                var breedInfo = "";
                switch (dynamicCategory.value) {
                    case 'Grey':
                        abilityInfo = "<td>Swimming</td><td><input id='swimming' type='number'></td>";
                        breedInfo =
                            `
            <td>Breed</td>
            <td>
            <select id="greyBreed">
                <option>Choose one</option>
                <option>Mangalica Pig</option>
                <option>Meishan Pig</option>
                <option>Vietnamese Potbelly</option>
                <option>Tamworth Pig</option>
            </select>
            </td>`;
                        break;
                    case 'Chestnut':
                        abilityInfo = "<td>Linguistics</td><td><input id='linguistics' type='string'></td>";
                        breedInfo =
                            `
            <td>Breed</td>
            <td>
            <select id="chestnutBreed">
                <option>Choose one</option>
                <option>Tamworth</option>
                <option>Duroc</option>
                <option>Red Wattle</option>
                <option>Berkshire</option>
            </select>
            </td>`;
                        break;
                    case 'White':
                        abilityInfo = "<td>Running</td><td><input id='running' type='number'></td>";
                        breedInfo =
                            `
            <td>Breed</td>
            <td>
            <select id="whiteBreed">
                <option>Choose one</option>
                <option>Large White</option>
                <option>Landrace</option>
                <option>Chester White</option>
                <option>British Saddleback</option>
            </select>
            </td>`;
                        break;
                    case 'Black':
                        abilityInfo = "<td>Strength</td><td><input id='strength' type='number'></td>";
                        breedInfo =
                            `
            <td>Breed</td>
            <td>
            <select id="blackBreed">
                <option>Choose one</option>
                <option>Large Black</option>
                <option>Wessex Saddleback</option>
                <option>Black Iberian Pig</option>
                <option>Ossabaw Island Pig</option>
            </select>
            </td>`;
                        break;
                    default:
                        window.alert("Please select a category!");
                        return;
                }
                document.getElementById('abilitiy').innerHTML = abilityInfo;
                document.getElementById('breedChoice').innerHTML = breedInfo;
                //pigInfoDisplay()
            });
            document.getElementById('add').addEventListener('click', function () {
                var name = document.getElementById('nameInput');
                var id = document.getElementById('idInput');
                var height = document.getElementById('heightInput');
                var weight = document.getElementById('weightInput');
                var personality = document.getElementById('personalityInput');
                var category = document.getElementById('categoryInput');
                if (!name || !height.value || !weight.value || !personality.value || category.value === "Choose one") {
                    window.alert("Please input all the information!");
                }
                switch (category.value) {
                    case 'Grey':
                        var swimming = document.getElementById('swimming');
                        var greyBreed = document.getElementById('greyBreed');
                        var pigGrey = new Pig_1.GreyPigs(name.value, Pig_1.Category.Grey, greyBreed.value, parseInt(height.value), parseInt(weight.value), personality.value, parseInt(id.value), parseInt(swimming.value).toString(), parseInt(swimming.value));
                        if (parseInt(swimming.value) < 0 || parseInt(swimming.value) > 100) {
                            window.alert("Please input valid swimming value!");
                        }
                        else {
                            pigsController.add(pigGrey);
                        }
                        break;
                    case 'Chestnut':
                        var linguistics = document.getElementById('linguistics');
                        var chestnutBreed = document.getElementById('chestnutBreed');
                        var pigChestnut = new Pig_1.ChestnutPigs(name.value, Pig_1.Category.Chestnut, chestnutBreed.value, parseInt(height.value), parseInt(weight.value), personality.value, parseInt(id.value), linguistics.value, linguistics.value);
                        if (typeof linguistics.value !== "string") {
                            window.alert("Please input valid linguistics value!");
                        }
                        else {
                            pigsController.add(pigChestnut);
                        }
                        break;
                    case 'White':
                        var running = document.getElementById('running');
                        var whiteBreed = document.getElementById('whiteBreed');
                        var pigWhite = new Pig_1.WhitePigs(name.value, Pig_1.Category.White, whiteBreed.value, parseInt(height.value), parseInt(weight.value), personality.value, parseInt(id.value), parseInt(running.value).toString(), parseInt(running.value));
                        if (parseInt(running.value) < 0 || parseInt(running.value) > 100) {
                            window.alert("Please input valid running value!");
                        }
                        else {
                            pigsController.add(pigWhite);
                        }
                        break;
                    case 'Black':
                        var strength = document.getElementById('strength');
                        var blackBreed = document.getElementById('blackBreed');
                        var pigBlack = new Pig_1.BlackPigs(name.value, Pig_1.Category.Black, blackBreed.value, parseInt(height.value), parseInt(weight.value), personality.value, parseInt(id.value), parseInt(strength.value).toString(), parseInt(strength.value));
                        if (parseInt(strength.value) < 0 || parseInt(strength.value) > 100) {
                            window.alert("Please input valid strength value!");
                        }
                        else {
                            pigsController.add(pigBlack);
                        }
                        break;
                    default:
                        window.alert("Please select a category!");
                        return;
                }
                pigInfoDisplay();
            });
            pigInfoDisplay();
        }
    };
});
