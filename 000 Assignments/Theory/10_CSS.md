# CSS Styling Ways

## 1. Ways of writing CSS ?
- Normal Css file
- SASS 
    -SCSS syntax- using Semicolon(;) and { }
    -SASS syntax - using indentaiton without Semicolon(;) and { }
- styled components
- CSS frameworks
    - Bootstrap
    - Tailwind
    - Material UI
    - Chakra

## 2. HOw to Configure Tailwind ?
- Process of installing tailwinf in react using parcel
- npm install -D tailwindcss post-css
- npx tailwindcss init
- create a .postcssrc file ad inside 
    {
        "plugin":{
           "tailwindcss": {}
        }
    }
- inside  tailwind.config.js
        module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
- inside index.css 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

# 3. In tailwing.config.js what does {content, theme, extend ,plugin} mean?
- content is an array which specify , in what files does tailwing has to be supported
        content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
            ],
- theme setion helps to specify project colors pallete, font style, border radius, breakpoints
    theme: {
        screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        },
        colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        },
        fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        },
    }
- extend section is use to describe custon css properties
     extend: {
        spacing: {
            '13': '3.25rem',
            '15': '3.75rem',
            '128': '32rem',
            '144': '36rem',
        }
    }
- plugin is used to extend the tailwind with other thirdparty plugins which uses js rather than css

# 4. Why do we use .postcssrc file?
-If you’re using Tailwind for a brand new project and don’t need to integrate it with any existing Sass/Less/Stylus stylesheets, you should highly consider relying on other PostCSS plugins to add the preprocessor features you use instead of using a separate preprocessor.

This has a few benefits:

Your builds will be faster. Since your CSS doesn’t have to be parsed and processed by multiple tools, your CSS will compile much quicker using only PostCSS.
No quirks or workarounds. Because Tailwind adds some new non-standard keywords to CSS (like @tailwind, @apply, theme(), etc.), you often have to write your CSS in annoying, unintuitive ways to get a preprocessor to give you the expected output. Working exclusively with PostCSS avoids this.