

const developers  =  [
    {
      picture: '/assets/cat1.jpg' , 
      firstName: 'Dzmitry',
      lastName: 'Antonenka',
      rusName: 'Дмитрий',
      rusSurname: 'Антоненко',
      department: 'Web & Mobile',
      room: 1608,
      bag: '/assets/bag.png',
      door: '/assets/door.png',
    },

    {   
        picture: '/assets/cat2.jpg' ,
        firstName: 'Aleh',
        lastName: 'Zhykau',
        rusName: 'Олег',
        rusSurname: 'Жуков',
        department: 'Web & Mobile',
        room: 1608,
        bag: '/assets/bag.png',
        door: '/assets/door.png',
        
    },
    {
        picture: '/assets/cat3.jpg' ,
        firstName: 'Maxim',
        lastName: 'Podolsky',
        rusName: 'Максим',
        rusSurname: 'Подольский',
        department: 'Web & Mobile',
        room: 1608,
        bag: '/assets/bag.png',
        door: '/assets/door.png',
       
    },
    {   picture: '/assets/cat4.jpg' ,
        firstName: 'Anna',
        lastName: 'Belova',
        rusName: 'Анна',
        rusSurname: 'Белова',
        department: 'Web & Mobile',
        room: 1608,
        bag: '/assets/bag.png',
        door: '/assets/door.png',
       
    },
    {   picture: '/assets/cat5.jpg' ,
        firstName: 'Vitaly',
        lastName: 'Vlasov',
        rusName: 'Виталий',
        rusSurname: 'Власов',
        department: 'Web & Mobile',
        room: 1608,
        bag: '/assets/bag.png',
        door: '/assets/door.png',
        
    },

    {   picture: '/assets/cat6.jpg' ,
        firstName: 'Stepan',
        lastName: 'Smirnov',
        rusName: 'Степан',
        rusSurname: 'Смирнов',
        department: 'Web & Mobile',
        room: 1608,
        bag: '/assets/bag.png',
        door: '/assets/door.png',
       
    },
  ];

 
  console.log(developers[1].firstName);




 // родительский блок
const parentBlock = document.querySelector('.wrapper');




// секция для всего 
const wrapper = document.createElement('section'); 
wrapper.className = 'wrapperForCards';
parentBlock.appendChild(wrapper);




/* switch */
const menuList = document.createElement('div');
menuList.className = "menuList";
wrapper.appendChild(menuList);

let displayedImployees = document.createElement('p'); 
displayedImployees.className = "displayed__imployees";
menuList.appendChild(displayedImployees);

let count = 0;
for (i = 0; i<developers.length; i++) {count++};

const employeeNumber = document.createTextNode(`${count+" " + "employees displayed"}`);
displayedImployees.appendChild(employeeNumber);


const menuIcons = document.createElement('div');
menuIcons.className = 'menuIcons';
menuList.appendChild(menuIcons);

const menu = document.createElement('img');
menu.className = 'menu';
menu.src = '/assets/menu.png';
menuIcons.appendChild(menu);

const list = document.createElement('img');
list.className = 'list';
list.src = '/assets/list.png';
menuIcons.appendChild(list);


// родительский блок для карточек 
const container = document.createElement('div'); 
container.className = "cards";
wrapper.appendChild(container);



gridView(); 

menu.addEventListener('click', gridView);

function gridView(){

    container.innerHTML = ""; 
    





    for (let i = 0; i<developers.length; i++){

        const card = document.createElement('div');
        card.className = "card";
        container.appendChild(card);
    
        const avatar = document.createElement('img');
        avatar.src = developers[i].picture;
        avatar.className = "avatar";
        card.appendChild(avatar);
    
    
    
    
    // container with names and photos
        const cardName = document.createElement('div'); 
        cardName.className = "card__name";
        card.appendChild(cardName);
        
    
    
    
    
    // paragraph with eng name 
        const cardEngName = document.createElement('p'); 
        cardEngName.className = "card__eng";
        cardName.appendChild(cardEngName);
    
        // eng names
        const developerName = document.createTextNode(`${developers[i].firstName+" "+developers[i].lastName}`); 
        cardEngName.appendChild(developerName);
    
    
    // paragraph with rus name 
        const cardRusName = document.createElement('p'); 
        cardRusName.className = "card__rus";
        cardName.appendChild(cardRusName);
    
        // rus names
        const developerRusName = document.createTextNode(`${developers[i].rusName+" "+developers[i].rusSurname}`); 
        cardRusName.appendChild(developerRusName);
    
    
    
        const line = document.createElement('hr');
        line.className = "line";
        cardName.appendChild(line);
       
    
        //div with department and room number
        const departmentRoomName = document.createElement('div'); 
        departmentRoomName.className = "department__room";
        cardName.appendChild(departmentRoomName);
    
        const departName = document.createElement('img');
        departName.src = developers[i].bag;
        departName.className = 'bagImg';
        departmentRoomName.appendChild(departName);
    
    
        //department
        const depart = document.createElement('p');  
        depart.className = "department";
        departmentRoomName.appendChild(depart);
    
    
    
        const departmentNode = document.createTextNode(`${developers[i].department}`); 
        depart.appendChild(departmentNode);
    
    
        const departRoom = document.createElement('img');
        departRoom.src = developers[i].door;
        departRoom.className = 'doorImg';
        departmentRoomName.appendChild(departRoom);
    
        const roomNumber = document.createElement('p');  //room
        roomNumber.className = "room";
        departmentRoomName.appendChild(roomNumber);
    
        const roomNode = document.createTextNode(`${ developers[i].room}`); 
        roomNumber.appendChild(roomNode);
    }
    
};


