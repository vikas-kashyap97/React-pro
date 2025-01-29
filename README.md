# React + Vite

#Import and Export- 

1. Default import and export manner - AliceSeries.jsx ( export default Serise), App.jsx (import Serise from './components/AliceSeries.jsx', (<Serise />)), main.jsx (import App from './App.jsx', (<App/>))
2.Named Import Export - AliceSeries.jsx (export const Serise = () => {}), App.jsx (import { Serise } from './components/AliceSeries.jsx'), main.jsx (import App from './App.jsx', (<App/>))
3.Combined Import Export - AliceSeries.jsx (export const Movie = () => {}), App.jsx (import { Serise, Movie } from './components/AliceSeries.jsx';), main.jsx (import App from './App.jsx', (<App/>))


#Looping in .jsx - 

1. We don't have for loops in jsx, so we have to use .map() method of arrays.
2. we use .map() method for loops.