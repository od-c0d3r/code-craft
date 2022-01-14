// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(nFloors) {
    let initStartFloor = 2;
    let spaces = Number(nFloors);

    return Array.from(Array(nFloors), (floor) => {
        floor = String(`${Array(spaces).join(" ")}${Array(initStartFloor).join('*')}${Array(spaces).join(" ")}`);
        initStartFloor = initStartFloor + 2;
        spaces = spaces - 1;
        return floor;
    });
};


console.log(towerBuilder(3) == ["  *  ", " *** ", "*****"])