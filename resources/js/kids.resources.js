const e = "";
const ok = "ok";
const img = "img";
const src = "src";
const hide = "hide";
const clear = "clear";
const click = "click";
const title = "title";
const static = "static";
const button = "button";
const kidsID = "kidsID";
const imgModalID = "#imgModal";
const kidAltDDD = ".kids-alt";
const kidImgDDD = ".kids-img";
const kidImgDivDDD = ".kids-img-div";
const errorMessageDDD = ".errorMessage";
const kidsSubCategoryDDD = ".kids-sub-category";
const kidsSupCategoryDDD = ".kids-sup-category";

const errorMessage = "Sorry, We could not understand your query (^.^)"
const categories = {
    birds: {
        bat: {
            alt: "BAT",
            src: "/images/birds/bat.png"
        },
        chicken: {
            alt: "CHICKEN",
            src: "/images/birds/chicken.png"
        },
        crow: {
            alt: "CROW",
            src: "/images/birds/crow.png"
        },
        duck: {
            alt: "DUCK",
            src: "/images/birds/duck.png"
        },
        eagle: {
            alt: "EAGLE",
            src: "/images/birds/eagle.png"
        },
        flamingo: {
            alt: "FLAMINGO",
            src: "/images/birds/flamingo.png"
        },
        owl: {
            alt: "OWL",
            src: "/images/birds/owl.png"
        },
        parrot: {
            alt: "PARROT",
            src: "/images/birds/parrot.png"
        },
        pigeon: {
            alt: "PIGEON",
            src: "/images/birds/pigeon.png"
        },
        sparrow: {
            alt: "SPARROW",
            src: "/images/birds/sparrow.png"
        }
    },
    fruits: {
        apple: {
            alt: "APPLE",
            src: "/images/fruits/apple.png"
        },
        apricot: {
            alt: "APPRICOT",
            src: "/images/fruits/apricot.png"
        },
        avocado: {
            alt: "AVOCADO",
            src: "/images/fruits/avocado.png"
        },
        banana: {
            alt: "BANANA",
            src: "/images/fruits/banana.png"
        },
        blackberry: {
            alt: "BLACK BERRY",
            src: "/images/fruits/blackberry.png"
        },
        cherry: {
            alt: "CHERRY",
            src: "/images/fruits/cherry.png"
        },
        coconut: {
            alt: "COCONUT",
            src: "/images/fruits/coconut.png"
        },
        dates: {
            alt: "DATES",
            src: "/images/fruits/dates.png"
        },
        grapes: {
            alt: "GRAPES",
            src: "/images/fruits/grapes.png"
        },
        guava: {
            alt: "GUAVA",
            src: "/images/fruits/guava.png"
        },
        kiwi: {
            alt: "KIWI",
            src: "/images/fruits/kiwi.png"
        },
        lemon: {
            alt: "LEMON",
            src: "/images/fruits/lemon.png"
        },
        mango: {
            alt: "MANGO",
            src: "/images/fruits/mango.png"
        },
        orange: {
            alt: "ORANGE",
            src: "/images/fruits/orange.png"
        },
        papaya: {
            alt: "PAPAYA",
            src: "/images/fruits/papaya.png"
        },
        peach: {
            alt: "PEACH",
            src: "/images/fruits/peach.png"
        },
        pear: {
            alt: "PEAR",
            src: "/images/fruits/pear.png"
        },
        pineapple: {
            alt: "PINEAPPLE",
            src: "/images/fruits/pineapple.png"
        },
        plum: {
            alt: "PLUM",
            src: "/images/fruits/plum.png"
        },
        pomegranate: {
            alt: "POMEGRANATE",
            src: "/images/fruits/pomegranate.png"
        },
        strawberry: {
            alt: "STRAWBERRY",
            src: "/images/fruits/strawberry.png"
        },
        watermelon: {
            alt: "WATERMELON",
            src: "/images/fruits/watermelon.png"
        }
    },
    shapes: {
        oval: {
            alt: "OVAL",
            src: "/images/shapes/oval.png"
        },
        star: {
            alt: "STAR",
            src: "/images/shapes/star.png"
        },
        moon: {
            alt: "MOON",
            src: "/images/shapes/moon.png"
        },
        heart: {
            alt: "HEART",
            src: "/images/shapes/heart.png"
        },
        circle: {
            alt: "CIRCLE",
            src: "/images/shapes/circle.png"
        },
        square: {
            alt: "SQUARE",
            src: "/images/shapes/square.png"
        },
        triangle: {
            alt: "TRIANGLE",
            src: "/images/shapes/triangle.png"
        },
        rectangle: {
            alt: "RECTANGLE",
            src: "/images/shapes/rectangle.png"
        },
        hexagon: {
            alt: "HEXAGON",
            src: "/images/shapes/hexagon.png"
        },
        octagon: {
            alt: "OCTAGON",
            src: "/images/shapes/octagon.png"
        },
        pentagon: {
            alt: "PENTAGON",
            src: "/images/shapes/pentagon.png"
        },
        cube: {
            alt: "cube",
            src: "/images/shapes/cube.png"
        }
    },
    animals: {
        bear: {
            alt: "BEAR",
            src: "/images/animals/bear.png"
        },
        buffalo: {
            alt: "BUFFALO",
            src: "/images/animals/buffalo.png"
        },
        camel: {
            alt: "CAMEL",
            src: "/images/animals/camel.png"
        },
        cat: {
            alt: "CAT",
            src: "/images/animals/cat.png"
        },
        cow: {
            alt: "COW",
            src: "/images/animals/cow.png"
        },
        deer: {
            alt: "DEER",
            src: "/images/animals/deer.png"
        },
        dog: {
            alt: "DOG",
            src: "/images/animals/dog.png"
        },
        donkey: {
            alt: "DONKEY",
            src: "/images/animals/donkey.png"
        },
        elephant: {
            alt: "ELEPHANT",
            src: "/images/animals/elephant.png"
        },
        fox: {
            alt: "FOX",
            src: "/images/animals/fox.png"
        },
        giraffe: {
            alt: "GIRAFFE",
            src: "/images/animals/giraffe.png"
        },
        goat: {
            alt: "GOAT",
            src: "/images/animals/goat.png"
        },
        gorilla: {
            alt: "GORILLA",
            src: "/images/animals/gorilla.png"
        },
        horse: {
            alt: "HORSE",
            src: "/images/animals/horse.png"
        },
        kangaroo: {
            alt: "KANGAROO",
            src: "/images/animals/kangaroo.png"
        },
        lion: {
            alt: "LION",
            src: "/images/animals/lion.png"
        },
        mouse: {
            alt: "MOUSE",
            src: "/images/animals/mouse.png"
        },
        monkey: {
            alt: "MONKEY",
            src: "/images/animals/monkey.png"
        },
        panda: {
            alt: "PANDA",
            src: "/images/animals/panda.png"
        },
        panther: {
            alt: "PANTHER",
            src: "/images/animals/panther.png"
        },
        rabbit: {
            alt: "RABBIT",
            src: "/images/animals/rabbit.png"
        },
        sheep: {
            alt: "SHEEP",
            src: "/images/animals/sheep.png"
        },
        tiger: {
            alt: "TIGER",
            src: "/images/animals/tiger.png"
        },
        wolf: {
            alt: "WOLF",
            src: "/images/animals/wolf.png"
        },
        zebra: {
            alt: "ZEBRA",
            src: "/images/animals/zebra.png"
        }
    },
    numbers: {
        zero: {
            alt: "ZERO",
            src: "/images/numbers/0.png"
        },
        one: {
            alt: "ONE",
            src: "/images/numbers/1.png"
        },
        two: {
            alt: "TWO",
            src: "/images/numbers/2.png"
        },
        three: {
            alt: "THREE",
            src: "/images/numbers/3.png"
        },
        four: {
            alt: "FOUR",
            src: "/images/numbers/4.png"
        },
        five: {
            alt: "FIVE",
            src: "/images/numbers/5.png"
        },
        six: {
            alt: "SIX",
            src: "/images/numbers/6.png"
        },
        seven: {
            alt: "SEVEN",
            src: "/images/numbers/7.png"
        },
        eight: {
            alt: "EIGHT",
            src: "/images/numbers/8.png"
        },
        nine: {
            alt: "NINE",
            src: "/images/numbers/9.png"
        }
    },
    colours: {
        grey: {
            alt: "GREY",
            src: "/images/colours/grey.png"
        },
        green: {
            alt: "GREEN",
            src: "/images/colours/green.png"
        },
        blue: {
            alt: "BLUE",
            src: "/images/colours/blue.png"
        },
        brown: {
            alt: "BROWN",
            src: "/images/colours/brown.png"
        },
        maroon: {
            alt: "MAROON",
            src: "/images/colours/maroon.png"
        },
        orange: {
            alt: "ORANGE",
            src: "/images/colours/orange.png"
        },
        pink: {
            alt: "PINK",
            src: "/images/colours/pink.png"
        },
        purple: {
            alt: "PURPLE",
            src: "/images/colours/purple.png"
        },
        red: {
            alt: "RED",
            src: "/images/colours/red.png"
        },
        yellow: {
            alt: "YELLOW",
            src: "/images/colours/yellow.png"
        },
        white: {
            alt: "WHITE",
            src: "/images/colours/white.png"
        },
        black: {
            alt: "BLACK",
            src: "/images/colours/black.png"
        }
    },
    alphabets: {
        a: {
            alt: "A",
            src: "/images/alphabets/a.png"
        },
        b: {
            alt: "B",
            src: "/images/alphabets/b.png"
        },
        c: {
            alt: "C",
            src: "/images/alphabets/c.png"
        },
        d: {
            alt: "D",
            src: "/images/alphabets/d.png"
        },
        e: {
            alt: "E",
            src: "/images/alphabets/e.png"
        },
        f: {
            alt: "F",
            src: "/images/alphabets/f.png"
        },
        g: {
            alt: "G",
            src: "/images/alphabets/g.png"
        },
        h: {
            alt: "H",
            src: "/images/alphabets/h.png"
        },
        i: {
            alt: "I",
            src: "/images/alphabets/i.png"
        },
        j: {
            alt: "J",
            src: "/images/alphabets/j.png"
        },
        k: {
            alt: "K",
            src: "/images/alphabets/k.png"
        },
        l: {
            alt: "L",
            src: "/images/alphabets/l.png"
        },
        m: {
            alt: "M",
            src: "/images/alphabets/m.png"
        },
        n: {
            alt: "N",
            src: "/images/alphabets/n.png"
        },
        o: {
            alt: "O",
            src: "/images/alphabets/o.png"
        },
        p: {
            alt: "P",
            src: "/images/alphabets/p.png"
        },
        q: {
            alt: "Q",
            src: "/images/alphabets/q.png"
        },
        r: {
            alt: "R",
            src: "/images/alphabets/r.png"
        },
        s: {
            alt: "S",
            src: "/images/alphabets/s.png"
        },
        t: {
            alt: "T",
            src: "/images/alphabets/t.png"
        },
        u: {
            alt: "U",
            src: "/images/alphabets/u.png"
        },
        v: {
            alt: "V",
            src: "/images/alphabets/v.png"
        },
        w: {
            alt: "W",
            src: "/images/alphabets/w.png"
        },
        x: {
            alt: "X",
            src: "/images/alphabets/x.png"
        },
        y: {
            alt: "Y",
            src: "/images/alphabets/y.png"
        },
        z: {
            alt: "Z",
            src: "/images/alphabets/z.png"
        }
    },
    vegetables: {
        cabbage: {
            alt: "CABBAGE",
            src: "/images/vegetables/cabbage.png"
        },
        cauliflower: {
            alt: "CAULIFLOWER",
            src: "/images/vegetables/cauliflower.png"
        },
        coriander: {
            alt: "CORIANDER",
            src: "/images/vegetables/coriander.png"
        },
        corn: {
            alt: "CORN",
            src: "/images/vegetables/corn.png"
        },
        cucumber: {
            alt: "CUCUMBER",
            src: "/images/vegetables/cucumber.png"
        },
        eggplant: {
            alt: "EGGPLANT",
            src: "/images/vegetables/eggplant.png"
        },
        greenpepper: {
            alt: "GREEN PEPPER",
            src: "/images/vegetables/greenpepper.png"
        },
        ladyfingers: {
            alt: "LADY FINGERS",
            src: "/images/vegetables/ladyfingers.png"
        },
        mushroom: {
            alt: "MUSHROOM",
            src: "/images/vegetables/mushroom.png"
        },
        onion: {
            alt: "ONION",
            src: "/images/vegetables/onion.png"
        },
        potato: {
            alt: "POTATO",
            src: "/images/vegetables/potato.png"
        },
        pumpkin: {
            alt: "PUMPKIN",
            src: "/images/vegetables/pumpkin.png"
        },
        redchilli: {
            alt: "RED CHILLI",
            src: "/images/vegetables/redchilli.png"
        },
        salad: {
            alt: "SALAD",
            src: "/images/vegetables/salad.png"
        },
        tomato: {
            alt: "TOMATO",
            src: "/images/vegetables/tomato.png"
        },
    }
}

const synonyms = {
    bird: "birds",
    fruit: "fruits",
    shape: "shapes",
    animal: "animals",
    animal: "animals",
    colour: "colours",
    number: "numbers",
    alphabet: "alphabets",
    vegetable: "vegetables"
}

const subSynonyms = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "to": "two",
    "tu": "two",
    "too": "two",
    "aur": "four",
    "bare": "bear",
    "beer": "bear",
    "dear": "deer",
    "free": "three",
    "grey": "gray",
    "oven": "oval",
    "over": "oval",
    "ladyfinger": "ladyfingers",
}