class Button {  
    constructor(name){
        this.button = document.createElement("button");
        this.button.innerHTML = name;
        document.body.appendChild(this.button)
    }
    set width(width){
        this.button.style.width=width+"px";

    }
    set Height(height){
        this.button.style.height=height+"px";
    }
}

var btn=new Button("click me")
console.log(btn);
btn.width=150
btn.Height=150

