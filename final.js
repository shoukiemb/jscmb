class Contact{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class ContactManager{
    constructor(){
        this.listOfContacts = [];
    }

    empty(){
        this.listOfContacts = [];
    }
    
    add(contact){
        this.listOfContacts.push(contact);
    }

    remove(contact){
        for (let i = 0; i < this.listOfContacts.length; i++){
            let c = this.listOfContacts[i];

            if (c.email === contact.email){
                this.listOfContacts.splice(i, 1);
                break;
            }
        };
    }

    printContactsToConsole(){
        if (this.listOfContacts.length === 0){
            console.log("-----EMPTY LIST-----");
        }

        this.listOfContacts.forEach(function(c){
            console.log(c.name);
        })
    }

    sort(){
        this.listOfContacts.sort(ContactManager.compareByName);
    }

    static compareByName(c1, c2){
        if (c1.name < c2.name)
            return -1;
        else if (c1.name > c2.name)
            return 1;
        else if (c1.name === c2.name)
            return 0;
    }

    save(){
        localStorage.contacts = JSON.stringify(this.listOfContacts);
    }

    load(){
        if (localStorage.contacts !== undefined){
            this.listOfContacts = JSON.parse(localStorage.contacts);
        }
    }
}
let cm = new ContactManager();
let c1 = new Contact("Jimi Hendrix", "jimi@rip.com");
let c2 = new Contact("Robert Fripp", "robert.fripp@kingcrimson.com");
let c3 = new Contact("Angus Young", "angus@acdc.com");
let c4 = new Contact("Arnold Schwarzenneger", "T2@terminator.com");

cm.add(c1);
cm.add(c2);
cm.add(c3);
cm.add(c4);

cm.printContactsToConsole();
cm.save();
console.log("-----------------Remove the second object");
cm.remove(c2);
cm.printContactsToConsole();

console.log("---------------Sorting");
cm.sort();
cm.printContactsToConsole();



console.log("----------------Emptying");
cm.empty();
cm.printContactsToConsole();

console.log("--------Reloading--------");
cm.load();
cm.printContactsToConsole();