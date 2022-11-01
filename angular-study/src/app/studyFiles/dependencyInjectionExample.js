// depency injection is a system to establish wich depency you want for a class and avoid problems in case of a change
//in the dependency. avoiding having multiple instantes in several classes from a class help us to make a change in that
//class and change only 1 instance in case of any change 

// another benefit of dependency injection is that we dont have any dependency betweeen classes and we can change the 
//class of the dependency whenever we want without affect the current code.

// in this case we have the displayer class 

class displayer{

    constructor(content){
        this.content = content
    }

    Display(){
        console.log(this.content)
    }

}

class message{

    constructor(subject, writtendBy){
        this.subject = subject;
        this.writtenBy = writtendBy
    }
}

class video{

    constructor(video){
        this.video = video
    }

}

//there are some frameworks like Angular tht provide us a dependency container for save our instance where we´ll change
//the dependency in case of any change

// a container is something like this 

// in case that we decide that player´s instance will be a message instead a video we have to change the instance only in
// the container 

const content = new video("video")
const displayerInstance = new displayer(content);
displayerInstance.Display()


// an example of an a class without dependency injection and its troubles is something like:


class displayerWithoutDependencyInjection{

    constructor(){
       
    }

    Display(){ 
        //in case that we have to change "video" class, we have to come here to change it for whatever we want to turn it
        // for example the "message" class

        const content = new video("klk")
        console.log(content)
    }

}





