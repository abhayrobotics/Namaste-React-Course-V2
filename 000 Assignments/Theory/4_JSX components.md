# JSX components

## 1. JSX mandatory in React?
- JSX is not mandatory for writing React and its not a part of React . 
- JSX stands for Javascript XML.
- JSX is synatx extension of Javascript that enable users to write React Components

## 2. is ES6 mandatory for Writing React?
- No, is ES6 is not mandatory
- React can be written using class based components
- ES6 is standardization version of Javascript that enable more readablility and more accessible

## ES6 or EMCA Script 2015 new features 
- let and const Keywords (new)
- Arrow Functions
- Multi-line Strings
- Default Parameters (fn(x=5,y=10))
- Template Literals {}
- Destructuring Assignment - let {x,y} = object1
- Enhanced Object Literals - any variable/multiline in { }
- Promises(new)
- Classes(first time)
- Modules

## 3. {TitleComponent} vs <TitleComponent /> vs  <Titlecomponent></Titlecomponent> 
-  {TitleComponent} - here Titlecomponent is injected in jsx as variable
-  <TitleComponent /> - here Titlecomponent is injected in jsx as React Functional component and same as third just a way of writing

## 4. comments in JSX?
- {/*   Comments        */} in jsx
- // in js

## 5. what is <React.Fragment></React.Fragment> and <></> ?
-  A react Fragment allow to wrap  a group of elements where a single element is possible  without adding extra nodes
- <></>is new shorter version of <Fragment> and <React.Fragment>
- all three are same 
- to pass a key we would need a <Fragment> and <React.Fragment>


## 6.virtual DOM
## 7.reconciallion
## 8.React Fiber


## 9. why keys are needed in react ?
- key are used in in components amoung siblings to unique identifiies 
- keys help react tounderstand which coponents is new/modified/deleted so that only that comoonents is rendered  and not all components
- it helps faster renderning and iprove the performance of website
- it not recommended to use index of list of map as key , beacuse it changes everytime a new component is added due to which any component items that has previous key is agan assigned a ne key , though here a only one component is changed everything is rendered
- it is recommended to use key which are which can be uniquely identied with their contents   


## 10. props in react ? ways to implement
- just like arguments are to a function  in the same way props are the arguments to a reac fucntional component .
- props are objects
- ways to use props and detructuring 
    -1       const ResCard = (props) => {
            console.log(props.resdata.info.name);
            }
    - 2     const Rescard= (props)=>{
            const {resdata} = props
            console.log(resdata.info.name);
        }
    - 3     const Rescard= (props)=>{
            const {resdata} = props;
            const (name,id)= resdata.info
            console.log(name)
        }

## 11. config driven ui ?
- In real world, we use sites which work in different location, language, So wee cannot make webisite indivisually for each kind of people
- so we use configurarion driven UI, that we will have same codebase but it will render differeent to differnet user based on some configuration /filter or setting
- this is mor of customization based on users .


