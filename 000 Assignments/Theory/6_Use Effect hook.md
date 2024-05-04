# Exploring the world

## 1. what is microservice ?
- Microservice architecture splits the application into independent and smaller standalone units that   work together to form the application.
- microservice architecture is where a single job like database management , UI , SMS, Authrization etc .. is  handled separately and  then linked after .
- here each resposibilty or service can be done in different tech stack 
- Single Responsibilty Principle 
- separation of concern is followed 

## 2. Monolith architecture ?
- Monolith architechture, in monolith architechtire our whole applicaion is blend together as one unit.
- Same tech stack has to be used.
- Application are usually three parts:
        - frontend UI on user'smachine
        - server side application
        - database that also run on server.if server side run  at single process, we call it server side monolith

## 3. difference between monolith and micorservice ?
- monolith application can be complex as all components/service are made together
- Microservice are split into smaller components that help in scaling the component that requires rather than whle application

## 4. why Use effect is used ?
- use effect is used when we have to re-render the component after the main part of the body is rendered like fetch data which is done after the main structure is loaded.
- it is generally supposed to run once , by 2nd argumet  , [] an emptl array
- it can also be triggered again by the sencond argument which is a dependency array,which can have a changing variable, for evry change of that variable use effect is called again

## 5. what is optional chaining ?
- optional chaining(?.) is process in which we extract a data from  an nested json or object whic may result is error  . hence we use -
- data1?.info?.name , the question maek make sure that if the data is not found if does not gives us a error rather show a undefined or null value
- it short-circuits , returna undefined

## 6. what is Shimmer UI ?
- A shimmer UI is not the actual content but  instead mimics the layout ad shapes of actual UI that will eventually appear.
- is uses a gradient animation that creates a shimmering effect of loading the sites.
- Why ? there are components / parts of website which are not loaded instantly and takes time like fetch an external API, to provide a better user eperience we create a blank structure ofthe website which is similar to our compoents and without any data, this effect provide a effect that website is half loaded or loading. this is what we call shimmer UI

## 7. what is difference between JS expression and statement ?
best answer- https://www.joshwcomeau.com/javascript/statements-vs-expressions/
- JS Expression
   - it produces an value like 2+3, "hello", num>50 --> true or false
   - console.log(Expression ) is valid and returns a value
   - const b = function raju() { ...} , console.log(b) return a value , hence function expression
- JS Statement
   - it provides us instruction to do siomething like create a variable let x= 5; is an sataement which has 5 as expresion
   -function raju() { ...} , console.log(b) return a error , hence function Statement

- in react we get  { } inside our jsx we can only write a js expression here and not statement
- ex {if(true){
        //do thing
             }
      }  throws an error

- we need to use ternany operator. { num > 50 ?x:y} always evalutes to a value, in the same way we can use map, filter but not for loop

## 8. what is conditional rendering?
- rendering our component based on some condition is called conditional rendering 
        const UI =()=>{
                
                if(location == "Banglore"){
                        return <h2>hello Banglorians</h2>
                }
                if(renderStatus == true){
                        return <MainComponent />
                }

        }

## 9. What is CORS?
- CORS stand for Cross origin resource sharing. it is a mechanism for intergrating application
- web browser prevent one website to  fetch data or linking to other domains.
- this can be dones using cross-origin attribute if it as a js file
- by allowing the cors policy, for integrating the application

## 10.what  is async and await ?
- async and await is just sugar coated way of waorking with promise
- async always return a promise if it return a value it is wrapped as promise by the js engine
- await can be used only inside a async funtion.
        method-1: using async and await
        const pr = async function getData(){
                const data = await fetch(Api call)
                const value = await data.json()
                console.log(value)
        }
        getData()
        method 2: Promis old method
        const pr = new Promise((res, rej)=>{
                const data = fetch(Api call)
                res(data.json())
        })
        pr.then((res)=> console.log(res))

## 11. whats is the use of "const value = await data.json()"
        const pr = async function getData(){
                const response1 = await fetch(Api call)
                const json = await respone1.json()
                console.log(value)
        }
- above  response1  is a generic placeholder  that has multiple data formats
- we extract the json object using response1.json() whic is also a promise
- other formats response1.text() , .FormData(), .Blob()