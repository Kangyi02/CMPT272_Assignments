import { PigsController } from "./PigService";
import { ChestnutPigs, WhitePigs, BlackPigs, GreyPigs, Category } from "./Pig";

const pigsController = new PigsController();

var dynamicCategory = document.getElementById('categoryInput')! as HTMLSelectElement;

dynamicCategory.addEventListener('change', function () {
    var abilityInfo = "";
    var breedInfo = "";
    switch (dynamicCategory.value) {
        case 'Grey':
            abilityInfo = "<td>Swimming</td><td><input id='swimming' type='number'></td>"
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
            </td>`
            break;
        case 'Chestnut':
            abilityInfo = "<td>Linguistics</td><td><input id='linguistics' type='string'></td>"
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
            </td>`
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
            </td>`
            break;
        case 'Black':
            abilityInfo = "<td>Strength</td><td><input id='strength' type='number'></td>"
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
            </td>`
            break;
        default:
            window.alert("Please select a category!");
            return;
    }
    document.getElementById('abilitiy')!.innerHTML = abilityInfo;
    document.getElementById('breedChoice')!.innerHTML = breedInfo;
    //pigInfoDisplay()

})

document.getElementById('add')!.addEventListener('click', function () {
    var name = document.getElementById('nameInput')! as HTMLInputElement;
    var id = document.getElementById('idInput')! as HTMLInputElement;
    var height = document.getElementById('heightInput')! as HTMLInputElement;
    var weight = document.getElementById('weightInput')! as HTMLInputElement;
    var personality = document.getElementById('personalityInput')! as HTMLInputElement;
    var category = document.getElementById('categoryInput')! as HTMLSelectElement;
    if (!name || !height.value || !weight.value || !personality.value || category.value === "Choose one") {
        window.alert("Please input all the information!");
    }

    switch (category.value) {
        case 'Grey':
            var swimming = document.getElementById('swimming')! as HTMLInputElement;
            var greyBreed = document.getElementById('greyBreed')! as HTMLSelectElement;

            var pigGrey = new GreyPigs(name.value, Category.Grey, greyBreed.value, parseInt(height.value), parseInt(weight.value), personality.value, parseInt(id.value), parseInt(swimming.value).toString(), parseInt(swimming.value))
            if (parseInt(swimming.value) < 0 || parseInt(swimming.value) > 100) {
                window.alert("Please input valid swimming value!")}
            else {
                pigsController.add(pigGrey)
            }
            break;
        case 'Chestnut':
            var linguistics = document.getElementById('linguistics')! as HTMLInputElement;
            var chestnutBreed = document.getElementById('chestnutBreed')! as HTMLSelectElement;

            var pigChestnut = new ChestnutPigs(name.value, Category.Chestnut, chestnutBreed.value, parseInt(height.value), parseInt(weight.value), personality.value, parseInt(id.value), linguistics.value, linguistics.value)
            if (typeof linguistics.value !== "string") {
                window.alert("Please input valid linguistics value!")
            }
            else {
                pigsController.add(pigChestnut)
            }
            break;
        case 'White':
            var running = document.getElementById('running')! as HTMLInputElement;
            var whiteBreed = document.getElementById('whiteBreed')! as HTMLSelectElement;

            var pigWhite = new WhitePigs(name.value, Category.White, whiteBreed.value, parseInt(height.value), parseInt(weight.value), personality.value, parseInt(id.value), parseInt(running.value).toString(), parseInt(running.value))
            if (parseInt(running.value) < 0 || parseInt(running.value) > 100) {
                window.alert("Please input valid running value!")
            }
            else {
                pigsController.add(pigWhite)
            }
            break;
        case 'Black':
            var strength = document.getElementById('strength')! as HTMLInputElement;
            var blackBreed = document.getElementById('blackBreed')! as HTMLSelectElement

            var pigBlack = new BlackPigs(name.value, Category.Black, blackBreed.value, parseInt(height.value), parseInt(weight.value), personality.value, parseInt(id.value), parseInt(strength.value).toString(), parseInt(strength.value))
            if (parseInt(strength.value) < 0 || parseInt(strength.value) > 100) {
                window.alert("Please input valid strength value!")
            }
            else {
                pigsController.add(pigBlack)
            }
            break;
        default:
            window.alert("Please select a category!");
            return;
    }
    pigInfoDisplay();

})


function pigInfoDisplay() {
    var pigs = pigsController.getAll();
    var pigRow = ''
    for (let i = 0; i < pigs.length; i++) {
        console.log(pigs[i])
        var cateRow = ''
        switch (pigs[i].category) 
        {
            case 0:
                cateRow = 'Grey'
                break;
            case 1:
                cateRow = 'Chestnut'
                break;
            case 2:
                cateRow = 'White'
                break;
            case 3:
                cateRow = 'Black'
                break;
        }
        pigRow +=
            `<tr>
            <td class="pigName">` + pigs[i].name + `</td>
            <td class="pigCategory">` + cateRow + `</td>
            <td><button class="moreInfoButton" id="moreInfoButton")">More Info</button></td>
            <td><button class="deleteBotton" id="deleteButton">Delete</button></td>
        </tr>`

    };
    var head = `<th>Name</th>
         <th>Category</th>
        <th></th>`
    document.getElementById('tableHead')!.innerHTML = head;
    document.getElementById('tableContext')!.innerHTML = pigRow;

    var moreInfoButton = document.querySelectorAll("button[id=moreInfoButton]");
    var deleteButton = document.querySelectorAll("button[id=deleteButton]");

    // More info table 
    for (let i = 0; i < pigs.length; i++) {
        moreInfoButton[i].addEventListener('click', function () {
            var rowPig = pigs[i];
            var abilityInfo = ''
            var cateRow = ''
            switch (pigs[i].category) {
                case 0:
                    cateRow = 'Grey'
                    abilityInfo = "Swimming"
                    break;
                case 1:
                    cateRow = 'Chestnut'
                    abilityInfo = "Linguistics"
                    break;
                case 2:
                    cateRow = 'White'
                    abilityInfo = "Running"
                    break;
                case 3:
                    cateRow = 'Black'
                    abilityInfo = "Strength"
                    break;
            }

            document.getElementById('nameInfo')!.innerHTML = rowPig.name;
            document.getElementById('weightInfo')!.innerHTML = rowPig.weight.toString();
            document.getElementById('heightInfo')!.innerHTML = rowPig.height.toString();
            document.getElementById('personalityInfo')!.innerHTML = rowPig.distinctPersonality;
            document.getElementById('categoryInfo')!.innerHTML = cateRow;
            document.getElementById('breedInfo')!.innerHTML = rowPig.breed;
            document.getElementById('abilityInfo')!.innerHTML = abilityInfo;
            document.getElementById('abilityNumber')!.innerHTML = rowPig.ability;

        })
    }

    // delete button
    for (let i = 0; i < pigs.length; i++) {
        deleteButton[i].addEventListener('click', function () {
            if (window.confirm("Are you sure to delete this pig?") == true) {
                let pigID = pigs[i].id
                pigsController.delete(pigID);
                pigs.slice(i, 1)
                pigInfoDisplay();
            }
        })
    }
}


pigInfoDisplay()
