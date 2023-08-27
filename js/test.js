/*setInterval(() => {
 for (let i = 0; i <= 5; i++) {
    //const element = array[i];
    console.log(i)
    //console.log(i * 2)
    if (i == 5) {
        console.log(i)
    }
} 
}, 1000);*/

var Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.describe = function () {
        return this.name + `, ` + this.age + ` years old`;
    }
}
var jack = new Person(`Jack`, 25);
var jill = new Person(`Jill`, 24);
console.log(jack.describe());
console.log(jill.describe());

expect(concatStrings("abc" + "def").toBe("abcdef"));

var h1 = document.querySelector('h1');
var arr = [
        'Example Domain',
        'First Click',
        'Second Click',
        'Third Click'
    ]
    function handleClicks() {
            switch(h1.innerText) {
                case arr[0]:
                    h1.innerText = arr[1]
                    break
                case arr[1]:
                    h1.innerText = arr[2]
                    break
                case arr[2]:
                    h1.innerText = arr[3]
                    break
                default:
                    h1.innerText = arr[0]
            }
        }
        h1.addEventListener('click', handleClicks);

        if (i.length !== 4) {
            span[11].setAttribute("onclick", "")
            inp.className += " error";
        } else {
            inp.className += " success";
            span[11].setAttribute("onclick",z)
            a.setAttribute("href", "/web/index.html")
        }
        if (i.length === 4) {
        }        