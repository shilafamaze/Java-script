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
    set borderRadius(radius){
        this.button.style.borderRadius=radius+"%";
    }
}

var btn=new Button("click me")
console.log(btn);
btn.width=150
btn.Height=150
btn.borderRadius=100
