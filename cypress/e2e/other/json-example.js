/// <reference types="Cypress" />

describe("JSON Object", () => {
    it("Json Object Examples", () => {
   const exampleObject = {
    "key": "Lea",
     "key2": "Zmaj"};

     const exampleArrayOfValues = [
        "Sophie", "Rose", "Howard"
     ];

     const users = {
        "firstName": "Joe",
        "lastName": "Blogs",
        "Age": 30,
        "Students": [
            {
                "firstName": "Jim",
                "lastName": "Blogić"
            },
            {
                
                "firstName": "Sara",
                "lastName": "Parker"
            }
        ]
     }

     const exampleArrayOfObjects = [
        {
            "key": "Luke"
        },
        {
            "key": "Stojan"
        },
        {
            "key": "Jovan"
        }
     ]

     cy.log(exampleObject.key);   //cy.log(exampleObject["key"])  - moze i ovako
     cy.log(exampleObject.key2);
     cy.log(exampleArrayOfValues[0]);
     cy.log(exampleArrayOfValues[1]);
     cy.log(users.Students[0].lastName);
     cy.log(exampleArrayOfObjects[0].key);
     cy.log(exampleArrayOfObjects[1].key);
     cy.log(exampleArrayOfObjects[2].key);

     


    });
    

   
  });
  