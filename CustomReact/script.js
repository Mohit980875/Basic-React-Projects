
const reactObj = {
    type :"a",
    props:{
        href :"https://www.google.com",
        target :"_blank"
    },
    children:"Visit Google"
}


function createElement(reactObj) {
    const {type,props,children} = reactObj;

    let HTMLstr = `<${type}`

    for (const key in props) {
        if (props.hasOwnProperty(key)) {
            const val = props[key];
            HTMLstr+= ` ${key} = ${val}`;
            
            console.log(val);
            
            
        }
    }
    HTMLstr+=`>`


    if (children) {
        HTMLstr+=children;
    }
    
    HTMLstr+=`</${type}>`

    return HTMLstr;
}

function customRender(reactObj,rootElement) {
    const HTMLCode = createElement(reactObj);
    
    rootElement.innerHTML = HTMLCode;
   

    
}

const rootElement = document.getElementById("root");
customRender(reactObj,rootElement);

