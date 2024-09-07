// App.js
// import { useState, useEffect } from 'react';
// import { NavBar } from './components/NavBar';

// function Home() {
//     const [theme, setTheme] = useState('dark');

//     // Function to switch CSS files
//     const switchThemeCSS = (theme) => {
//         if (theme === 'dark') {
//             import('./App.css')
//             .then(() => {
//                 console.log('Dark mode CSS loaded');
//             })
//             .catch((err) => {
//                 console.error('Failed to load light mode CSS:', err);
//             });
//         } else {
//             import('./Applight.css')
//             .then(() => {
//                 console.log('Light mode CSS loaded');
//             })
//             .catch((err) => {
//                 console.error('Failed to load dark mode CSS:', err);
//             });
//         }
//     };


    // const toggleTheme = () => {
    //     console.log('Current theme before toggling:', theme);
    //     const newTheme = theme === 'dark' ? 'light' : 'dark';
    //     console.log('Current theme:', theme, 'Switching to:', newTheme);
    //     setTheme(newTheme);
    //     console.log('Theme after toggling:', newTheme);
    // };

    // useEffect(() => {
    //     console.log('Theme changed to:', theme);
    //     switchThemeCSS(theme);
    // }, [theme]);

    // return (
    //     <div className="App">
    //         <NavBar toggleTheme={toggleTheme} currentTheme={theme} />
           
    //     </div>
//     // );
// }

// export default Home;