list.addEventListener('click', tableView);

function tableView(){

    
    container.innerHTML = ""; 

    /* head of table */
    const head = document.createElement('div');
    head.className = 'head_table';
    container.appendChild(head);


    const headPhoto = document.createElement('img');
    headPhoto.className = 'headPhoto';
    headPhoto.src = '/assets/circle.png';
    head.appendChild(headPhoto);

    const headPhotoText = document.createElement('p');
    headPhotoText.className = 'headPhotoText';
    head.appendChild(headPhotoText);

    const headParagraph = document.createTextNode('Photo');
    headParagraph.className = 'headParagraph';
    headPhotoText.appendChild(headParagraph);



    const headName = document.createElement('img');
    headName.className = 'headName';
    headName.src = '/assets/user.png';
    head.appendChild(headName);

    const headNameText = document.createElement('p');
    headNameText.className = 'headNameText';
    head.appendChild(headNameText);

    const headNameParagraph = document.createTextNode('Name');
    headNameParagraph.className = 'headParagraph';
    headNameText.appendChild(headNameParagraph);



    const headDepart = document.createElement('img');
    headDepart.className = 'headDepart';
    headDepart.src = '/assets/bag.png';
    head.appendChild(headDepart);

    const headDepartText = document.createElement('p');
    headDepartText.className = 'headDepartText';
    head.appendChild(headDepartText);

    const headDepartParagraph = document.createTextNode('Department');
    headDepartParagraph.className = 'headParagraph';
    headDepartText.appendChild(headDepartParagraph);





    const headRoom = document.createElement('img');
    headRoom.className = 'headRoom';
    headRoom.src = '/assets/door.png';
    head.appendChild(headRoom);

    const headRoomText = document.createElement('p');
    headRoomText.className = 'headRoomText';
    head.appendChild(headRoomText);

    const headRoomParagraph = document.createTextNode('Room');
    headRoomParagraph.className = 'headParagraph';
    headRoomText.appendChild(headRoomParagraph);


    for (let i = 0; i<developers.length; i++){

        const card = document.createElement('div');
        card.className = "card_table";
        container.appendChild(card);
    
        const avatar = document.createElement('img');
        avatar.src = developers[i].picture;
        avatar.className = "avatar_table";
        card.appendChild(avatar);
    
    
    // container with names and photos
        const cardName = document.createElement('div'); 
        cardName.className = "card__name_table";
        card.appendChild(cardName);
        
    
    
    // paragraph with eng name 
        const cardEngName = document.createElement('p'); 
        cardEngName.className = "card__eng_table";
        cardName.appendChild(cardEngName);
    
        // eng names
        const developerName = document.createTextNode(`${developers[i].firstName+" "+developers[i].lastName}`); 
        cardEngName.appendChild(developerName);
    
    
    // paragraph with rus name 
        const cardRusName = document.createElement('p'); 
        cardRusName.className = "card__rus_table";
        cardName.appendChild(cardRusName);
    
        // rus names
        const developerRusName = document.createTextNode(`${developers[i].rusName+" "+developers[i].rusSurname}`); 
        cardRusName.appendChild(developerRusName);
       
    
        //div with department and room number
        const departmentRoomName = document.createElement('div'); 
        departmentRoomName.className = "department__room_table";
        card.appendChild(departmentRoomName);
    
    
        //department
        const depart = document.createElement('p');  
        depart.className = "department_table";
        departmentRoomName.appendChild(depart);
    

        const departmentNode = document.createTextNode(`${developers[i].department}`); 
        depart.appendChild(departmentNode);
    
        const roomNumber = document.createElement('p');  //room
        roomNumber.className = "room_table";
        departmentRoomName.appendChild(roomNumber);
    
        const roomNode = document.createTextNode(`${ developers[i].room}`); 
        roomNumber.appendChild(roomNode);
    }
    
}



/* Search */

function search(){
   
   let input = document.getElementById('input_id');
   let filter = input.value.toUpperCase();
   let cards = document.querySelector('.cards');
   card = cards.getElementsByClassName('card');

   for (let i = 0; i<card.length; i++){
       user = card[i].getElementsByClassName('card__name')[0];
       txtValue = user.textContent || user.innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1){
           card[i].style.display = "";
           
       } else {
            
            card[i].style.display = "none";  
       }
   }
}

const searchButton = document.querySelector('.search__button');

searchButton.addEventListener('click', search);