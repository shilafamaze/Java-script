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
        get width(){
            return parseInt(this.button.style.width)
        }
        get Height(){
            return parseInt(this.button.style.height)
        }
        get borderRadius(){
            return this.button.style.borderRadius
        }
    }

    var btn=new Button("click me")
    console.log(btn);
    btn.width=150
    btn.Height=150
    btn.borderRadius=100

// TYPE 2


// class Button {
//     constructor(name){
//         this.button = document.createElement("button")
//         this.button.innerHTML = name;
//         document.body.appendChild(this.button)
//     }
//     setWidth(width){
//         this.button.style.width=width+"px";
//     }
//     setHeight(height){
//         this.button.style.height=height+"px";
//     }
// }

// var btn=new Button("click me")

// btn.setHeight(200)
// btn.setWidth(300)































// btn.setWidth(150)
// btn.setHeight(150)
// btn.setBorderRadius(100)