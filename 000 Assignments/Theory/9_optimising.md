# optimising

## 1. when and why do we need Lazy ?
- lazy lets you  defers the loading the component untillit is rendered for the first time
- we use Lazy when we want our js code bundle to be splited in smaller parts and load when required .
- this way of code spliting , helps faster loading our react page and optimise our application.

## 2.What is Suspense ?
- Suspense is a functional component provided by react library for wrapping  our component which is to be loaded on demand using lazy function.
- it helps to display fallback UI, untill our main component loads

    Ex. in react router DOM
    path: '/grocery',
    element: (
        <Suspense fallback={<Shimmer/>}>
            <Grocery />
        </Suspense>

    )

## 3. Why error " Component suspended while responding to synchoous input" . how Suspense solve the error ?

    const Grocery = lazy(()=> import('/components/Grocery'))
    
- Router path:

    path: '/grocery',
    element:<Grocery />

- here the component is rendered even before loading of the component is complete.
- due to which component get s suspended and this error occurs
- by using Suspense , we avoid the situation by using  a fallback = {<Loading />} while is fallback condition if components is not loaded completely , afte loading the Grocery component , it is rendered

## 4. Advantages and Diadvantage of using code splitting ?
- Advantages
    - optimise the code
    - initial Loading time decreses
    - unnecessary components are not loaded whichare currenlty not rendering in the screen
    -lower memory usage
    -

- Disadvantages
    - incraesed complexity
    - Which code is to be be bundled separately has to be specified separately
    - more network rewquest that can affect performance
    - 

## 5.When and Why suspense is used ?
- When
- When our component is not loaded synchronously  and in asynchronous mode
- that is the component takes time for loading for that period suspence provides a fallback render method.

- why? 
- when our component is loaded usinf lazy method , this is done asynchronously ,Suspense helps in wrapping our component and provide us a fallback render way.
