"use strict";
// classes: public , protected, private 
class Lesson {
    constructor(type, length, title, description) {
        this.instances = 0;
        this.type = type;
        this.length = length;
        this.title = title;
        this.description = description;
        this.incInstances();
    }
    incInstances() {
        this.instances++;
    }
    getInstances() {
        return this.instances;
    }
}
class VideoLesson extends Lesson {
    setDescription(desc) {
        this.description = desc;
        this.incInstances();
    }
}
let lesson = new Lesson('VideoCourse', 4, 'Intro', '');
//console.log(lesson.incInstances()) 
