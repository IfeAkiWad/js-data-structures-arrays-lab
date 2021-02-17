// Write your solution here
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop("Garfield")
}

function destructivelyRemoveFirstDriver() {
    drivers.shift("Milo")
}

function appendDriver(name) {
    let newDrivers = [...drivers, name]
    return newDrivers
}

function   prependDriver(name) {
    let newDrivers = [name, ...drivers]
    return newDrivers
}

function removeLastDriver() {
    let copyOfDrivers = drivers.slice(0, -1)
    return copyOfDrivers
}

function  removeFirstDriver() {
    let copyOfDrivers = drivers.slice(1)
    return copyOfDrivers
}