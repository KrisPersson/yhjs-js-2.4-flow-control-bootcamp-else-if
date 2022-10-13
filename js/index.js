// Biggest

let a
let b 

if (a > b) {
    console.log(a)
} else if (a < b) {
    console.log(b)
}

// Even or not

let n 

if (n % 2 === 0) {
    console.log('Number is even')
} else if (n % 2 === 1) {
    console.log('Number is odd')
}

// Lisebergsvakten

let height = 150

if (height < 150) {
    console.log(false)
} else if (height >= 150) {
    console.log(true)
}

// Lisebergsvakten 2

let accessArmband

if (accessArmband === 'platinum' || accessArmband === 'large') {
    console.log('Congratulations, you can go on Balder!')
} else {
    console.log('Sorry, you can not go on Balder')
}

// BMI kalkylator

let weightKg 
let heightCm

let heightMeters = heightCm / 100

let bmi = weightKg / (heightMeters * heightMeters)

if (bmi < 18.5) {
    console.log('Undervikt')
} else if (bmi <= 25) {
    console.log('Normalvikt')
} else if (bmi <= 30) {
    console.log('Övervikt')
} else if (bmi > 30) {
    console.log('Fetma')
}