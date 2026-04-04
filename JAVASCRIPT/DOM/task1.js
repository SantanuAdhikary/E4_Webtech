

let inner = document.createElement("div");
inner.classList.add("inner")

let outer = document.getElementsByClassName("outer")
console.log(outer[0])

outer[0].append(inner);

let circle = document.createElement("div")
circle.classList.add("circle")

inner.append(circle)
circle.innerHTML = "<h2>hello</h2>"