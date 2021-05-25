import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import { Button, Container } from "react-bootstrap";

// WITHOUT REDUX ===========================================================================
function Counter() {
  const [count, setCount] = useState(0);
  // const [form, setForm] = useState({
  //   username: "",
  //   password: "",
  // });
  // const [data, setData] = useState([])
  // index 0 digunakan untuk pengambilan data / peletakan data
  // index 1 digunakan untuk memanipulasi data di index 0

  // Lifecycle
  // menggantikan componentDidMount
  useEffect(() => {
    console.log("GET DATA !");
  }, []);
  // menggantikan componentDidUpdate
  useEffect(() => {
    console.log("counter is update !");
  }, [count]);

  const increaseCounter = () => {
    setCount(count + 1);
  };
  const decreaseCounter = () => {
    setCount(count - 1);
  };
  const resetCounter = () => {
    setCount(0);
  };

  return (
    <>
      <Container className="text-center">
        <Navbar />
        <h1>Counter</h1>
        <hr />
        <h3>{count}</h3>
        <Button variant="primary" onClick={decreaseCounter}>
          -
        </Button>
        <Button variant="secondary" className="mx-2" onClick={resetCounter}>
          RESET
        </Button>
        <Button variant="primary" onClick={increaseCounter}>
          +
        </Button>
      </Container>
    </>
  );
}

export default Counter;

// WITH REDUX CONNECT ===========================================================================
// import { connect } from "react-redux";
// import {
//   increaseCounter,
//   decreaseCounter,
//   resetCounter,
// } from "../../../redux/action/counter";

// function Counter(props) {
//   return (
//     <>
//       <Container className="text-center">
//         <Navbar />
//         <h1>Counter</h1>
//         <hr />
//         <h3>{props.counter.count}</h3>
//         <Button variant="primary" onClick={props.decreaseCounter}>
//           -
//         </Button>
//         <Button
//           variant="secondary"
//           className="mx-2"
//           onClick={props.resetCounter}
//         >
//           RESET
//         </Button>
//         <Button variant="primary" onClick={props.increaseCounter}>
//           +
//         </Button>
//       </Container>
//     </>
//   );
// }

// const mapStateToProps = (state) => ({
//   counter: state.counter,
// });

// const mapDispatchToProps = { increaseCounter, decreaseCounter, resetCounter };
// // (null, mapDispatchToProps)
// // (mapStateToProps)
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// WITH REDUX HOOKS ===========================================================================
// import { useDispatch, useSelector } from "react-redux";
// import {
//   increaseCounter,
//   decreaseCounter,
//   resetCounter,
// } from "../../../redux/action/counter";

// function Counter() {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <Container className="text-center">
//         <Navbar />
//         <h1>Counter</h1>
//         <hr />
//         <h3>{count}</h3>
//         <Button variant="primary" onClick={() => dispatch(decreaseCounter())}>
//           -
//         </Button>
//         <Button
//           variant="secondary"
//           className="mx-2"
//           onClick={() => dispatch(resetCounter())}
//         >
//           RESET
//         </Button>
//         <Button variant="primary" onClick={() => dispatch(increaseCounter())}>
//           +
//         </Button>
//       </Container>
//     </>
//   );
// }

// export default Counter;
