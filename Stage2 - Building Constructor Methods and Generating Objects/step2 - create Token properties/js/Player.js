class Player {
    constructor(name, id, color, active=false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
    //  create token property (an array) for initializing the player object which will use token object
        this.token = [];
    }
}