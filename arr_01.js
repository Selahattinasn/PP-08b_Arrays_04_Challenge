

/*
Aufgabe:

<html><head></head><body><h1></h1><p></p></body></html>
	
---->

<html>
	<head>
	</head>
	<body>
		<h1>
        </h1>
		<p>
        </p>
	</body>
</html>

--> return : "\n"  
--> Tab: "\t"

Verwenden Sie dafür die untenstehenden Arrays
*/

const controls = ["<", "</", ">"];
const tags = ["html","head","head","body","h1","h1","p","p","body","html"];
let stack = [];

output(getHTML());
function getHTML() {

    let htmlStr = "";

    for (let i = 0; i < tags.length; i++) {
        if (isOpenTag(tags[i])) { 
            htmlStr += getTag(tags[i],"open"); 
        } else {
            htmlStr += getTag(tags[i],"close");
        }
    }

    return htmlStr;
}

// Modul: open || close ?
function isOpenTag(tag) {
   
     const cond = (tag != stack[stack.length -1]); // tag liegt oben!

    if (cond) {
        stack.push(tag);
        return true;
    } else {
        stack.pop();
        return false;
    }
}

// Modul: Zusammenbau: <tagStr> --> Tests:
function getTag(tag,op) {
    switch (op) {
        case "open":
            return getTabs(stack.length-1) + controls[0] + tag + controls[2] + "\n";
        case "close":
            return getTabs(stack.length) + controls[1] + tag + controls[2] + "\n";
        default:
            return "#!";
    } 
}

function getTabs(tabCount) {
    let tabs = "";
    for (let i = 0; i < tabCount; i++) {
        tabs += "\t"
    }
    return tabs;
}

// Modul: Ausgabe | Test
function output(outputData) {
    console.log(outputData);
}
