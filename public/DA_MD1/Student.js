class Student {
    id;
    name;
    age;
    image;

    constructor(id, name, age,img) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.image = img;
    }
    getId(){
        return this.id
    }
    setId(id){
        this.id = id;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getAge(){
        return this.age;
    }
    setAge(age){
        this.age = age;
    }
    getImg(){
        return this.image
    }
    setImg(img){
        this.image = img
    }
}
