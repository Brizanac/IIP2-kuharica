# IIP2-kuharica

Web app za recepte sa nekoliko funkcionalnosti. 

Interne: 
- prikaz i pohrana recepata sa MongoDB databasea. 

Eksterne (Spoonacular API): 
- prikaz svakodnevnih (samo se osvježava jednom dnevno) i nasumičnih (svakim osvježavanjem) recepata
- prikaz recepata pretraženih po unesenim sastojcima //Napomena: api dohvaća sastojke napisane samo na engleskom jeziku

Preduvjeti za pokretanje: 

1. npm install 
2. kreirajte .env file sa mongodb stringom -> MONGODB_URI = mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@cluster0.0wyuskj.mongodb.net/Recepti?retryWrites=true&w=majority

Par screenshotova aplikacije: 

![Screenshot from 2023-05-08 11-35-11](https://user-images.githubusercontent.com/45972866/236791292-3cbeecce-5da0-4f31-b241-108d5ab8c663.png)
![Screenshot from 2023-05-08 11-36-51](https://user-images.githubusercontent.com/45972866/236791326-df0826f1-136b-47d2-ab56-2baaad7fe44b.png)
![Screenshot from 2023-05-08 11-37-37](https://user-images.githubusercontent.com/45972866/236791353-73f81c0c-0702-417f-bf99-092be3ae7259.png)
![Screenshot from 2023-05-08 11-38-02](https://user-images.githubusercontent.com/45972866/236791367-a183fd84-a620-4b4c-88e1-6ffe7fece2f8.png)
![Screenshot from 2023-05-08 11-38-41](https://user-images.githubusercontent.com/45972866/236791378-4e5755b6-31bf-4e9b-8233-99e67da577d8.png)
![Screenshot from 2023-05-08 11-39-17](https://user-images.githubusercontent.com/45972866/236791386-d3be9c9b-7877-4a07-a7e8-717f4596ec80.png)
![Screenshot from 2023-05-08 11-40-09](https://user-images.githubusercontent.com/45972866/236791394-77c41a7f-e513-4560-8c5e-f8520e29bd2b.png)
