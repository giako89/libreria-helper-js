function convertNodeList(_string,parent) {

    let elements = (parent ? parent : document).querySelectorAll(_string);
    let elementsArr = Array.prototype.slice.call(elements);

    return elementsArr;
}

function createElement(selector)
{
      let  elements = selector.type != undefined ? selector.type : convertNodeList(selector);

    return elements;
}

var $ = function (selector, parent) {

    return {
        selector: selector,
        parent: parent,
        element: createElement(selector,parent),
        addClass: function (_class) {
            try {
                this.element.forEach(element => element.classList.add(_class));
            } catch (e) {
                console.log(e);
            }
        },
        removeClass: function (_class) {
            try {
                this.element.forEach(element => element.classList.remove(_class));
                //this.element.classList.remove(_class);
            } catch (e) {
                console.log(e);
            }
        },
        hasClass(_class) {
            try {
                let _classj = "." + _class;
                return this.element[0].matches(_classj);
            } catch (e) {
                console.log(e);
            }
        },
        toggleClass(_class) {
            try {
                this.element.forEach(element => element.classList.toggle(_class));
            } catch (e) {
                console.log(e);
            }
        },
        attr(_string, value) {
            try {
                if (value == null || value == undefined) {
                    return this.element[0].getAttribute(_string);
                } else {
                    this.element[0].setAttribute(_string, value);
                }

            } catch (e) {
                console.log(e);
            }
        },
        removeAttr(_string) {
            try {
                this.element[0].removeAttribute(_string);
            } catch (e) {
                console.log(e);
            }
        },
        html(_string, param = "w") { // a=appent,w=change
            try {
                if (_string == null || _string == undefined) {
                    return this.element[0].innerHTML;
                } else {
                    if (param == "w") {
                        this.element[0].innerHTML = _string;
                    }
                    if (param == "a") {
                        this.element[0].innerHTML += _string;
                    }
                    if (param == "p") {
                        this.element.innerHTML = _string + this.element.innerHTML;
                    }
                }

            } catch (e) {
                console.log(e);
            }
        },
        append(_string) { // a=appent,w=change
            try {
                this.html(_string, "a");

            } catch (e) {
                console.log(e);
            }
        },
        prepend(_string) { // a=appent,w=change
            try {
                this.html(_string, "p");

            } catch (e) {
                console.log(e);
            }
        },

        remove() {
            try {
                this.element.remove();

            } catch (e) {
                console.log(e);
            }
        },

        val(value) {
            try {
                if (value == null || value == undefined) {
                    return this.element.value;
                } else {
                    return this.element.value = value;
                }
            } catch (e) {
                console.log(e);
            }
        },
        trim() {
            try {
                return this.html().trim();
            } catch (e) {
                console.log(e);
            }
        }

    }
};

element = $(".js-ele");

element.removeClass("ele-red");

element.addClass("ele-green");

if (element.hasClass("ele-green")) {
    // console.log("c'è la class green")
} else {
    //  console.log("non c'è la class green")
}

element.attr("id", "mioid");
// console.log(element.attr("id"))


// questa funzione restituisce tutto HTML "elemento 1" get element
//console.log(element.html());
element.html("<p>ciao mamma</p>", "a");//<div class="js-ele ele-red"><p>ciao mamma</p></div>  set element

var email = $("#email_utente").val();

//console.log(email);

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var error = validateEmail(email);
//console.log(error);;

//const selectElement = document.querySelector('.js-auto');

//selectElement.addEventListener('change', (event) => {

//console.log(event.target);

//console.log( $(event.target).html());

//});

var element2 = $(".trimmed");

console.log(element2.trim());
//element2.trim()

element.append("<p>Test</p>");
element.html("<p>Test2</p>", 'p');
// element.remove()
