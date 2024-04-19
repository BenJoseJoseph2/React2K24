 # Create React Project Procedures : 

Steps  1 : 

        npx create react-app app-name 

                This method was employed in late earlier that vite . 

                React is basically classified into : React-Dom and React-Native . 

                npx : node package Executer
                npm : node package manager
            
            Earlier we where using npx create react-app <app_name>
            The amount of time consumed is high 

            So the solution that we are using in this era is using vite . 

        
        File and Folder Structure : 

            package.json :
                    
                     Entry Point 
                     It consist of react-dom , web -vitals , testing libraries as dependencies . 
                     start script : to run the app in production 
                     build script : 
                     test script  : to test the app developed . 
                     browserList  : which browser to be worked on . 

            To run the app we can use : npm run dev



            Before running we should go to the directory using dir .

            After running we will go to the localhost where it is hosted.


        What is build ? npm run build : We are creating build folder .


        But we are using create vite@latest method so go to the vite docs. 

        1.1 We want to do npm create vite@latest
        1.2 cd into the folder
        1.3 Run the app using npm run dev
        1.4 npm install to install the node module


    File and Folder structure using npm create vite@latest : 

    src : 
         
         1.1 Important file :  
                    main.jsx and App.jsx 
         1.2 main.jsx : 
                    ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)         

        1.3 App.jsx : 

function App() {
  

  return (
   <h1> ReactJS2K24</h1>
  )
}

export default App


