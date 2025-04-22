function init() {
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(event) {
    const reader = new FileReader()
    reader.onload = handleFileLoad;
    reader.readAsText(event.target.files[0])
}

function handleFileLoad(event) {
    console.log(event);
    const data = event.target.result;

    // separate the data file into lines
    const separateByLines = data.split('\n')

    var nameAndScore = []

    // Store each line into an array
    for (var i = 0; i < separateByLines.length; i++) {
        var [name, grade] = separateByLines[i].split(',')
        grade = parseFloat(grade)

        if (!isNaN(grade)) {
            nameAndScore.push(name, grade)
        }

    }
    console.log(nameAndScore)
    updateHistogram(nameAndScore)
    displayStats(nameAndScore)
}

function validate(boundaries) {
    let previous = 100
    var boundaries = boundaries
    for (let value of boundaries) {
        if ((!isNaN(value)) && value <= previous) {
            previous = value;
        }
        else {
            console.error("Invalid input:" + value)
            boundaries = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 0]
        }

    }
    return boundaries
}

function updateHistogram(nameAndScore) {
    var firstTable = document.querySelector('.firstTable')
    var inputs = firstTable.getElementsByTagName('input')
    var boundaries = []

    for (let i = 0; i < inputs.length; i++) {
        if (!isNaN(inputs[i].value))
            boundaries[i] = parseFloat(inputs[i].value)
    }

    console.log(boundaries)
    displayHistogram(nameAndScore, boundaries)

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', function () {
            if (!isNaN(inputs[i].value)) {
                inputs = firstTable.getElementsByTagName('input')
                boundaries[i] = parseFloat(inputs[i].value)
                boundaries = validate(boundaries)
                console.log(boundaries)
                displayHistogram(nameAndScore, boundaries)     
            }
        })
    }
}

function displayHistogram(nameAndScore, boundaries) {
    const gradeId = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F'];
    gradeId.forEach(id => {
        document.getElementById(id).innerHTML = '';
    });

    for (let i = 1; i < nameAndScore.length; i += 2) {
        var img = document.createElement("img")
        img.src = "square.jpg"
        img.width = 20
        img.length = 20
        if (boundaries[0] > nameAndScore[i] && nameAndScore[i] >= boundaries[1]) {
            document.getElementById('A+').appendChild(img)
        }
        else if (boundaries[1] >= nameAndScore[i] && nameAndScore[i] >= boundaries[2]) {
            document.getElementById('A').appendChild(img)
        }
        else if (boundaries[2] > nameAndScore[i] && nameAndScore[i] >= boundaries[3]) {
            document.getElementById('A-').appendChild(img)
        }
        else if (boundaries[3] > nameAndScore[i] && nameAndScore[i] >= boundaries[4]) {
            document.getElementById('B+').appendChild(img)
        }
        else if (boundaries[4] > nameAndScore[i] && nameAndScore[i] >= boundaries[5]) {
            document.getElementById('B').appendChild(img)
        }
        else if (boundaries[5] > nameAndScore[i] && nameAndScore[i] >= boundaries[6]) {
            document.getElementById('B-').appendChild(img)
        }
        else if (boundaries[6] > nameAndScore[i] && nameAndScore[i] >= boundaries[7]) {
            document.getElementById('C+').appendChild(img)
        }
        else if (boundaries[7] > nameAndScore[i] && nameAndScore[i] >= boundaries[8]) {
            document.getElementById('C').appendChild(img)
        }
        else if (boundaries[8] > nameAndScore[i] && nameAndScore[i] >= boundaries[9]) {
            document.getElementById('C-').appendChild(img)
        }
        else if (boundaries[9] > nameAndScore[i] && nameAndScore[i] >= boundaries[10]) {
            document.getElementById('D').appendChild(img)
        }
        else if (boundaries[10] > nameAndScore[i] && nameAndScore[i] >= boundaries[11]) {
            document.getElementById('F').appendChild(img)
        }
    }
}

function displayStats(nameAndScore) {
    var grades = []
    var sum = 0
    for (var i = 1; i < nameAndScore.length; i += 2) {
        grades.push(nameAndScore[i])
        sum += nameAndScore[i]
    }
    console.log(grades)

    // calculate highest and lowest scores
    var highest = Math.max(...grades)
    var lowest = Math.min(...grades)
    var highestName, lowestName
    for (var i = 1; i < nameAndScore.length; i += 2) {
        if (nameAndScore[i] === highest) {
            highestName = nameAndScore[i - 1]
        }
        if (nameAndScore[i] === lowest) {
            lowestName = nameAndScore[i - 1]
        }
    }

    // calculate mean value
    var mean = (sum / grades.length).toFixed(2)

    // calculate median value
    grades.sort(function (x, y) {
        if (x < y)
            return -1
        else
            return 1
        return 0
    });

    var index = Math.floor(grades.length / 2)
    var median
    if (grades.length !== 0) {
        median = grades[index].toFixed(2)
    }
    else {
        median = ((grades[index - 1] + grades[index]) / 2).toFixed(2)
    }

    // assign values to the table
    document.getElementById('highest').textContent = highestName + highest + '%'
    document.getElementById('lowest').textContent = lowestName + lowest + '%'
    document.getElementById('mean').textContent = mean
    document.getElementById('median').textContent = median
}