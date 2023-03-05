const Header = (props) => {
   return (
      <>
         <h1>{props.course}</h1>
      </>
   );
};

const Part = (props) => {
   return (
      <p>
         {props.partName} {props.exercisesCount}
      </p>
   );
};

const Content = (props) => {
   console.log(props);
   return (
      <div>
         <Part
            partName={props.parts[0].name}
            exercisesCount={props.parts[0].exercises}
         />
      </div>
   );
};

const App = () => {
   const course = "Half Stack application development";
   const parts = [
      {
         name: "Fundamentals of React",
         exercises: 10,
      },
      {
         name: "Using props to pass data",
         exercises: 7,
      },
      {
         name: "State of a component",
         exercises: 14,
      },
   ];
   return (
      <div>
         <Header course={course} />
         <Content parts={parts} />
      </div>
   );
};
export default App;
