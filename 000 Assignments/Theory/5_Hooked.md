# Hook

## 1.Difference Named Export and Default Export and * as export
###  Default Export - generally when only one or fixed component has to be exported from one file, mixed components can alsobe made
        const Header = () => {
    return (
        ...
        )
    }

    export default Header;

    import Header from "./components/Header"

- OR
    export default Header = () => {
    ---
    }

###  Named Export - when only one or fixed component has to be exported
    export const Header = () => {
    return (
        ...
        )
    }

    import {Header} from "./components/Header"

### * as export ?

## 2. importance of config.js ?

## 3. React Hooks ?

## 4. need of useState ?
- use State is a React hook that let you add a state variable to your component
-  syntax

    const [something, setSomething] = useState(initial value)
- here setState is a function that can be called to update the variable "state" when modified from "initial value"


### way of using- written inside a component
    import {useState} from "react"
    function Component(){
        const [name, setName] = useState("Abhay")

    }


